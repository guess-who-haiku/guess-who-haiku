import React from 'react';
import { HaikuBox, HaikuLine, Haiku, SharedIcon } from './Haikus.styled';
import { formatHaiku } from '../../util/haiku_format_util';

export default function HaikusItem({ haiku, openModal, type, currentUser, users }) {
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
          <Haiku>
            {displayHaiku()}
          </Haiku>
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
          <Haiku>
            {displayHaiku()}
            <SharedIcon />
          </Haiku>
        )
      } else { //shared and solved
        return (

          <Haiku>
            {displayHaiku()}
            < p >
              `Solved first by: ${fastestSolver}`
          </p >
          </Haiku>

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
          <Haiku>
            {displayHaiku()}
            <p>Creator: {creator}</p>
            <p>Completed on: {completedTS}</p>
          </Haiku>
        )
      } else {
        return (
          <Haiku>
            {displayHaiku()}
            <p>Creator: {creator}</p>
          </Haiku>
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