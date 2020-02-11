import styled from 'styled-components';
import styledMap from 'styled-map'
import α from 'color-alpha';
import { Card, FlipCardContent } from 'styled/base/CardGrid.styled';
import authors from 'assets/index';

const Anonymous = authors.unknown;

const unsolvedColor = '#D8D8D8';
// ----------------- Lines -----------------
export const LineList = styled.ol`
  background-color: #fff;
  font-family: 'Satisfy', cursive;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const LineItem = styled.li`
   margin: .8rem;
  display: grid;
  grid-template-areas: "avatarLeft text avatarRight";
  grid-template-columns: minmax(min-content, 1fr) minmax(min-content, max-content) minmax(min-content, 1fr);
  grid-template-rows: auto;
  justify-content: center;
  grid-column-gap: 1rem;
  padding-bottom: 1rem;
`;

export const AuthorCoin = styled.span`
  border-radius: 50%;
  border: 2px solid	#F0F0F0;
  transition: all 0.32s cubic-bezier(.25,.8,.25,1);
  opacity: .8;
  ${Card}:hover &, ${FlipCardContent}:hover & {
    opacity: 1;
    transform: scale(1.03);
    border-color: ${props => α(props.borderColor || unsolvedColor, .3)};
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

export const AuthorImg = styled.img.attrs(P => ({
  src: P.src ? P.src : Anonymous.url,
  alt: P.alt ? P.alt : 'Anonymous Author'
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const LineText = styled.span`
  grid-area: text;
  justify-self: center;
  padding: .8rem 1.2rem .5rem;
  ${Card}:hover &, ${FlipCardContent}:hover & {
    transform: scale(1.01);
    background-color: ${props => α(props.highlightColor || '#fff', .3)};
  }
  word-break: break-all;
  border-radius: 1px;
`;