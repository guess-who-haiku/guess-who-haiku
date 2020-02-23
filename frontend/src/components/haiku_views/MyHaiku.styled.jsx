import styled from 'styled-components';
import styledMap from 'styled-map';
import { flexCenter } from 'styled/helpers';
import { FlipCardContent } from 'styled/base/CardGrid.styled';
import α from 'color-alpha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt as iShared, faTrash as iTrash } from '@fortawesome/free-solid-svg-icons';
import { Table, TDetail, TDetailImage, TRow, Badge } from 'components/scoreboard/Scoreboard.styled';

// ----------------- Details  -----------------
export const Details = styled.div`
  ${flexCenter};
  flex-direction: column;
  line-height: 1.6;
  font-size: 1.2rem;
  opacity: 0;
  ${FlipCardContent}:hover & {
    opacity: 1;
  }
  @media (pointer: none) {
    opacity: 1;
  }
  position: relative;
  margin: 0 1rem;
  color: #495057;
`;

// ----------------- Share -----------------
export const Share = styled.div`
  font-size: 1.3rem;
  /* align-self: flex-start; */
  cursor: pointer;
  ${flexCenter};
  will-change: color;
  &:hover * {
    color: black;
  }
  padding-top: 2rem 0 1rem;
`;

export const SharedUsers = styled.div`
  font-weight: 600;
`;

export const ShareIcon = styled(FontAwesomeIcon).attrs({ icon: iShared })`
  font-size: 1.8rem;
  margin: 0 1rem;
`;

// ----------------- Modify -----------------
export const Modify = styled.div`
  margin-top: 2rem;
  align-self: flex-end;
  ${flexCenter};
`;

export const Toggle = styled.button`
  cursor: pointer;
  background-color: white;
  border-radius: 3px;
  border: 1.5px solid #495057;
  font-size: ${styledMap`
    default: 1rem;
    large: 1.6rem;
  `};
  font-weight: 600;
  padding: ${styledMap`
    default: .4rem .6rem .3rem;
    large: .6rem .9rem .3rem;
  `};
  margin: 0 1rem;
  &:active {
    transform: translateY(1px);
  }
  &:hover {
    border-color: ${α('#000', .6)};
    background-color: ${α('#000', .85)};
    color: white;
  }
`;

export const DeleteIcon = styled(FontAwesomeIcon).attrs({ icon: iTrash })`
  margin: 0 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    color: ${α('#c81912', .85)};
  }
`;

// ----------------- MiniScoreboard -----------------
export const MiniTable = styled(Table)`
  font-size: 1.5rem;
  margin: .5rem auto;
  padding: .5rem;
  padding-left: 0;
`;

export const TD = styled(TDetail)`
  padding: .5rem; 
`;

export const TH = styled(TD).attrs({ as: 'th' })`
  font-weight: 700;
`

export const TDImg = styled(TDetailImage)`
  height: 4rem;
  width: 4rem;
`;

export const TR = styled(TRow)``;

export const MiniBadge = styled(Badge)`
  height: 2rem;
  width: 2rem;
  bottom: .8rem;
`;