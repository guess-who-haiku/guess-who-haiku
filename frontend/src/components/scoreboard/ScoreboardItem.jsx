import React from 'react'
import { TDetail} from './Scoreboard.styled';

export default function ScoreboardItem({user}) {
    return (
        <tr>
            <TDetail>
            {user.username}
            </TDetail>
            <TDetail>
            {user.score.toFixed(0)}
            </TDetail>
        </tr>
    )
}