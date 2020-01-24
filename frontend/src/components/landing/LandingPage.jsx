import React from 'react';
import { Page, Title, DescriptionBox } from './LandingPage.styled';

const LandingPage = ({ openModal, createHaikuShares, fetchUsers }) => {

  return (
    <Page>
      <Title>Guess, Who Haiku</Title>
      <DescriptionBox>
        Craft outstanding haikus with the help of the witsters of today’s popular culture, and challenge your friends to be the first to GUESS WHO the voice is behind your newfound literary genius.
      </DescriptionBox>
      <button onClick={() => openModal('test')}>test modal</button>
    </Page>
  );
}

export default LandingPage;