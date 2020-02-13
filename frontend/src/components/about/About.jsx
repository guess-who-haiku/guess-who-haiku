import React from 'react';
import {
    Github, LinkedIn, ProfileContainer, ProfileBox, LinkBox,
    Name, Picture, ProfileLink, Details, DetailsText, Logo
} from './About.styled';


import {
  MessageHighlight,
} from "../haiku_builder/HaikuBuilder.styled";


import { Page, PageTitle } from "styled/base/Page.styled";
import colorFamilies from 'assets/color-index';

import creators from 'assets/creator-index';

const About = () => {
    return (
      <Page>
        <PageTitle>About</PageTitle>
        <Details>
          <DetailsText>
            Guess Who Haiku is a haiku generation and guessing game between
            friends, which leverages the Markov Chain Text generation algorithm
            and the MERN web development stack to transform structured data into
            natural language by generating phrases based on recombination of
            elements from a history of known sentences. This well-studied simple
            algorithm generates surprisingly semantic sentences when given
            enough data.
          </DetailsText>
        </Details>
        <Logo src={"../../logo512.png"} alt={"logo-image"} />
        <Details>
          <DetailsText>
            For this haiku guessing game, we extended the semantic generation
            algorithm to factor in the standard haiku syllable count (5-7-5) as
            well as article filtering (so that words such as the, and, and if
            don't end phrases). For more information on the technologies, check
            out our{" "}
            <a
              target="_blank"
              href="https://github.com/segersalex/guess-who-haiku"
            >
              <MessageHighlight>project's Github repo.</MessageHighlight>
            </a>
          </DetailsText>
        </Details>

        <PageTitle>Meet the Developers</PageTitle>
        <ProfileContainer>
          <ProfileBox url={colorFamilies.green1.url}>
            <Picture src={creators.tati} alt={"tatiana-smiling"} />
            <Name>Tatiana Faramarzi</Name>
            <LinkBox>
              <ProfileLink href={"https://github.com/tfaramar"}>
                <Github />
              </ProfileLink>
              <ProfileLink
                href={
                  "https://www.linkedin.com/in/tatiana-faramarzi-598897174/"
                }
              >
                <LinkedIn />
              </ProfileLink>
            </LinkBox>
          </ProfileBox>

          <ProfileBox url={colorFamilies.red2.url}>
            <Picture src={creators.sarah} alt={"sarah-smiling"} />
            <Name>Sarah Jiang</Name>
            <LinkBox>
              <ProfileLink href={"https://github.com/srajiang"}>
                <Github />
              </ProfileLink>
              <ProfileLink href={"https://www.linkedin.com/in/sjiang8/"}>
                <LinkedIn />
              </ProfileLink>
            </LinkBox>
          </ProfileBox>

          <ProfileBox url={colorFamilies.purple1.url}>
            <Picture src={creators.alex} alt={"alex-smiling"} />
            <Name>Alex Segers</Name>
            <LinkBox>
              <ProfileLink href={"https://github.com/segersalex"}>
                <Github />
              </ProfileLink>
              <ProfileLink
                href={"https://www.linkedin.com/in/alex-segers-50b917173/"}
              >
                <LinkedIn />
              </ProfileLink>
            </LinkBox>
          </ProfileBox>

          <ProfileBox url={colorFamilies.blue1.url}>
            <Picture src={creators.ed} alt={"ed-smiling"} />
            <Name>Eddie Xiao</Name>
            <LinkBox>
              <ProfileLink href={"https://github.com/ed-xiao"}>
                <Github />
              </ProfileLink>
              <ProfileLink href={"https://www.linkedin.com/in/edward-xiao/"}>
                <LinkedIn />
              </ProfileLink>
            </LinkBox>
          </ProfileBox>
        </ProfileContainer>
      </Page>
    );
}

export default About;