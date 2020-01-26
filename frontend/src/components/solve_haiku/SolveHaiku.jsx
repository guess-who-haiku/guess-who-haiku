import React, { Fragment as F, useState, useEffect, memo, useRef } from 'react';
import { } from './SolveHaiku.styled';
import { useInterval} from 'util/use_interval';

const SolveHaiku = ({getHaiku, getAuthors, completeHaiku, match, haiku }) => {
  
  function fetchHaikuData() {
    getHaiku(match.params.haikuId);
  }
  
  /* set players author selection to local state*/
  const [authorSelection, setAuthorSelection] = useState([]);
  const [challengeAccepted, setChallengeAccepted] = useState(false);

  /* countdown timer */
  const [timeLeft, setTimeLeft] = useState(3); 
  const [timeStarted, setTimeStarted] = useState(false);

  
  /* step slice of state */
  const [step, setStep] = useState(0);

  /* fetch current haiku from the url on load */
  useEffect(() => {

    if(haiku === undefined) { /* if there isn't already a haiku in state */
      fetchHaikuData();
    }
  }, []);

  /* dispatch a get request to get authors + update global store */
  useEffect(() => {
    console.log('challengeAcceptedStatus', challengeAccepted);
    getAuthors();
  }, [challengeAccepted])

  
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

  // ----------------------------------STEPS

  const AcceptChallenge = memo(() => (
    <>
      <p>You've been challenged by:</p>
      <p>{haiku}</p>
      <p>Ready to Guess Who?</p>
      <button onClick={() => acceptChallengeAndToggleNext()}>Accept Challenge</button>
    </>

  ));
  
  const GetReadyPage = memo(() => (
    <>
      <p>Get READY BABY!</p>
      <p>{timeLeft}</p>
    </>
  ));


  const MakeSelection = memo(() => (
    <>
      <p>{haiku.body}</p>
      <div></div>
      <div>[Timer Placeholder Here]</div>
      <p></p>
    </>
    
    //now we need to render the correct authors for the game and some other authors
  ));

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
    console.log("toggled next!");
    let nextStep = step + 1 < Steps.length ? step + 1 : 0;
    setStep(nextStep);
    setReverse(false);
  };

  return (
    <>
      {React.createElement(Steps[step])}
    </>
  );  


};

export default SolveHaiku

