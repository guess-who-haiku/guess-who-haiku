import styled from 'styled-components';
import styledMap from 'styled-map';
import { media, colors, font } from 'styled/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars as menuIcon, faUserCircle as avatarIcon } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom'

export const Nav = styled.nav`
  background-color: #fff;
  padding: .9rem 1.2rem;
  position: relative;
  display: grid;
  /* grid-gap: 20px; */
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;

  & > * {
    /* color: ${colors.utilityYellow}; */
  }
`;

export const LogoBox = styled(Link).attrs({ to: '/' })`
  ${media.desktopS`
    justify-self: start;
    padding-left: 1rem;
  `}
`;

export const Logo = styled.img.attrs({ alt: 'Guess Who, Haiku - Logo', src: '/logo512.png' })`
  width: 3.5rem;
  ${media.tablet`
    width: 5rem;
  `}
`;
export const AvatarIcon = styled(FontAwesomeIcon).attrs({ icon: avatarIcon })`
  height: 2rem;
  font-size: 3rem;
  ${media.tablet`
    margin-left: 2.5rem;
    font-size: 3.5rem;
  `}
`;

export const MenuIcon = styled(FontAwesomeIcon).attrs({ icon: menuIcon })`
  cursor: pointer;
  font-size: 3rem;
  ${media.tablet`
    margin-left: 2rem;
    font-size: 3.5rem;
  `}
  ${media.desktopS`
    display: none;
  `}
`;

// ---------------- Menu
export const Menu = styled.ul`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;
  overflow: hidden;
  transition-duration: .3s;
  transition-timing-function: ease-in;
  padding: 0 2rem;
  /* color: white; */
  box-shadow: 0 1px 4px rgba(0,0,0,.22);
  

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
  cursor: pointer;
  line-height: 2;
  font-size: 1.4rem;
  padding: .9rem 1.2rem;
  transition: color 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    color: #61A6C3; 
  }

  ${media.desktopS`
    margin-left: ${styledMap`
      default: 0;
      alignLeft: auto;
    `};

    font-weight: ${styledMap`
      default: 500;
      bold: 800;
    `};
  `}

  
`;

export const MenuNavLink = styled(MenuLink).attrs({ as: NavLink, activeClassName: 'selected' })`
  
  &.selected {
    font-weight: ${font.weights.bold};
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;


