import React from 'react';
import { Page, PageTitle, DescriptionBox } from './LandingPage.styled';
import HaikuBuilder from '../haiku_builder/HaikuBuilder';

const LandingPage = ({ openModal, createHaikuShare, createHaiku, fetchAuthors, fetchNewHaiku, fetchUsers, currentUser, authors, newHaiku, users }) => {

  let description = currentUser ? `Welcome back! Conjure up a new haiku below.` : "Welcome to Guess Who, Haiku! Craft outstanding haikus with the help of the witsters of today’s popular culture, and challenge your friends to be the first to guess who the voice is behind your newfound literary genius.";

  return (
    <Page>
      <PageTitle>Guess Who Haiku</PageTitle>
      <DescriptionBox>
        {description}
      </DescriptionBox>

      <HaikuBuilder
        createHaiku={createHaiku}
        createHaikuShare={createHaikuShare}
        fetchAuthors={fetchAuthors}
        fetchUsers={fetchUsers}
        fetchNewHaiku={fetchNewHaiku}
        authors={authors}
        newHaiku={newHaiku}
        users={users}
        openModal={openModal}
        currentUser={currentUser}
      />

    </Page>
  );
}

export default LandingPage;