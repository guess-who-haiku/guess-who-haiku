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

// export const HaikuBox = styled.div`
//   margin: 2rem;
//   max-width: 40rem;
// `;

export const HaikuBox = styled(Link)`
         padding: 2rem;
         max-width: 40rem;
         border: 0.8rem solid ${theme.colors.utilityYellow};
         margin: 1.5rem;
`;

export const HaikuLine = styled.p`
  font-weight: 700;
  line-height: 1.8;
  font-size: 1.5rem;
  color: ${theme.colors.utilityPink};
  min-width: max-content;
`;

export const Title = styled.h2`
  color: ${theme.colors.primary};
  font-size: 3.5rem;
  padding-bottom: 2rem;
`;