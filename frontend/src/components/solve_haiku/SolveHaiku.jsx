import React, { Fragment as F, useState, useEffect, memo, useRef } from 'react';
import { } from './SolveHaiku.styled';
import { formatHaiku } from 'util/haiku_format_util';

const SolveHaiku = ({getHaiku, completeHaiku, haikuId, haiku, authors, users }) => {
  
  const AUTHOR_OPTIONS_NUM = 6;
  
  // ----------------------------FETCH HAIKU
  useEffect(() => {

    if(haiku === undefined) { /* if there isn't already a haiku in state */
      getHaiku(haikuId);
    }
  }, []);

  // ---------------------------ASSIGN LOCAL STATE
  const [authorSelection, setAuthorSelection] = useState([]);
  const [challengeAccepted, setChallengeAccepted] = useState(false);
  const [authorOptions, setAuthorOptions] = useState([]);

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
  

  async function acceptChallengeAndToggleNext() {

    setChallengeAccepted(true);
    toggleNext();
    startCountDown();

  }
 
  function generateAuthorOptions() {
    
    if(authorOptions.length === 0) {

      let authorsFromHaikuBody = Object.keys(haiku.body);
      setAuthorOptions(authorOptions.concat(authorsFromHaikuBody));
      
    }
  }

  function generateAllAuthorOptions() {

    if(authorOptions.length !== 0) {
      
      // console.log(haiku.body);
      for (let i = 0; i < AUTHOR_OPTIONS_NUM - authorOptions.length; i++) {
  
          let randomAuthorId = Math.floor(Math.random() * Object.keys(authors).length)
          // console.log(authors[randomAuthorId]);
          let randomAuthor = authors[randomAuthorId];
          setAuthorOptions([...authorOptions, randomAuthor]);
        
      }
    }

  }

  function handleAuthorSelect(e) {
    
    const selection = e.target.innerText;
  
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

    let correctAuthors = Object.keys(haiku.body);
    console.log('correct Authors are', correctAuthors);

    for(let select of authorSelection) {
      if (!correctAuthors.includes(select)) return false; 
    }
    return true; 
  }

  function makeGuessAndToggleNext() {
    selectionMatches() ? setStep(4) : setStep(3)
  }

  // ----------------------------------STEPS

  const AcceptChallenge = memo(() => {

    let username = (users && haiku && users[haiku.creator]) ? users[haiku.creator].username : undefined;
    
    if (username) {
      return (
        <>
          <p>You've been challenged by:</p>
          <p>{users[haiku.creator].username}</p>
          <p>Ready to Guess Who?</p>
          <button onClick={() => acceptChallengeAndToggleNext()}>
            Accept Challenge
          </button>
        </>
      );
    }

});
  
  const GetReadyPage = memo(() => (
    <>
      <p>The faster you answer correctly, the more your points</p>
      <p>Ready, in:</p>
      <p>{timeLeft}</p>
    </>
  ));


  const MakeSelection = memo(() => {

    let haikuAuthors = Object.keys(haiku.body);

    if (authors) {

      // console.log('generating author options')
      generateAuthorOptions(haikuAuthors);
      generateAllAuthorOptions();

      let haikuText = formatHaiku(haiku.body, haikuAuthors);
      // console.log(haikuText);

      return (
        <>
          <div>{haikuText}</div>
          <p>{haikuAuthors.length} authors</p>
          <div>
            {authorOptions.map((option, idx) => (
              <p onClick={handleAuthorSelect} key={idx}>
                {option}
              </p>
            ))}
          </div>
          <button onClick={() => makeGuessAndToggleNext()}>Make Guess</button>
          <div>[Timer Placeholder Here]</div>
          <p></p>
        </>
      );
    } else {
      return null;
    }
   
    
    //now we need to render the correct authors for the game and some other authors
  });

  const IncorrectSelection = memo(() => (
    <>
      <p>Nope sorry, wrong guess</p>
    </>
  ));

  const CorrectSelection = memo(() => (
    <>
      <p>Wooohoo yes, now make an account to share</p>
    </>
  ));


  const [reverse, setReverse] = useState(false);
  const Steps = [
                  AcceptChallenge, 
                  GetReadyPage, 
                  MakeSelection, 
                  IncorrectSelection, 
                  CorrectSelection
                ];

  const toggleBack = () => {
    let prevStep = step - 1 < 0 ? Steps.length - 1 : step - 1;
    setStep(prevStep);
    setReverse(true);
  };

  const toggleNext = () => {
    // console.log("toggled next!");
    let nextStep = step + 1 < Steps.length ? step + 1 : 0;
    setStep(nextStep);
    setReverse(false);
  };

  
  console.log("author options after adding haiku authors", authorOptions);
  console.log('selection', authorSelection);
  return (
    <>
      { (haiku && users) ? React.createElement(Steps[step]): null }
    </>
  );  


};

export default SolveHaiku

