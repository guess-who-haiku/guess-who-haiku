import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Nav, MenuIcon, Logo, Menu, MenuLink, MenuItem } from './Navbar.styled';
const NavBar = ({ history, loggedIn, logout }) => {

  const [isToggled, setIsToggled] = useState(false);
  const toggle = () => setIsToggled(prevState => !prevState);


  const renderLinks = () => {
    if (true) {
      return (
        <>
          <MenuLink to="/haikus">
            <MenuItem>My Haikus</MenuItem>
          </MenuLink>
          <MenuLink to="/challenges">
            <MenuItem>My Challenges</MenuItem>
          </MenuLink>
          <MenuLink to="/scoreboard">
            <MenuItem>Scoreboard</MenuItem>
          </MenuLink>
          <MenuLink to="/login">
            <MenuItem>Logout</MenuItem>
          </MenuLink>
        </>
      );
    } else {
      return (
        <>
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
