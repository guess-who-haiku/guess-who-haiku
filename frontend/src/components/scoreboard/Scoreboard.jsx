import React, { useEffect } from 'react';
import ScoreboardItem from './ScoreboardItem';
import { SBcontainer, Table, TDetail } from "./Scoreboard.styled";

const Scoreboard = ({ fetchUsers, users, currentUser }) => {

    useEffect(() => {
        fetchUsers()
    }, [])

    const compare = (a, b) => {
        const userA = a.score;
        const userB = b.score;

        let comparison = 0;
        if (userA > userB) {
            comparison = -1;
        } else if (userA < userB) {
            comparison = 1;
        }
        return comparison;
    }

    const topTenScores = () => {
        let copyUsers = Object.values(users);
        let sortedUsers = copyUsers.sort(compare);
        let scoresArray = [];
        for (let i = 0; (i < 10) && (i < sortedUsers.length); i++) {
            scoresArray.push(
                <ScoreboardItem key={i}
                    currentUser={currentUser}
                    user={sortedUsers[i]}
                />
            );
        }
        return scoresArray;
    }

    if (Object.keys(users).length === 0) {
        return null;
    }
    return (
        <SBcontainer>
            <Table>
                <tbody>
                    <tr>
                        <TDetail>
                            Username
                        </TDetail>
                        <TDetail>
                            Score
                        </TDetail>
                    </tr>
                    {topTenScores()}
                </tbody>
            </Table>
        </SBcontainer>
    )
}

export default Scoreboard;
