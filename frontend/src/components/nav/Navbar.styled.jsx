import styled from 'styled-components';
import styledMap from 'styled-map';
import { media, colors, font } from 'styled/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars as menuIcon } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom'

export const Nav = styled.nav`
  background-color: ${colors.primary};
  padding: .9rem 1.2rem;
  display: grid;
  /* grid-gap: 20px; */
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;

  & > * {
    color: ${colors.utilityYellow};
  }
`;

export const LogoBox = styled(Link).attrs({ to: '/' })`
  ${media.desktopS`
    justify-self: start;
    padding-left: 1rem;
  `}
`;

export const Logo = styled.img.attrs({ alt: 'Guess Who, Haiku - Logo', src: '/logo512.png' })`
  width: 5rem;
  ${media.tablet`
    width: 10rem;
  `}
`;

export const MenuIcon = styled(FontAwesomeIcon).attrs({ icon: menuIcon })`
  font-size: 3rem;
  ${media.tablet`
    margin-left: 2rem;
    font-size: 4.5rem;
  `}
  ${media.desktopS`
    display: none;
  `}
`;

// ---------------- Menu
export const Menu = styled.ul`
  background-color: ${colors.primary};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;
  overflow: hidden;
  transition-duration: .3s;
  transition-timing-function: ease-in;
  color: white;
  

  max-height: ${styledMap`
    default: 0;
    isExpanded: 30vh;
  `};

  ${media.desktopS`
    flex-direction: row;
    max-height: 5rem;
    justify-content: start;
    justify-self: end;
  `}

  
`;

export const MenuLink = styled.a`
  font-size: 2.5rem;
  padding: .9rem 1.2rem;
  &::hover {
    ${font.weights.extraBold};
  }
`;

export const MenuNavLink = styled(MenuLink).attrs({ as: NavLink, activeClassName: 'selected' })`
  
  &.selected {
    color: ${colors.utilityYellow};
    font-weight: ${font.weights.bold};
  }
`;

export const MenuItem = styled.li`
  list-style: none;
`;


