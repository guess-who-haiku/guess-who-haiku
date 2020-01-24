import React from 'react';
import { Page, Title, DescriptionBox } from './LandingPage.styled';
import HaikuBuilder from '../haiku_builder/HaikuBuilder';

const LandingPage = ({ openModal, createHaikuShares, createHaiku, fetchAuthors, fetchNewHaiku, fetchUsers, currentUser }) => {

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   createHaikuShares(data).then(()=> fetchUsers())
  // }

  let description = currentUser ? `Hi there, ${currentUser.username}! Conjure up a new haiku below:` : "Welcome to Guess Who, Haiku! Craft outstanding haikus with the help of the witsters of today’s popular culture, and challenge your friends to be the first to GUESS WHO the voice is behind your newfound literary genius.";

  return (
    <Page>
      <Title>Guess, Who Haiku</Title>
      <DescriptionBox>
        {description}
      </DescriptionBox>
      <HaikuBuilder createHaiku={createHaiku} createHaikuShares={createHaikuShares} fetchAuthors={fetchAuthors} fetchNewHaiku={fetchNewHaiku} />
      <button onClick={() => openModal('test')}>test modal</button>
    </Page>
  );
}

export default LandingPage;