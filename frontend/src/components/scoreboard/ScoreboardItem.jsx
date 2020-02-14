import React from 'react'
import { TRow, TDetail, TDetailImage, Badge } from './Scoreboard.styled';

export function ScoreboardItem({ isScore, rank, user, currentUser }) {
  return (
    <TRow data-current-user={user === currentUser}>
      <TDetail>
        {(rank === 1) ? <Badge /> : null}
        <TDetailImage avatar={user.avatar}></TDetailImage>
      </TDetail>
      <TDetail>{rank}</TDetail>
      <TDetail>{user.username}</TDetail>
      {(isScore) ? <TDetail>{user.score.toFixed(0)}</TDetail> : <TDetail>{user.haikusCreated.length}</TDetail>}
    </TRow>
  );
}





