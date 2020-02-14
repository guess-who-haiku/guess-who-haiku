import React from 'react'
import { TR, TD, TDImg, MiniBadge } from './MyHaiku.styled';

const MiniScoreboardItem = ({ rank, username, avatar, time }) => (
  <TR>
    <TD>
      {(rank === 1) ? <MiniBadge /> : null}
      <TDImg avatar={avatar}></TDImg>
    </TD>
    <TD>{rank}</TD>
    <TD>{username}</TD>
    <TD>{time}</TD>
  </TR>
)

export default MiniScoreboardItem;





