import React, { useState } from 'react';
import classes from './Authentication.module.css';

const Authentication = ({ onAuthenticate }) => {
  // eslint-disable-next-line 
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username === 'aaku' && password === 'kooraku') {
      setAuthenticated(true);
      onAuthenticate(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={classes.Authentication}>
      <h2>Authentication</h2>
      <input type="text" placeholder="Username" className={classes.userName} value={username} onChange={handleUsernameChange} />
      <div className={classes.passwordContainer}>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className={classes.passwordDisplay} onClick={toggleShowPassword}>
          {showPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path
                d="M12 3c4.963 0 9 4.037 9 9s-4.037 9-9 9-9-4.037-9-9 4.037-9 9-9zm0 16c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7zm-3-7h6a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z"
                fill="#fff"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path
                d="M12 3c4.963 0 9 4.037 9 9s-4.037 9-9 9-9-4.037-9-9 4.037-9 9-9zm0 16c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7zm0-10c-1.657 0-3 1.343-3 3 0 1.658 1.343 3 3 3s3-1.342 3-3c0-1.657-1.343-3-3-3zm0 4c-.551 0-1-.448-1-1s.449-1 1-1 1 .448 1 1-.449 1-1 1z"
                fill="#fff"
              />
            </svg>
          )}
        </button>
      </div>
      <button className={classes.handleLogin} onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Authentication;
