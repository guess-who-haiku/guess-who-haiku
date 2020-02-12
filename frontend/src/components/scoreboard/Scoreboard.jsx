import React, { useEffect } from 'react';
import { ScoreboardItem } from './ScoreboardItem';
import { SBcontainer, Table, TDetail, SBIndex, SBIndexLink } from "./Scoreboard.styled";
import { Page, PageTitle } from 'styled/base/Page.styled';


const Scoreboard = ({ fetchUsers, users, currentUser }) => {

    useEffect(() => {
        fetchUsers()
    }, [])

    const compareScore = (a, b) => {
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

    const compareHaikusGen = (a, b) => {
      const userA = a.haikusCreated.length;
      const userB = b.haikusCreated.length;

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
        let sortedUsers = copyUsers.sort(compareScore);
        let scoresArray = [];
        for (let i = 0; (i < 10) && (i < sortedUsers.length); i++) {
            scoresArray.push(
              <ScoreboardItem
                key={i}
                isScore={true}
                rank={i + 1}
                currentUser={currentUser}
                user={sortedUsers[i]}
              />
            );
        }
        return scoresArray;
    }


    const topTenHaikuGen = () => {

      let copyUsers = Object.values(users);
      let sortedUsersByHaikusGen = copyUsers.sort(compareHaikusGen);
      let haikuGenArray = [];

      for (let i = 0; i < 10 && i < sortedUsersByHaikusGen.length; i++) {
        haikuGenArray.push(
          <ScoreboardItem
            key={i}
            isScore={false}
            rank={i + 1}
            currentUser={currentUser}
            user={sortedUsersByHaikusGen[i]}
          />
        );
      }
      return haikuGenArray;
    }

    if (Object.keys(users).length === 0) {
        return null;
    }
    return (
      <Page>
        <SBIndex>
          <div>
            <PageTitle>Top Scorers</PageTitle>
            <SBIndexLink>Go to Most Haikus Made</SBIndexLink>
            <SBcontainer>
              <Table>
                <tbody>
                  <tr>
                    <TDetail>{""}</TDetail>
                    <TDetail>Rank</TDetail>
                    <TDetail>Username</TDetail>
                    <TDetail>Score</TDetail>
                  </tr>
                  {topTenScores()}
                </tbody>
              </Table>
            </SBcontainer>
          </div>
          <div>
            <a name="HaikusMade"></a>
            <PageTitle>Most Haikus Made</PageTitle>
            <SBcontainer>
              <Table>
                <tbody>
                  <tr>
                    <TDetail>{""}</TDetail>
                    <TDetail>Rank</TDetail>
                    <TDetail>Username</TDetail>
                    <TDetail>Haikus</TDetail>
                  </tr>
                  {topTenHaikuGen()}
                </tbody>
              </Table>
            </SBcontainer>
          </div>
        </SBIndex>
      </Page>
    );
}

export default Scoreboard;
