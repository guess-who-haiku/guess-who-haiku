import styled from "styled-components";
import theme from "styled/theme";
import styledMap from 'styled-map';

export const HSContainer = styled.div`
  font-family: ${theme.font.family};
  background-color: white;
  font-weight: 200;
  line-height: 1.5;  
  margin: 4rem 5rem;
  min-height: 70%;
  border-radius: .5rem;
  padding: 5rem;
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
  border: none;
  outline: none;
  background-color: ${theme.colors.utilityYellow};
  padding: 1rem;
  border-radius: .3rem;

  transition: all .3s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px;
  }
`;

export const Countdown = styled.div`
  font-size: 5rem;
`;

export const HaikuContainer = styled.div`
  background-color: ${styledMap`
          default: ${theme.colors.utilityYellow};
          data-success: ${theme.colors.utilityGreen};
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
  font-size: 3rem;
`

export const AuthorIcon = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  &:hover {
    border: 5px solid ${theme.colors.utilityYellow};
  };
  border: ${styledMap`
          data-selected: 5px solid ${theme.colors.utilityYellow};
          default: 5px solid lightgrey;
      `};
`;

export const AuthorItem = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
`;

export const LIContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  flex-flow: row wrap;
  padding: 2rem 3rem;
  overflow-y: auto;
`;

export const AuthorLineReveal = styled.div`

  display: flex;
  align-items: center;
  font-family: 'Satisfy';
`;

export const SuccessMsg = styled.p`
    font-size: 5rem;
    font-weight: bold;
    color: ${theme.colors.utilityGreen};
`;  
