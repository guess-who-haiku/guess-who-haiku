import React from 'react';
import {
    Github, LinkedIn, ProfileContainer, ProfileBox, LinkBox,
    Name, Picture, ProfileLink, Header, Details
} from './About.styled';

const About = () => {
    return (
      <>
        <Header>Guess Who Haiku</Header>
        <Details>
          Guess Who Haiku is a haiku generation and guessing game between
          friends, which leverages the Markov Chain Text generation algorithm
          and the MERN web development stack to transform structured data into
          natural language by generating phrases based on recombination of
          elements from a history of known sentences. This well-studied simple
          algorithm generates surprisingly semantic sentences when given enough
          data. For this haiku guessing game, we extended the semantic
          generation algorithm to factor in the standard haiku syllable count
          (5-7-5) as well as article filtering (so that words such as the, and,
          and if don't end phrases). For more information on the technologies,
          check out our{" "}
          <a color="purple" href="https://github.com/segersalex/guess-who-haiku">
            project's Github repo. 
          </a>
        </Details>
        <Header>Meet the Developers</Header>
        <ProfileContainer>
          <ProfileBox>
            <Picture src={""} alt={""} />
            <Name>Tatiana Faramarzi</Name>
            <LinkBox>
              <ProfileLink>
                <Github />
              </ProfileLink>
              <ProfileLink>
                <LinkedIn />
              </ProfileLink>
            </LinkBox>
          </ProfileBox>

          <ProfileBox>
            <Picture src={""} alt={""} />
            <Name>Sarah Jiang</Name>
            <LinkBox>
              <ProfileLink>
                <Github />
              </ProfileLink>
              <ProfileLink>
                <LinkedIn />
              </ProfileLink>
            </LinkBox>
          </ProfileBox>

          <ProfileBox>
            <Picture src={""} alt={""} />
            <Name>Alex Segers</Name>
            <LinkBox>
              <ProfileLink>
                <Github />
              </ProfileLink>
              <ProfileLink>
                <LinkedIn />
              </ProfileLink>
            </LinkBox>
          </ProfileBox>

          <ProfileBox>
            <Picture src={""} alt={""} />
            <Name>Eddie Xiao</Name>
            <LinkBox>
              <ProfileLink>
                <Github />
              </ProfileLink>
              <ProfileLink>
                <LinkedIn />
              </ProfileLink>
            </LinkBox>
          </ProfileBox>
        </ProfileContainer>
      </>
    );
}

export default About;