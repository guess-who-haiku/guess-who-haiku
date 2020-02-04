import styled from "styled-components";
import theme from "styled/theme";

export const HContainer = styled.div`
  font-family: ${theme.font.family};
  background-color: ${theme.colors.primary};
  font-weight: 200;
  line-height: 1.5;  
  margin: 3rem 3rem;
  min-height: 70%;
  border-radius: .5rem;
  padding: 5rem;
  box-sizing: border-box;
`;