import styled from "styled-components";
import styledMap from "styled-map";
import { media, colors } from "styled/theme";
import star from 'assets/star.png';
import userAvatars from 'assets/userAvatars';
export const SBcontainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SBIndex = styled.div`
  display: block;
  justify-content: space-around;

  ${media.mobileL`
    display: flex;
  `}

   ${media.tablet`
    display: flex;
  `}

`;

export const SBIndexLink = styled.a.attrs({
  href: "#HaikusMade"
})`
  display: block; 
  font-size: 1.8rem;

  ${media.mobileL`
    display: none;
  `}

   ${media.tablet`
    display: none;
  `}

   &:hover {
    color: purple;
  }

`;


export const Table = styled.table`
    cursor: default;
    margin: 1rem;
    color: black;
    padding: 0.8rem;
    font-weight: 600;
    line-height: 1.8;
    padding: 0.5rem;
    font-size: 2.2rem;
    ${media.desktopS`
      font-size: 2.5rem;
    `}
`;

export const TDetail = styled.td`
   padding: 0.5rem;
  ${media.desktopS`
    padding: 1rem;
  `}
  position: relative;
`;

export const TDetailImage = styled.img.attrs(props => ({ src: userAvatars[props.avatar] }))`
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