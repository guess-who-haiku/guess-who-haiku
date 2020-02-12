import React from 'react';
import {
    Github, LinkedIn, ProfileContainer, ProfileBox, LinkBox,
    Name, Picture, ProfileLink, Header, Details
} from './About.styled';

const About = () => {
    return (
        <>
            <Header>
                Guess Who Haiku
            </Header>
            <Details>
                Markov Chain Text generation algorithm, transform structured
                data into natural language by generating sentences
                based on recombination of elements of history of known sentences
                to generate seemingly semantically meaningful sentences.
            </Details>
            <Header>
                Meet the Developers
            </Header>
            <ProfileContainer>
                <ProfileBox>
                    <Picture src={""} alt={""} />
                    <Name>Tatiana Faramarzi</Name>
                    <LinkBox>
                        <ProfileLink><Github /></ProfileLink>
                        <ProfileLink><LinkedIn /></ProfileLink>
                    </LinkBox>
                </ProfileBox>

                <ProfileBox>
                    <Picture src={""} alt={""} />
                    <Name>Sarah Jiang</Name>
                    <LinkBox>
                        <ProfileLink><Github /></ProfileLink>
                        <ProfileLink><LinkedIn /></ProfileLink>
                    </LinkBox>
                </ProfileBox>

                <ProfileBox>
                    <Picture src={""} alt={""} />
                    <Name>Alex Segers</Name>
                    <LinkBox>
                        <ProfileLink><Github /></ProfileLink>
                        <ProfileLink><LinkedIn /></ProfileLink>
                    </LinkBox>
                </ProfileBox>

                <ProfileBox>
                    <Picture src={""} alt={""} />
                    <Name>Eddie Xiao</Name>
                    <LinkBox>
                        <ProfileLink><Github /></ProfileLink>
                        <ProfileLink><LinkedIn /></ProfileLink>
                    </LinkBox>
                </ProfileBox>

            </ProfileContainer>
        </>
    )
}

export default About;