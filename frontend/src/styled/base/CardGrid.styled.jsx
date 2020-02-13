import styled from 'styled-components';
import styledMap from 'styled-map';
import { boxShadows } from 'styled/theme';

// ----------------- CardGrid -----------------
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  grid-auto-rows: 35rem;
  grid-gap: 3.5rem;
`;

// ----------------- Card -----------------
export const Card = styled.div`
  line-height: 1.6;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.url});
  border-radius: 2px;
  box-shadow: ${boxShadows.still};
  padding: 0 1.5rem;
  @media (pointer: none) {
    padding: 0 1.65rem;
  }
  &:hover {
    box-shadow:${boxShadows.hover};
    padding: 0 1.65rem;
  }
  &, & * {
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  } 
`;

export const CardContent = styled.div`
  padding-top: 4.2rem;
  background-color: white;
  height: 100%;
`;

// ----------------- Flip Card -----------------
export const FlipCard = styled.div`
  width: 100%;
  height: 100%;
  perspective: 1000px;
`;


const FlipCardSide = styled(Card)`
  position: absolute;
  backface-visibility: hidden;
`;

export const FlipCardFront = styled(FlipCardSide)``;

export const FlipCardBack = styled(FlipCardSide)`
  transform: rotateY(180deg);
`;

export const FlipCardContent = styled(CardContent)``;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  transform: ${styledMap`
    default: rotateY(0);
    flipped: rotateY(180deg);
  `};

  & > ${FlipCardFront} {
    opacity:  ${styledMap`
      default: 1;
      flipped: 0;
    `};
  }
`;