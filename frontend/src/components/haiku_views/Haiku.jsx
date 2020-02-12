import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Creators as Modal } from 'store/modal/actions';
import { Thunks as Haikus } from 'store/haikus/actions';

import { FlipCard, FlipCardInner, FlipCardFront, FlipCardBack, FlipCardContent } from 'styled/base/CardGrid.styled';
import { LineList, LineItem, AuthorCoin, AuthorImg, LineText } from 'styled/base/Haiku.styled'
import { Details, Share, SharedUsers, ShareIcon, Modify, Toggle, DeleteIcon, MiniTable, TH } from './Haiku.styled';
import { compareShareTimeCompleted as compareTimestamp } from './compare_time_util'
import { formatHaikuLines } from 'util/haiku_format_util';
import moment from 'moment';
import MiniScoreboardItem from './MiniScoreboardItem';

const Haiku = ({ idx, haiku, users }) => {
  const dispatch = useDispatch();
  const openHaikuShow = () => dispatch(Modal.openModal('haikuShow', haiku._id));
  const deleteHaiku = () => dispatch(Haikus.deleteHaiku(haiku._id));
  const [isFlipped, setFlipped] = useState(false);
  const flip = () => setFlipped(prev => !prev);
  const lines = formatHaikuLines(haiku.body, idx);
  const bgUrl = lines[0].author.colorFamilyBackground;
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
  const fastestSolves = haiku.usersSharedWith
      .filter(({ complete }) => complete)
      .sort(compareTimestamp)
      .slice(0, 5)
      .map(({ userId, completeTimestamp }) => [users[userId].username, moment(completeTimestamp).from(haiku.dateCreated, true)]);

  return (
    <FlipCard>
      <FlipCardInner flipped={isFlipped}>
        <FlipCardFront url={bgUrl}>
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
                <Toggle onClick={flip}>Fastest Solvers</Toggle>
                <DeleteIcon onClick={deleteHaiku} />
              </Modify>
            </Details>
          </FlipCardContent>
        </FlipCardFront>
        <FlipCardBack url={bgUrl}>
          <FlipCardContent>
            {fastestSolves.length > 0 ? <MiniTable>
              <tbody>
                <tr>
                  <TH>{""}</TH>
                  <TH>Rank</TH>
                  <TH>Username</TH>
                  <TH>Solved In</TH>
                </tr>
                {fastestSolves.map(([username, time], i) => <MiniScoreboardItem
                  key={i}
                  rank={i + 1}
                  username={username}
                  time={time}
                />)}
              </tbody>
            </MiniTable> : <em>No one's completed this challenge</em>}
            <Toggle onClick={flip} large>Back</Toggle>
          </FlipCardContent>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  )
};

export default Haiku;

// {fastestSolves().map(([username, time], idx) => (
//   <tr>
//     <td>{idx++}</td><td>{username}</td><td>{time}</td>
//   </tr>
// ))}