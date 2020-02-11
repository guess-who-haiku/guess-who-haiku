import styled from "styled-components";
import styledMap from "styled-map";
import { colors } from "styled/theme";
import star from 'assets/star.png';

export const SBcontainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SBIndex = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Table = styled.table`
    margin: 1rem;
    color: black;
    padding: 1rem;
    font-weight: 600;
    line-height: 1.8;
    font-size: 2.5rem;
`;

export const TDetail = styled.td`
  padding: 1rem;
  position: relative;
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

export const Badge = styled.img.attrs({
  src: `${star}`
})`
  height: 4rem;
  width: 4rem;
  position: absolute;
  right: 0;
  bottom: 1.75rem;
`;