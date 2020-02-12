import React, { memo, useState } from 'react';
import { FlipCard, FlipCardInner, FlipCardFront, FlipCardBack, FlipCardContent } from 'styled/base/CardGrid.styled';
import { LineList, LineItem, AuthorCoin, AuthorImg, LineText } from 'styled/base/Haiku.styled'
import { Details, Share, SharedUsers, ShareIcon, Modify, ScoreboardToggle, DeleteIcon } from './MyHaiku.styled';
import { formatHaikuLines } from 'util/haiku_format_util';

const MyHaiku = memo(({ idx, haiku, openHaikuShow, users }) => {
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
        Shared with <strong>{firstUser}</strong>
        and <strong>{userCount}</strong> other{userCount > 1 && 's'}
      </>
    )
  }
  return (
    <FlipCard>
      <FlipCardInner flipped={isFlipped}>
        <FlipCardFront gradientColors={authorColors} url={lines[0].author.colorFamilyBackground} >
          <FlipCardContent>
            <LineList>
              {lines.map(({ author, text }, lineIdx) => (
                <LineItem key={lineIdx}>
                  <AuthorCoin borderColor={author.color} alignRight={(lineIdx + idx) % 2 === 0}>
                    <AuthorImg src={author.url} alt={author.name} />
                  </AuthorCoin>
                  <LineText highlightColor={author.color}>{text}</LineText>
                </LineItem>
              ))}
            </LineList>
            <Details>
              <Share>
                <ShareIcon />
                <SharedUsers>
                  {renderSharedUsers(haiku)}
                </SharedUsers>
              </Share>
              <Modify>
                <ScoreboardToggle
                  onClick={flip}
                >
                  Scoreboard
                </ScoreboardToggle>
                <DeleteIcon />
              </Modify>
            </Details>
          </FlipCardContent>
        </FlipCardFront>
        <FlipCardBack gradientColors={authorColors}>
          <FlipCardContent>
            This is the back
        </FlipCardContent>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  )
});

export default MyHaiku;