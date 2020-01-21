import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const SignupForm = ({ history, signup }) => {

  const _initialUserData = {
    email: '',
    username: '',
    password: '',
  };

  const [userData, setUserData] = useState(_initialUserData);
  const { email, username, password } = userData;

  const handleInput = e => {
    const { name, value } = e.currentTarget;
    setUserData(prevUserData => ({ ...prevUserData, [name]: value }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    signup(userData).then(() => history.push('/login'));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <br />
          <input type="text"
            name="email"
            value={email}
            onChange={handleInput}
            placeholder="Email"
          />
          <br />
          <input type="text"
            name="username"
            value={username}
            onChange={handleInput}
            placeholder="Handle"
          />
          <br />
          <input type="password"
            name="password"
            value={password}
            onChange={handleInput}
            placeholder="Password"
          />
          <br />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default withRouter(SignupForm);