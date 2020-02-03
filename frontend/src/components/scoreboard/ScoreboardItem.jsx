import React from 'react'
import { TRow, TDetail } from './Scoreboard.styled';

export default function ScoreboardItem({ user, currentUser }) {
    return (
        <TRow data-current-user={user === currentUser}>
            <TDetail>
                {user.username}
            </TDetail>
            <TDetail>
                {user.score.toFixed(0)}
            </TDetail>
        </TRow>
    )
}