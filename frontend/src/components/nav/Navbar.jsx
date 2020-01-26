import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Nav, MenuIcon, Logo, Menu, MenuLink, MenuNavLink, MenuItem } from './Navbar.styled';
const NavBar = ({ history, loggedIn, logout, openModal }) => {

  const [isToggled, setIsToggled] = useState(false);
  const toggle = () => setIsToggled(prevState => !prevState);


  const renderLinks = () => {
    if (loggedIn) {
      return (
        <>
          <MenuNavLink to="/haikus">
            <MenuItem>My Haikus</MenuItem>
          </MenuNavLink>
          <MenuNavLink to="/challenges">
            <MenuItem>My Challenges</MenuItem>
          </MenuNavLink>
          <MenuNavLink to="/scoreboard">
            <MenuItem>Scoreboard</MenuItem>
          </MenuNavLink>
          <MenuLink onClick={logout}>
            <MenuItem>Logout</MenuItem>
          </MenuLink>
        </>
      );
    } else {
      return (
        <>
          <MenuLink onClick={() => openModal('signup')}>
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
        <Logo>GWH</Logo>
      </Nav>
      <Menu isExpanded={isToggled}>
        {renderLinks()}
      </Menu>
    </>
  );

}

export default NavBar;

//const logoutUser = e => {
  //   e.preventDefault();
  //   logout();
  //   debugger;
  //   history.push('/login');
  // }
