import React, { Fragment as F, useState, useEffect, memo, useRef } from 'react';
import { } from './SolveHaiku.styled';
import { formatHaiku } from 'util/haiku_format_util';
import { HSContainer, 
         Message, 
         MsgHighlight,
         MsgSub, 
         Button,
         Countdown,
         HaikuContainer,
         LIContainer,
         AuthorItem,
         AuthorIcon
        } from "./SolveHaiku.styled";



import barackObama from "../../assets/barack_obama.jpg";
import donaldTrump from "../../assets/donald_trump.jpg";
import gameOfThrones from "../../assets/game_of_thrones.jpg";
import homerSimpson from "../../assets/homer_simpson.jpg";
import janeAusten from "../../assets/jane_austen.jpg";
import kanyeWest from "../../assets/kanye_west.jpg";
import rickAndMorty from "../../assets/rick_and_morty.jpg";

const imgHash = {
  "Barack Obama": barackObama,
  "Donald Trump": donaldTrump,
  "Game of Thrones": gameOfThrones,
  "Homer Simpson": homerSimpson,
  "Jane Austen": janeAusten,
  "Kanye West": kanyeWest,
  "Rick and Morty": rickAndMorty
};

const SolveHaiku = ({getHaiku, completeHaiku, haikuId, haiku, authors, users, currUserId }) => {
  
  const AUTHOR_OPTIONS_NUM = 6;
  
  // ----------------------------FETCH HAIKU
  useEffect(() => {

    if(haiku === undefined) { /* if there isn't already a haiku in state */
      getHaiku(haikuId);
    }
  }, []);

  // ---------------------------ASSIGN LOCAL STATE
  const [authorSelection, setAuthorSelection] = useState([]);
  const [challengeAcceptedTS, setChallengeAcceptedTS] = useState(null);
  const [challengeCompletedTS, setChallengeCompletedTS] = useState(false);
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [authorOptions, setAuthorOptions] = useState([]);
  const [authorOptionsSelected, setAuthorOptionsSelected] = useState(false);

  /* countdown timer */
  const [timeLeft, setTimeLeft] = useState(3); 
  const [timeStarted, setTimeStarted] = useState(false);
  
  /* step slice of state */
  const [step, setStep] = useState(0);


  
  // --------------------------COUNTDOWN TIMER
  const startCountDown = () => { setTimeStarted(true) }

  useEffect(() => {

    if (timeLeft === 0 && timeStarted) { /* countdown has finished */
      toggleNext();
    }

    if(!timeLeft || !timeStarted) { /* countdown hasn't begun */
      return;
    };

    const intervalId = setInterval(() => {
  
      setTimeLeft(timeLeft - 1);

    }, 1000);

    return () => {
      clearInterval(intervalId);
    };

  }, [timeLeft, timeStarted])
  

  // -------------------------COMPLETED CHALLENGE
  
  useEffect(() => {
    if(challengeCompleted) {

      console.log('UPDATING:', haikuId, currUserId, challengeAcceptedTS, challengeCompletedTS)

      completeHaiku(haikuId, 
                    currUserId, 
                    challengeCompleted,
                    challengeAcceptedTS, 
                    challengeCompletedTS
                    );
    }
  }, [challengeCompleted])




  async function acceptChallengeAndToggleNext() {

    setChallengeAcceptedTS(Date.now());
    toggleNext();
    startCountDown();

  }

  function randomShuffle(array) {
     // if the user has made a guess
      
      let shuffled = array.slice(0);

      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
      }

      return shuffled
    
  }
 
  function setInitialAuthorOptions() {
    
    if(authorOptions.length === 0) {

      let authorsFromHaikuBody = Object.keys(haiku.body);
      setAuthorOptions(authorOptions.concat(authorsFromHaikuBody));
      
    }
  }

  function generateAllAuthorOptions() {  //adds other options to the authorOptions array

    if(authorOptions.length !== 0 && !authorOptionsSelected) {
      
      let toShuffle = authorOptions.slice(0);
 

      while(toShuffle.length < AUTHOR_OPTIONS_NUM) {
  
          let randomAuthorId = Math.floor(Math.random() * Object.keys(authors).length)
          let randomAuthor = authors[randomAuthorId];

          if( !toShuffle.includes(randomAuthor)) {

            toShuffle = toShuffle.concat(randomAuthor);
            toShuffle = randomShuffle(toShuffle);

          }
          
      }

      setAuthorOptions(toShuffle);
      setAuthorOptionsSelected(true);
    } 

  }


  function handleAuthorSelect(e) {
    
    const selection = e.currentTarget.innerText;
  
    if (authorSelection.includes(selection)) {  //previously selection, user wants to unselect
      
      let newAuthorSelection = authorSelection.slice(0).filter((value, index, arr) => {
        return value !== selection
      }); 
      setAuthorSelection(newAuthorSelection);

    } else if(authorSelection.length < Object.keys(haiku.body).length) { //not previously selected, and there's still open slots
      setAuthorSelection([...authorSelection, selection])
    }
  }

  function selectionMatches() {  //compares the users guess against the correct answer 

    if (authorSelection.length === 0) return false;
    let correctAuthors = Object.keys(haiku.body);
    for(let select of authorSelection) {
      if (!correctAuthors.includes(select)) return false; 
    }
    return true; 
  }

  function makeSelectionAndToggleNext() {

    if(authorSelection.length === 0) return;

    if (selectionMatches() && currUserId) { 

      setChallengeCompletedTS(Date.now());
      setChallengeCompleted(true);
      setStep(4); //send to Correct SelectionLoggedIn 

    } else if (selectionMatches() && !currUserId) {
      setStep(5); //send to CorrectSelectionNotLoggedIn 
      
    } else {
      setStep(3); //send to IncorrectSelection step
    }
  }

  function backToMakeSelection() {
    setAuthorSelection([]); //reset the authorSelection
    toggleBack(); //go back
  }

  // ----------------------------------STEPS

  const AcceptChallenge = memo(() => {

    let username = (users && haiku && users[haiku.creator]) ? users[haiku.creator].username : undefined;
    
    if (username) {
      return (
        <>
          <Message>You've been challenged by</Message>
          <MsgHighlight>{users[haiku.creator].username}</MsgHighlight>
          <MsgSub>Ready to Guess Who?</MsgSub>
          <Button onClick={() => acceptChallengeAndToggleNext()}>
            Accept Challenge
          </Button>
        </>
      );
    }

});
  
  const GetReadyPage = memo(() => (
    <>
      <Message>The faster you answer correctly, the more your points</Message>
      <MsgSub>Ready, in:</MsgSub>
      <MsgHighlight>
        <Countdown>{timeLeft}</Countdown>
      </MsgHighlight>
    </>
  ));


  const MakeSelection = memo(() => {

    let haikuAuthors = Object.keys(haiku.body);

    if (authors) {

      setInitialAuthorOptions(haikuAuthors);
      generateAllAuthorOptions();

      let haikuText = formatHaiku(haiku.body, haikuAuthors);

      return (
        <>
          <HaikuContainer>
            {haikuText.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </HaikuContainer>
          <Message>Pick {haikuAuthors.length} authors</Message>
          <LIContainer>
            {authorOptions.map((option, idx) => (
              <AuthorItem onClick={handleAuthorSelect} key={idx}>
                <AuthorIcon src={imgHash[option]} alt={option} />
                {option}
              </AuthorItem>
            ))}
          </LIContainer>
          <Button onClick={() => makeSelectionAndToggleNext()}>
            Make Guess
          </Button>
          {/* <div>[Timer Placeholder Here]</div> */}
          <p></p>
        </>
      );
    } else {
      return null;
    }
   
    
  // -------------------------------------STEPS
  });

  const IncorrectSelection = memo(() => (
    <>
      <p>That was incorrect, keep trying!</p>
      <button onClick={() => backToMakeSelection()}>Try Again</button>
    </>
  ));

   const CorrectSelectionLoggedIn = memo(() => (
     <>
       <p>CORRECT! Recording your score!</p>
     </>
   ));


  const CorrectSelectionNotLoggedIn = memo(() => (
    <>
      <p>CORRECT! Now make an account to share</p>
    </>
  ));


  const [reverse, setReverse] = useState(false);
  const Steps = [
                  AcceptChallenge, 
                  GetReadyPage, 
                  MakeSelection, 
                  IncorrectSelection, 
                  CorrectSelectionLoggedIn,
                  CorrectSelectionNotLoggedIn
                ];


  // ----------------------------------------TOGGLING STEPS              
  const toggleBack = () => {
    let prevStep = step - 1 < 0 ? Steps.length - 1 : step - 1;
    setStep(prevStep);
    setReverse(true);
  };

  const toggleNext = () => {
    let nextStep = step + 1 < Steps.length ? step + 1 : 0;
    setStep(nextStep);
    setReverse(false);
  };

  
  console.log("author options after adding haiku authors", authorOptions);
  console.log('selection', authorSelection);
  return (
    <HSContainer>
      { (haiku && users) ? React.createElement(Steps[step]): null }
    </HSContainer>
  );  


};

export default SolveHaiku

