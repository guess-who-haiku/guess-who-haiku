import styled from 'styled-components';
// import styledMap from 'styled-map';
import { flexCenter } from 'styled/helpers';

import { Link } from 'react-router-dom'
import { Card } from 'styled/base/CardGrid.styled';
// import α from 'color-alpha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather as iFeather } from '@fortawesome/free-solid-svg-icons';

export const CreateHaikuCard = styled(Card).attrs({ as: Link, to: '/' })`
  ${flexCenter};
  border: 10px dashed white;
  &, &:hover {box-shadow: none;}
`;

export const Feather = styled(FontAwesomeIcon).attrs({ icon: iFeather })`
  color: white;
  font-size: 19rem;
  ${CreateHaikuCard}:hover & {
    transform: scale(1.05);
  }
`;