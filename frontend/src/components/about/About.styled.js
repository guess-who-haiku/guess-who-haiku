import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare as github, faLinkedin as linkedIn } from '@fortawesome/free-brands-svg-icons';

export const Header = styled.h1`
  margin: 2rem;
`
export const Details = styled.p`
  margin: 2rem 5rem;
  width: 50vw;
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2rem;
`

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem;
  background-color: lightgrey;
  width: 50rem;
  height: 50rem;
`

export const Picture = styled.img`
  height: 10rem;
  width: 10rem;
  object-fit: cover;
  object-position: center;
  margin: 2rem;
`;

export const Name = styled.p`
  margin: 2rem;
`

export const LinkBox = styled.div`
`

export const ProfileLink = styled.a`
  cursor: pointer;
  margin: 2rem;
  &:hover {
    color: purple;
  }
`

export const Github = styled(FontAwesomeIcon).attrs({ icon: github })`
  height: 10rem;
  font-size: 10rem;
`;
export const LinkedIn = styled(FontAwesomeIcon).attrs({ icon: linkedIn })`
  height: 10rem;
  font-size: 10rem;
`;