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
  min-height: 60rem;
  width: 60rem;
  overflow-y: auto;
`;

export const multiSelectStyles = {
  chips: { background: "#DFBD64", "font-size": "2rem" },
  searchBox: { border: "none", "border-bottom": "2px solid #61A6C3", "border-radius": "0px" },
  option: {
    color: "black",
    '&:hover': {
      background: '#DFBD64',
      color: "white"
    }
  }
}