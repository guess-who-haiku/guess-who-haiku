import styled from 'styled-components';
import { flexCenter } from 'styled/helpers';
import { FlipCardContent } from 'styled/base/CardGrid.styled';
import α from 'color-alpha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt as iShared, faTrash as iTrash } from '@fortawesome/free-solid-svg-icons';

// ----------------- Details  -----------------
export const Details = styled.div`
  ${flexCenter};
  line-height: 1.6;
  justify-content: start;
  font-size: 1.2rem;
  opacity: 0;
  ${FlipCardContent}:hover & {
    opacity: 1;
  }
  position: relative;
  margin: 2rem 1rem 0;
  color: #495057;
`;

// ----------------- Share -----------------
export const Share = styled.div`
  ${flexCenter};
  &:hover {
    color: ${α('#000', .85)};
  }
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
  ${flexCenter}
  margin-left: auto;
`;

export const ScoreboardToggle = styled.button`
  cursor: pointer;
  border-radius: 3px;
  border: 1.5px solid #495057;
  font-weight: 600;
  padding: .6rem .7rem .2rem;
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
  font-size: 2rem;
  transition: all 0.2s ease 0s;
  &:hover {
    color: ${α('#c81912', .85)};
  }
`;
