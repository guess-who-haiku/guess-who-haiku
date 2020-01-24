import React, { Component } from 'react';
import ScoreboardItem from './ScoreboardItem';
import { SBcontainer, Table, TDetail } from "./Scoreboard.styled";

export default class Scoreboard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    compare(a,b) {
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

    topTenScores() {
        let copyUsers = this.props.users.data.slice();
        let sortedUsers = copyUsers.sort(this.compare);
        let scoresArray = [];
        for (let i = 0; i < 10; i++) {
            scoresArray.push(
              <ScoreboardItem user={sortedUsers[i]} key={i} />
            );
        }
        return scoresArray;
    }

    render() {
        if (Object.values(this.props.users).length === 0) {
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
                        {this.topTenScores()}
                    </tbody>
                </Table>
            </SBcontainer>
        )
    }
}
