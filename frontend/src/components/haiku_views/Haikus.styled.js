import styled from "styled-components";
import theme from "styled/theme";
import { Link, NavLink } from "react-router-dom";

export const HaikuSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const HaikuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const HaikuBox = styled.div`
  height: 60rem;
  min-height: 60rem;
  width: 60rem;
  min-width: 60rem;
  border: 0.4rem solid ${theme.colors.primaryLight};
  margin: 1.5rem;
  &:hover {
    cursor: pointer;
  }
  /*display: flex;
  flex-direction: column;
  justify-content: space-around;*/
`;

export const UnsharedHaiku = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const SharedHaiku = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;
  background-color: lightgreen;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const HaikuLine = styled.p`
  font-weight: 700;
  line-height: 1.8;
  font-size: 2.5rem;
  color: ${theme.colors.primaryDark};
  min-width: max-content;
`;

export const Title = styled.h2`
  color: ${theme.colors.primary};
  font-size: 3.5rem;
  padding-bottom: 2rem;
`;