import React from 'react'
import { TR, TD, TDImg, MiniBadge } from './MyHaiku.styled';
import userAvatars from 'assets/userAvatars';
import { sample } from 'util/scoreboard_util';

const MiniScoreboardItem = ({ rank, username, time }) => {

  let userAvatar = sample(Object.keys(userAvatars));

  return (
    <TR>
      <TD>
        {(rank === 1) ? <MiniBadge /> : null}
        <TDImg src={userAvatars[userAvatar]}></TDImg>
      </TD>
      <TD>{rank}</TD>
      <TD>{username}</TD>
     <TD>{time}</TD>
    </TR>
  );
}

export default MiniScoreboardItem;





