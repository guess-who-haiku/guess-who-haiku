import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare as github, faLinkedin as linkedIn } from '@fortawesome/free-brands-svg-icons';

export const Header = styled.h1`
  margin: 2rem;
`
export const Details = styled.div`

  display:flex;
  justify-content:center;
`

export const DetailsText = styled.div`
  margin: 2rem 5rem;
  width: 60vw;
  font-size: 2rem;
  line-height: 2.5rem;
`;

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
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: auto;
  width: 30rem;
  height: 50rem;
`

export const Picture = styled.img`
  height: 30rem;
  width: 30rem;
  object-fit: cover;
  object-position: center;
`;

export const Logo = styled.img`
  height: 6rem;
  width: 6rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  object-fit: cover;
  object-position: center;
`;


export const Name = styled.p`
  margin: 2rem;
`

export const LinkBox = styled.div`
`

export const ProfileLink = styled.a.attrs({
  target:"_blank"
})`
  cursor: pointer;
  margin: 2rem;
  &:hover {
    color: purple;
  }
`

export const Github = styled(FontAwesomeIcon).attrs({ icon: github })`
  height: 5rem;
  font-size: 5rem;
`;
export const LinkedIn = styled(FontAwesomeIcon).attrs({ icon: linkedIn })`
  height: 5rem;
  font-size: 5rem;
`;