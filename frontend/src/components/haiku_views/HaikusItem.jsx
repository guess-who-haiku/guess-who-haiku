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
      haiku.usersSharedWith.reduce((acc, cur) => {
        if (cur.completeTimestamp && new Date(cur.completeTimestamp) < new Date(acc)) {
          fastestSolver = users[cur.userId].username;
          return cur.completeTimestamp;
        }
      }, (new Date("2030-01-01T00:00:00.000Z")))

      if (!fastestSolver) { //shared but unsolved
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
              {`First Solver: ${fastestSolver}`}
            </p >
          </SharedHaiku >

        )
      }

    }

    if (type === 'haikusSharedWith') {
      let completedTS = "";
      let solved = haiku.usersSharedWith.some(user => {
        if (user.userId === currentUser._id && user.complete) {
          completedTS = Date(user.completeTimestamp).toString()
                        .split(" ").slice(0,4).join(" ");
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