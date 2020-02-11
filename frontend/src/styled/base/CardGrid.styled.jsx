import styled from 'styled-components';
import styledMap from 'styled-map';
import { boxShadows } from 'styled/theme';
import { colorsToLinearGradient as toLG } from 'styled/helpers';
// ----------------- CardGrid -----------------
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  grid-auto-rows: 35rem;
  grid-gap: 3rem;
`;

// ----------------- Card -----------------
export const Card = styled.div`
  line-height: 1.6;
  background-color: transparent;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  box-shadow: ${boxShadows.still};
  &:hover {
    box-shadow:${boxShadows.hover};
  }
  padding: 0 1rem;
  &:hover {
    padding: 0 1.2rem;
  }
  background: ${props => toLG(props.gradientColors)};
  transition: opacity 0.8s;
  &, & * {
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  } 
`;

export const CardContent = styled.div`
  padding-top: 2rem;
  background-color: white;
  height: 100%;
`;

// ----------------- Flip Card -----------------
export const FlipCard = styled.div`
  line-height: 1.6;
  background-color: transparent;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  &, & * {
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  } 
`;

const FlipCardSide = styled.div`
  border-radius: 2px;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  box-shadow: ${boxShadows.still};
  &:hover {
    box-shadow:${boxShadows.hover};
  }
  padding: 0 1rem;
  background: ${props => toLG(props.gradientColors)};
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    padding: 0 1.2rem;
  }
`;



export const FlipCardFront = styled(FlipCardSide)`
`;

export const FlipCardBack = styled(FlipCardSide)`
  transform: rotateY(180deg);
`;

export const FlipCardContent = styled.div`
  padding: 1.5rem 0;
  background-color: white;
  height: 100%;
`;

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
/* 
  & > ${FlipCardBack} {
    opacity:  ${styledMap`
      default: 0;
      flipped: 1;
    `};
  } */
`;