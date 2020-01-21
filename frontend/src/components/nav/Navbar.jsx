import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = ({ history, loggedIn, logout }) => {

  const logoutUser = e => {
    e.preventDefault();
    logout();
    debugger;
    history.push('/login');
  }

  const getLinks = () => {
    if (loggedIn) {
      return (
        <div>
          <button onClick={logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  return (
    <div>
      <h1>Chirper</h1>
      {getLinks()}
    </div>
  );

}

export default NavBar;