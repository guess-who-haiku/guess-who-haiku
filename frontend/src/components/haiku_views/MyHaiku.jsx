import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Creators as Modal } from 'store/modal/actions';
import { Thunks as Haikus } from 'store/haikus/actions';

import { FlipCard, FlipCardInner, FlipCardFront, FlipCardBack, FlipCardContent } from 'styled/base/CardGrid.styled';
import { LineList, LineItem, AuthorCoin, AuthorImg, LineText } from 'styled/base/Haiku.styled'
import { Details, Share, SharedUsers, ShareIcon, Modify, SolversToggle, DeleteIcon, SolversTable } from './MyHaiku.styled';

import { formatHaikuLines } from 'util/haiku_format_util';
import moment from 'moment';

const compareShareDates = (shareA, shareB) => {
  const dateA = new Date(shareA.completeTimestamp);
  const dateB = new Date(shareB.completeTimestamp);
  return dateA > dateB ? 1 : -1;
}

const MyHaiku = ({ idx, haiku, users }) => {
  const dispatch = useDispatch();
  const openHaikuShow = () => dispatch(Modal.openModal('haikuShow', haiku._id));
  const deleteHaiku = () => dispatch(Haikus.deleteHaiku(haiku._id));
  const [isFlipped, setFlipped] = useState(false);
  const flip = () => setFlipped(prev => !prev);
  const lines = formatHaikuLines(haiku.body)
  const authorColors = lines.map(line => line.author.color);
  const renderSharedUsers = () => {
    let userCount = haiku.usersSharedWith.length;
    if (userCount === 0) return (<>Share</>)
    let firstUser = users[haiku.usersSharedWith[0].userId].username;
    return (
      <>
        Shared with <strong>{firstUser}</strong> and <strong>{userCount}</strong> other{userCount > 1 && 's'}
      </>
    )
  }
  const fastestSolves = () => {
    return haiku.usersSharedWith
      .filter(({ complete }) => complete)
      .sort(compareShareDates)
      .slice(0, 5)
      .map(({ userId, completeTimestamp }) => [users[userId].username, moment(completeTimestamp).from(haiku.dateCreated, true)])
  }

  return (
    <FlipCard>
      <FlipCardInner flipped={isFlipped}>
        <FlipCardFront gradientColors={authorColors}>
          <FlipCardContent>
            <LineList>
              {lines.map(({ author, text }, lineIdx) => (<LineItem key={lineIdx}>
                <AuthorCoin borderColor={author.color} alignRight={(lineIdx + idx) % 2}>
                  <AuthorImg src={author.url} alt={author.name} />
                </AuthorCoin>
                <LineText highlightColor={author.color}>{text}</LineText>
              </LineItem>))}
            </LineList>
            <Details>
              <Share onClick={openHaikuShow}>
                <ShareIcon />
                <SharedUsers>
                  {renderSharedUsers(haiku)}
                </SharedUsers>
              </Share>
              <Modify>
                <SolversToggle
                  onClick={flip}
                >
                  Fastest Solvers
                </SolversToggle>
                <DeleteIcon onClick={deleteHaiku} />
              </Modify>
            </Details>
          </FlipCardContent>
        </FlipCardFront>
        <FlipCardBack gradientColors={authorColors}>
          <FlipCardContent>
            <SolversTable>
              <tr>
                <th>Rank</th><th>User</th><th>Solved In</th>
              </tr>
              {fastestSolves().map(([username, time], idx) => (
                <tr>
                  <td>{idx++}</td><td>{username}</td><td>{time}</td>
                </tr>
              ))}
            </SolversTable>
            <SolversToggle
              onClick={flip}
            >
              Details
                </SolversToggle>
          </FlipCardContent>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  )
};

export default MyHaiku;