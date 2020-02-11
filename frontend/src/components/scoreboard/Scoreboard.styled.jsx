import styled from "styled-components";
import styledMap from "styled-map";
import { colors } from "styled/theme";

export const SBcontainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
    margin: 1rem;
    color: black;
    padding: 1rem;
    font-weight: 600;
    line-height: 1.8;
    font-size: 3rem;
`;

export const TDetail = styled.td`
    padding: 1rem;
`;

export const TDetailImage = styled.img`
  height: 8rem;
  width: 8rem;
`;

export const TRow = styled.tr`
 color: ${styledMap`
    default: black;
    data-current-user:  ${colors.utilityRed};
 `};
`;

