import React, { Component } from 'react';
import ScoreboardItem from './ScoreboardItem';

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
        // console.log(this.props.users.data);
        console.log(sortedUsers);
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
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Username
                            </td>
                            <td>
                                Score
                            </td>
                        </tr>
                        {this.topTenScores()}
                    </tbody>
                </table>
            </div>
        )
    }
}
