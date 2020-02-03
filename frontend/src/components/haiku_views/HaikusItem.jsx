import React from 'react';
import { HaikuBox, HaikuLine, UnsharedHaiku, SharedHaiku } from './Haikus.styled';
import { formatHaiku } from '../../util/haiku_format_util';

export default function HaikusItem({haiku, openModal, type, currentUser, users}) {
  if (haiku === undefined || haiku.body === undefined) return null;


  const displayHaiku = () => {
    // console.log('Haiku: ', haiku)
    const text = formatHaiku(haiku.body, Object.keys(haiku.body))
    return (
      <>
        <HaikuLine>{text[0]}</HaikuLine>
        <HaikuLine>{text[1]}</HaikuLine>
        <HaikuLine>{text[2]}</HaikuLine>
      </>
    )
  }

  const displayHaikuStatus = () => {

    if (type === 'haikusCreated') {

      if (haiku.usersSharedWith.length === 0) { //unshared
        return (
          <UnsharedHaiku>
            {displayHaiku()}
          </UnsharedHaiku>
        )
      }

      let fastestSolver = "";
      let fastestSolve = haiku.usersSharedWith.reduce((acc, cur) => {
        if (cur.completeTimestamp && cur.completeTimestamp < acc) {
          fastestSolver = cur.username;
          return cur;
        }
      }, 0)

      if (!fastestSolve) { //shared but unsolved
        return (
          <SharedHaiku>
            {displayHaiku()}
          </SharedHaiku>
        )
      } else { //shared and solved
        return (

          < SharedHaiku >
            {displayHaiku()}
            < p >
              `Solved first by: ${fastestSolver}`
          </p >
          </SharedHaiku >

        )
      }

    }

    if (type === 'haikusSharedWith') {
      let completedTS = "";
      let solved = haiku.usersSharedWith.some(user => {
        if (user._id === currentUser._id && user.complete) {
          completedTS = Date(user.completeTimestamp).toString();
          return true;
        }
        return false;
      })

      let creator = "";
      if (users[haiku.creator]) {
        creator = users[haiku.creator].username
      }

      if (solved) {
        return (
          <UnsharedHaiku>
            {displayHaiku()}
            <p>Creator: {creator}</p>
            <p>Completed on: {completedTS}</p>
          </UnsharedHaiku>
        )
      } else {
        return (
          <SharedHaiku>
            {displayHaiku()}
            <p>Creator: {creator}</p>
          </SharedHaiku>
        )
      }

    }
  };

  return (
    <HaikuBox onClick={() => openModal(haiku._id)}>
      {displayHaikuStatus()}
    </HaikuBox>
  );
}

//Challenges
//author
//completed?
//completedTS

//My Haikus
//solved first by
//saved Haiku without sharing at all