import React from 'react'

export default function ScoreboardItem({user}) {
    return (
        <tr>
            <td>
            {user.username}
            </td>
            <td>
            {user.score}
            </td>
        </tr>
    )
}