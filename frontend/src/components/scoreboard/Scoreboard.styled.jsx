import styled from "styled-components";
// import styledMap from "styled-map";
import theme, { media } from "styled/theme";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars as menuIcon } from "@fortawesome/free-solid-svg-icons";
// import { Link, NavLink } from "react-router-dom";


export const SBcontainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
    margin: 8rem;
    border: 0.8rem solid ${theme.colors.utilityYellow};
    color: ${theme.colors.primary};
    padding: 2rem;
    font-weight: 600;
    line-height: 1.8;
    font-size: 3rem;
`;

export const TDetail = styled.td`
    padding: 1rem;
`;