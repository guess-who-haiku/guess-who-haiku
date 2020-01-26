import styled from "styled-components";
import theme from "styled/theme";

export const HaikuContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const HaikuBox = styled.div`
  font-weight: 700;
  line-height: 1.8;
  font-size: 1.5rem;
  color: ${theme.colors.utilityPink};
`;

// export const Title = styled.h1`
//   color: ${theme.colors.utilityPink};
//   font-size: 3.5rem;
//   padding-bottom: 2rem;
// `;
