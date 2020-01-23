import styled from 'styled-components';
import styledMap from 'styled-map';
import theme, { media } from 'styled/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars as menuIcon } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom'

export const Nav = styled.nav`
  background-color: ${theme.colors.primary};
  padding: .9rem 1.2rem;
  display: grid;
  /* grid-gap: 20px; */
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;

  & > * {
    color: ${theme.colors.utilityYellow};
  }
`;

export const Logo = styled(Link).attrs({ to: '/' })`
  font-weight: ${theme.font.weights.extraBold};
  font-size: 3.5rem;
`;

export const MenuIcon = styled(FontAwesomeIcon).attrs({ icon: menuIcon })`
  font-size: 3rem;
`;

// ---------------- Menu
export const Menu = styled.ul`
  background-color: ${theme.colors.primary};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;
  overflow: hidden;
  transition-duration: .3s;
  transition-timing-function: ease-in;

  ${media.desktopS`
    flex-direction: row;
  `}

  max-height: ${styledMap`
    default: 0;
    isExpanded: 30vh;
  `};

  
`;

export const MenuLink = styled(NavLink).attrs({})`
  padding: .9rem 1.2rem;
`;

export const MenuItem = styled.li`
  list-style: none;
`;


