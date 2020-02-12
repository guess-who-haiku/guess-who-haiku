import React from 'react';
import { useDispatch } from 'react-redux';
import { Creators as Modal } from 'store/modal/actions';
import { Card, CardContent } from 'styled/base/CardGrid.styled';
import { LineList, LineItem, AuthorCoin, AuthorImg, LineText } from 'styled/base/Haiku.styled'
import { SolveBtn } from './Challenge.styled';
import { formatHaikuLines } from 'util/haiku_format_util';

const MyChallenge = ({ idx, haiku, users, currentUserId }) => {
  const dispatch = useDispatch();
  const openSolveModal = () => dispatch(Modal.openModal('haikuShow', haiku._id))
  const lines = formatHaikuLines(haiku.body)
  const authorColors = lines.map(line => line.author.color);
  console.log(haiku._id, haiku.usersSharedWith)
  const challenge = haiku.usersSharedWith.find(({ userId }) => userId === currentUserId)
  const solved = challenge.complete;


  return (
    <Card gradientColors={solved ? authorColors : undefined}>
      <CardContent>
        <LineList>
          {lines.map(({ author, text }, lineIdx) => (<LineItem key={lineIdx}>
            <AuthorCoin borderColor={solved && author.color} alignRight={(lineIdx + idx) % 2}>
              <AuthorImg src={solved && author.url} alt={solved && author.name} />
            </AuthorCoin>
            <LineText highlightColor={solved && author.color}>{text}</LineText>
          </LineItem>))}
        </LineList>
        {!solved && <SolveBtn onClick={openSolveModal}>Solve</SolveBtn>}
      </CardContent>
    </Card>
  )
};

export default MyChallenge;