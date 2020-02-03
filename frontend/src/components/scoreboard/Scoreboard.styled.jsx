import styled from "styled-components";
import styledMap from "styled-map";
import { colors } from "styled/theme";

export const SBcontainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
    margin: 8rem;
    border: 0.8rem solid ${colors.utilityYellow};
    color: ${colors.primary};
    padding: 2rem;
    font-weight: 600;
    line-height: 1.8;
    font-size: 3rem;
`;

export const TDetail = styled.td`
    padding: 1rem;
`;

export const TRow = styled.tr`
 color: ${styledMap`
    default: ${colors.primary};
    data-current-user:  ${colors.utilityRed};
 `};
`;