import styled from 'styled-components';
import styledMap from 'styled-map'
import α from 'color-alpha';
import { FlipCardContent } from 'styled/base/CardGrid.styled';

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
  padding-bottom: 1.3rem;
`;

export const AuthorCoin = styled.span`
  border-radius: 50%;
  border: 2px solid transparent;
  transition: all 0.32s cubic-bezier(.25,.8,.25,1);
  border-color: ${styledMap`
    default: transparent;
    borderColor: ${props => α(props.borderColor, .3)};
  `};
  opacity: .8;
  ${FlipCardContent}:hover & {
    opacity: 1;
    transform: scale(1.03);
    border-color: ${styledMap`
      default: transparent;
      borderColor: ${props => α(props.borderColor, .6)};
    `};
    box-shadow: 4px 9px 5px -2px rgba(0,0,0,0.08);
  }
  ${LineItem}:hover & {
    border-color: ${styledMap`
      default: transparent;
      borderColor: ${props => α(props.borderColor, .8)};
    `};
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

export const LineText = styled.span`
  grid-area: text;
  justify-self: center;
  padding: .8rem 1.2rem .5rem;
  background-color: ${styledMap`
      default: transparent;
      highlightColor: ${props => α(props.highlightColor, .3)};
    `};
  ${FlipCardContent}:hover & {
    transform: scale(1.01);
    background-color: ${styledMap`
      default: transparent;
      highlightColor: ${props => α(props.highlightColor, .5)};
    `};
    box-shadow: 4px 9px 5px -2px rgba(0,0,0,0.08);
  }
  ${LineItem}:hover & {
    transform: scale(1.02);
    background-color: ${styledMap`
      default: transparent;
      highlightColor: ${props => α(props.highlightColor, .65)};
    `};
  }
  word-break: break-all;
  border-radius: 1px;
`;