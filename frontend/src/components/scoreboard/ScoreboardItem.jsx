import React from 'react'
import { TRow, TDetail, TDetailImage } from './Scoreboard.styled';
import userAvatars from 'assets/userAvatars';
import { sample } from '../../util/scoreboard_util';

export default function ScoreboardItem({ rank, user, currentUser }) {
    
    let userAvatar = sample(Object.keys(userAvatars));

    return (
      <TRow data-current-user={user === currentUser}>
        <TDetail>
          <TDetailImage src={userAvatars[userAvatar]}></TDetailImage>
        </TDetail>
        <TDetail>{rank}</TDetail>
        <TDetail>{user.username}</TDetail>
        <TDetail>{user.score.toFixed(0)}</TDetail>
      </TRow>
    );


}