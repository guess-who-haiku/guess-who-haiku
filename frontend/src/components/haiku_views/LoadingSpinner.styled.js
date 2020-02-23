import styled from 'styled-components';
import α from 'color-alpha';
import { flexCenter } from 'styled/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons';
import { spin, spinReverse } from 'styled/animations';

export const Spinner = styled.div`
  ${flexCenter};
  border: 8px solid ${α('#fff', .2)};
  border-radius: 50%;
  border-top-color: #61A6C3;
  border-bottom-color: #60C3B7;
  width: 22rem;
  height: 22rem;
  margin: 0 auto;
  animation: ${spin} 1.5s linear infinite;
`;

export const Feather = styled(FontAwesomeIcon).attrs({ icon: faFeather })`
  color: ${α('#fff', .7)};
  font-size: 7rem;
  animation: ${spinReverse} 1.5s linear infinite;
`;