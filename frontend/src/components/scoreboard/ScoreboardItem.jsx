import React from 'react'
import { TRow, TDetail, TDetailImage, Badge } from './Scoreboard.styled';
import userAvatars from 'assets/userAvatars';
import { sample } from '../../util/scoreboard_util';

export function ScoreboardItem({ isScore, rank, user, currentUser }) {
    
    let userAvatar = sample(Object.keys(userAvatars));

    return (
      <TRow data-current-user={user === currentUser}>
        <TDetail>
          { ( rank === 1) ? <Badge /> : null}
          <TDetailImage src={userAvatars[userAvatar]}></TDetailImage>
        </TDetail>
        <TDetail>{rank}</TDetail>
        <TDetail>{user.username}</TDetail>
        {(isScore) ? <TDetail>{user.score.toFixed(0)}</TDetail> : <TDetail>{user.haikusCreated.length}</TDetail>}
      </TRow>
    );

}





