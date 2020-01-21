import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { sleep, ghostType } from './demo_bot_util';
import { pushRandomNotification } from 'util/push_notification_util';

const LoginForm = ({ history, login }) => {



  const _initialUserData = {
    email: '',
    password: '',
  };
  const [userData, setUserData] = useState(_initialUserData);
  const { email, password } = userData;

  const handleInput = e => {
    const { name, value } = e.currentTarget;
    setUserData(prevUserData => ({ ...prevUserData, [name]: value }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    login(userData).then(() => history.push('/dashboard')).catch(err => { debugger })
  }

  // ---------- Demo Bot Config
  const $submitButton = useRef(null);
  const [isBotRuning, setBotRunning] = useState(false);

  const runDemoLogin = () => {
    if (isBotRuning) { return };
    setBotRunning(true);
    setUserData(_initialUserData);
    ghostType('demo@bot.com', letter => {
      setUserData(prev => ({ ...prev, email: prev.email + letter }))
    }, 1500)
      .then(() => sleep(800))
      .then(() => ghostType('password', letter => {
        setUserData(prev => ({ ...prev, password: prev.password + letter }))
      }, 1000))
      .then(() => sleep(400))
      .then(() => { setBotRunning(false); $submitButton.current.click(); });
  }
  // --------------------------

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text"
            name="email"
            value={email}
            onChange={handleInput}
            placeholder="Email"
          />
          <br />
          <input type="password"
            name="password"
            value={password}
            onChange={handleInput}
            placeholder="Password"
          />
          <br />
          <input ref={$submitButton} type="submit" value="Submit" />
          <button onClick={runDemoLogin}>Demo</button>
        </div>
      </form>
      <button onClick={pushRandomNotification}><strong>Generate Push Notification</strong></button>
    </div>
  );
}

export default withRouter(LoginForm);