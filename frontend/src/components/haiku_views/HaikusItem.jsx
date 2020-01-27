import React from 'react';
import { HaikuBox, HaikuLine } from './Haikus.styled';
import { formatHaiku } from '../../util/haiku_format_util';

export default function HaikusItem({haiku, openModal, type}) {
    if (haiku === undefined) return null;

    const stats = () => {
      if (type === 'haikusCreated' && haiku.usersSharedWith.length === 0) {
        return (
            'Has not been shared'
        )
      }
      // else if (type === 'haikusCreated' && unsolved) {
      //   return (
      //     <p>
      //       Has not been solved yet
      //     </p>
      //   )
      // }
      // else if (type === 'haikusCreated' && solved) {
      //   return (
      //     <p>
      //       Solved first by: {haiku.usersSharedWith}
      //     </p>
      //   )
      // }
      else {
        return (
          haiku.creator
        )
      }
    };

    let text = formatHaiku(haiku.body, Object.keys(haiku.body))
    return (
      <HaikuBox onClick={() => openModal(haiku._id)}>
        <HaikuLine>{text[0]}</HaikuLine>
        <HaikuLine>{text[1]}</HaikuLine>
        <HaikuLine>{text[2]}</HaikuLine>
        <p>{stats()}</p>
      </HaikuBox>
    );
}

// Challenges
//author
//completed?
//completedTS

//My Haikus
//solved first by
//saved Haiku without sharing at all