import styled from 'styled-components';
import styledMap from 'styled-map';
import { boxShadows } from 'styled/theme';
import { colorsToLinearGradient as toLG } from 'styled/helpers';
// ----------------- CardGrid -----------------
export const CardGrid = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  grid-auto-rows: 40rem;
  grid-gap: 2rem;
`;

// ----------------- Card -----------------

// ----------------- Flip Card -----------------
export const FlipCard = styled.div`
  line-height: 1.6;
  background-color: transparent;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  perspective: 1000px;
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${styledMap`
    default: rotateY(0);
    flipped: rotateY(180deg);
  `};
`;

// const FlipCardSide = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   backface-visibility: hidden;
//   box-shadow: ${boxShadows.still};
//   &:hover {
//     box-shadow:${boxShadows.hover};
//   }
//   padding: 0 1rem;
//   background: ${props => toLG(props.gradientColors)};
// `;

const FlipCardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  box-shadow: ${boxShadows.still};
  &:hover {
    box-shadow:${boxShadows.hover};
  }
  padding: 0 1.5rem;
  background-image: url(${props => props.url});
`;


export const FlipCardFront = styled(FlipCardSide)`
  color: black; 
`;

export const FlipCardBack = styled(FlipCardSide)`
  color: white;
  transform: rotateY(180deg);
`;

export const FlipCardContent = styled.div`
  padding: 1.5rem 0;
  background-color: white;
  height: 100%;
`;