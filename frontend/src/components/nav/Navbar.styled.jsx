import styled from 'styled-components';
import styledMap from 'styled-map';
import { media, font } from 'styled/theme';
import { flexCenter } from 'styled/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars as menuIcon } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom'
import userAvatars from 'assets/userAvatars';

export const Header = styled.header`
  background-color: #fff;
  padding: .9rem 1.2rem;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
`;

export const Logo = styled(Link).attrs({ to: '/' })`
  background-image: url('logo512.png');
  background-size: 100%;
  justify-self: center;
  ${media.desktopS`
    justify-self: start;
    margin-left: 2rem;
  `}
  height: 3.5rem;
  width: 3.5rem;
  ${media.tablet`
    height: 5rem;
    width: 5rem;
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

// ---------------- NavLinks
export const NavLinks = styled.div`
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
  box-shadow: 0 1px 4px rgba(0,0,0,.22);

  max-height: ${styledMap`
    default: 0;
    isExpanded: 100vh;
  `};

  ${media.desktopS`
    flex-direction: row;
    max-height: 5rem;
    justify-content: start;
    justify-self: end;
  `};
`;

export const DLink = styled.a`
  ${flexCenter};
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

export const DNavLink = styled(DLink).attrs({ as: NavLink, activeClassName: 'selected' })`
  &.selected {
    font-weight: ${font.weights.bold};
  }
`;

export const UserAvatar = styled.img.attrs(props => ({ src: userAvatars[props.avatarUrl] }))`
  border: 1px solid transparent;
  border-radius: 50%;
  margin-right: .5rem;
  height: 1.8rem;
  width: 1.8rem;
  ${media.tablet`
    margin-right: 1rem;
    height: 2rem;
    width: 2rem;
  `}

  ${DLink}:hover &  {
    border-color: inherit;
  }
`;


