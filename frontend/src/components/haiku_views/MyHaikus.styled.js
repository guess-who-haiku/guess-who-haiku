import styled from "styled-components";
import styledMap from 'styled-map';
// import theme from "styled/theme";
// import { Link, NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShareAlt as sharedIcon,} from '@fortawesome/free-solid-svg-icons';
let boxShadows = {
  still: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', hover: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
}

export const Page = styled.section`

`;

export const PageTitle = styled.h1`

`;

export const HaikuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
`;

const HaikuGridItem = styled.div`
  height: 40rem;
  background: linear-gradient(to right, red, purple);
  border-radius: 2px;
  box-shadow: ${boxShadows.still};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  margin: 1.5rem;
  padding: 1rem;
  &:hover {
    box-shadow:${boxShadows.hover};
  }
`;

export const LineIndex = styled.ul`
  height: 100%;
  background-color: #fff;
  font-family: 'Satisfy', cursive;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  position: relative;
`;

export const LineIndexItem = styled.li`
  margin: .8rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LineText = styled.span``;

export const LineAvatar = styled.img`
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  border-width: 2px;
  border-style: solid;
  border-color: ${P => P['data-color'] || '#fff'}
`;


export const UserHaiku = styled(HaikuGridItem)`

`;






export const ChallengeHaiku = styled(HaikuGridItem)`

`;

