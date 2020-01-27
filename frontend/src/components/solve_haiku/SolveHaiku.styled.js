import styled from "styled-components";
import theme from "styled/theme";

export const HSContainer = styled.div`
  font-family: ${theme.font.family};
  background-color: ${theme.colors.primary};
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
`;

export const MsgHighlight = styled.div`
  color: ${theme.colors.utilityPink};
  font-size: 3.5rem;
  font-weight: ${theme.font.weights.bold};
`;

export const MsgSub = styled.div`
  padding: 3rem;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: ${theme.colors.utilityYellow};
  padding: 1rem;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px;
  }
`;

export const Countdown = styled.div`
  font-size: 5rem;
`;

export const HaikuContainer = styled.div`
  background-color: ${theme.colors.primaryLight};
  padding: 5rem;
`;

export const AuthorIcon = styled.img`
  height: 6rem;
  width: 6.5rem;
  border-radius: 50%;
`;

export const AuthorItem = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
`;