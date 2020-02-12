import React from 'react';
import {
  Page,
  DescriptionBox,
  DescriptionBoxText,
  Geo1,
  Geo2,
  Geo3
} from "./LandingPage.styled";
import { PageTitle } from "styled/base/Page.styled";

import HaikuBuilder from '../haiku_builder/HaikuBuilder';
import geo from "assets/geo-index";


const LandingPage = ({ openModal, createHaikuShare, createHaiku, fetchAuthors, fetchNewHaiku, fetchUsers, currentUser, authors, newHaiku, users }) => {

  let description = currentUser ? `Welcome back! Conjure up a new haiku below.` : "Welcome to Guess Who, Haiku! Craft outstanding haikus with the help of the witsters of today’s popular culture, and challenge your friends to be the first to guess who the voices are behind your newfound literary genius.";

  return (
    <Page>
      <Geo1 src={geo.teal}></Geo1>
      <Geo2 src={geo.yellow}></Geo2>
      <Geo3 src={geo.purple}></Geo3>

      <PageTitle>Guess Who Haiku</PageTitle>
      <DescriptionBox>
        <DescriptionBoxText>{description}</DescriptionBoxText>
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