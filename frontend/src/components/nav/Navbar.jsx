import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Nav, MenuIcon, AvatarIcon, LogoBox, Logo, Menu, MenuLink, MenuNavLink, MenuItem } from './Navbar.styled';
const NavBar = ({ history, currentUser, logout, openModal, resetBuilder }) => {

  const [isToggled, setIsToggled] = useState(false);
  const toggle = () => setIsToggled(prevState => !prevState);


  const renderLinks = () => {
    if (currentUser) {
      return (
        <>
          <MenuNavLink to="/haikus">
            <MenuItem>My Haikus</MenuItem>
          </MenuNavLink>
          <MenuNavLink to="/challenges">
            <MenuItem>My Challenges</MenuItem>
          </MenuNavLink>
          <MenuLink alignLeft bold>
            <MenuItem><AvatarIcon />{currentUser.username}</MenuItem>
          </MenuLink>
          <MenuLink onClick={logout}>
            <MenuItem>Logout</MenuItem>
          </MenuLink>
        </>
      );
    } else {
      return (
        <>
          <MenuLink onClick={() => openModal('signup')} alignLeft>
            <MenuItem>Signup</MenuItem>
          </MenuLink>
          <MenuLink onClick={() => openModal('login')}>
            <MenuItem>Login</MenuItem>
          </MenuLink>
        </>
      );
    }
  }

  return (
    <>
      <Nav>
        <MenuIcon onClick={toggle} />
        <LogoBox onClick={() => resetBuilder()}><Logo /></LogoBox>
      </Nav>
      <Menu isExpanded={isToggled}>
        <MenuNavLink to="/scoreboard">
          <MenuItem>Scoreboard</MenuItem>
        </MenuNavLink>
        <MenuNavLink to="/about">
          <MenuItem>About</MenuItem>
        </MenuNavLink>
        {renderLinks()} 
      </Menu>
    </>
  );

}

export default NavBar;
