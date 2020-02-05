import styled from "styled-components";
import theme from "styled/theme";

export const HContainer = styled.div`
  font-family: ${theme.font.family};
  background-color: white;
  font-weight: 200;
  line-height: 1.5;  
  margin: 1rem 1rem;
  border-radius: .5rem;
  box-sizing: border-box;

  overflow-y: auto;
`;