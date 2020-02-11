import styled from "styled-components";
import theme from "styled/theme";
import styledMap from 'styled-map';
import α from 'color-alpha';
import { colorsToLinearGradient as toLG } from 'styled/helpers';


export const HSContainer = styled.div`
  font-family: ${theme.font.family};
  background-color: white;
  font-weight: 200;
  line-height: 1.5;  
  margin: 4rem 5rem;
  min-height: 70%;
  padding: 1.5rem;
  box-sizing: border-box;
`;

export const Message = styled.h3`
  color: ${theme.colors.utilityYellow};
  font-size: 2.5rem;
  padding-top: 1rem;
`;

export const MsgHighlight = styled.div`
  color: ${theme.colors.utilityPink};
  font-size: 3.5rem;
  padding-top: .5rem;
  font-weight: ${theme.font.weights.bold};
`;

export const MsgSub = styled.div`
  padding: 3rem;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 2px solid black;
  outline: none;
  background-color: white;
  padding: 1rem;
  margin-top: 3rem;
  border-radius: .3rem;

  transition: all .3s ease;

  &:hover {
    background-color: black;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px;
  }
`;

export const Countdown = styled.div`
  font-size: 5rem;
`;

export const HaikuContainer = styled.div`

  background: ${styledMap`
          default: lightgray;
          gradientColors: ${props => toLG(props.gradientColors)}};
      `};
  font-family: 'Satisfy';
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Haiku = styled.div`
  background-color: white;
  padding: 5rem;
  width: 95%;
  height: 95%;
  font-size: 2.5rem;
`

export const AuthorIcon = styled.img`
  height: 8rem;
  width: 8rem;

  border-radius: 50%;
  margin: .5rem;

  &:hover {
    border: 5px solid ${theme.colors.utilityYellow};
  };
  border: ${styledMap`
          data-selected: 5px solid ${theme.colors.utilityYellow};
          default: 5px solid lightgrey;
      `};
`;

export const AuthorIconSm = styled.img`
  height: 6.5rem;
  width: 6.5rem;
  margin: 1rem;
  border-radius: 50%;
  border: ${styledMap`
          color: 2px solid ${props => props.color};
          default: 2px solid lightgrey;
      `};
`;

export const HaikuLineIndex = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Satisfy';

`;

export const HaikuLine = styled.div`
display: flex;
flex-flow: column;
align-items: center;

`;

export const HaikuLineText = styled.p`
  background-color: ${styledMap`
    color: ${props => α(props.color, .3)};
    default: transparent;
  `};
  width: 28rem;
  font-size: 2.5rem;
`;

export const LIContainer = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1em;
  grid-template-rows: auto;
  justify-content: center;
  overflow-y: auto;
  
`;

export const LIElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;



export const SuccessMsg = styled.p`
    font-size: 5rem;
    padding: 2rem;
    font-weight: bold;
    background: white;

`;  

