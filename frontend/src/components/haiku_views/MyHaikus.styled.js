import styled, { css } from "styled-components";
import styledMap from 'styled-map';
// import { colors } from 'styled/theme';
import α from 'color-alpha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt as iShared, faTrash as iTrash } from '@fortawesome/free-solid-svg-icons';
let boxShadows = {
  still: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', hover: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
}
let colorsToGradient = colors => `linear-gradient(to bottom, ${colors.join(', ')})`;
export const Page = styled.section`

`;

const flexHelper = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.h1`
  padding: 2rem 0;
  font-size: 6rem;
  font-weight: 700;
`;

export const HaikuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
`;

const HaikuGridItem = styled.div`
  height: 40rem;
  background: ${P => colorsToGradient(P.authorColors)};
  border-radius: 2px;
  box-shadow: ${boxShadows.still};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  margin: 1.5rem;
  padding: 0 1rem;
  &:hover {
    padding: 0 1.3rem;
    box-shadow:${boxShadows.hover};
  }
`;

export const UserHaiku = styled(HaikuGridItem)`
  
`;
export const ChallengeHaiku = styled(HaikuGridItem)``;

export const LineIndex = styled.ul`
  padding-top: 5.5rem;
  height: 100%;
  background-color: #fff;
  font-family: 'Satisfy', cursive;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  position: relative;
`;


export const LineIndexItem = styled.li`
  margin: .8rem;
  display: grid;
  grid-template-areas: "avatarLeft text avatarRight";
  grid-template-columns: minmax(min-content, 1fr) minmax(min-content, max-content) minmax(min-content, 1fr);
  grid-template-rows: auto;
  justify-content: center;
  grid-column-gap: 1rem;
  padding-bottom: 1.3rem;
`;

export const Text = styled.span`
  grid-area: text;
  justify-self: center;
  padding: .8rem 1.2rem .5rem;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  background-color: ${P => α(P.color, .3) || 'transparent'};
  ${UserHaiku}:hover & {
    transform: scale(1.01);
    background-color: ${P => α(P.color, .5) || 'transparent'};
    box-shadow: 4px 9px 5px -2px rgba(0,0,0,0.08);
  }
  ${LineIndexItem}:hover & {
    transform: scale(1.02);
    background-color: ${P => α(P.color, .65) || 'transparent'};
  }
  word-break: break-all;
  border-radius: 1px;
`;

export const AuthorBox = styled.div`
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  transition: all 0.32s cubic-bezier(.25,.8,.25,1);
  border-color: ${P => α(P.color, .3) || 'transparent'};
  opacity: .8;
  ${UserHaiku}:hover & {
    opacity: 1;
    transform: scale(1.03);
    border-color: ${P => α(P.color, .6) || 'transparent'};
    box-shadow: 4px 9px 5px -2px rgba(0,0,0,0.08);
  }
  ${LineIndexItem}:hover & {
    border-color: ${P => α(P.color, .8) || 'transparent'};
    transform: scale(1.065);
  }
  height: 4.5rem;
  width: 4.5rem;
  overflow: hidden;
  grid-area: ${styledMap`
    default: avatarLeft;
    alignRight: avatarRight;
  `};
  justify-self: ${styledMap`
    default: end;
    alignRight: start;
  `};
`;


export const AuthorImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Footer = styled.div`
  transition: all 0.3s cubic-bezier(.25,.8,.25,1) .05s;
  ${flexHelper}
  justify-content: start;
  font-family: 'Martel Sans',sans-serif;
  font-size: 1.2rem;
  opacity: 0;
  ${UserHaiku}:hover & {
    opacity: 1;
  }
  position: relative;
  margin: 2rem 1rem 0;
  color: #495057;
`;

export const Share = styled.div`
 transition: all 0.2s ease 0s;
  &:hover {
    color: ${α('#000', .85)};
  }
`;

export const ShareUsers = styled.span`
  font-weight: 600;
  text-overflow: ellipsis;
`;
export const ShareIcon = styled(FontAwesomeIcon).attrs({ icon: iShared })`
  font-size: 1.8rem;
  margin: 0 1rem;
`;

export const Config = styled.div`
  ${flexHelper}
  margin-left: auto;
  transition: all 0.3s ease 0s;
`;

export const Btn = styled.button`
  cursor: pointer;
  transition: all 0.25s ease 0s;
  border-radius: 3px;
  /* background-color: ${α('#F2F1F0', .8)}; */
  border: 1.5px solid #495057;
  font-weight: 600;
  line-height: 1.5;
  padding: .6rem .7rem .2rem;
  margin: 0 1rem;
  /* box-shadow: ${boxShadows.still}; */
  
  &:active {
    transform: translateY(1px);
  }
  &:hover {
    border-color: ${α('#000', .6)};
    background-color: ${α('#000', .85)};
    color: white;
  }
`
export const S = styled.strong``;

export const DeleteIcon = styled(FontAwesomeIcon).attrs({ icon: iTrash })`
  margin: 0 1rem;
  cursor: pointer;
  font-size: 2rem;
  transition: all 0.2s ease 0s;
  &:hover {
    color: ${α('#c81912', .85)};
  }
`;




