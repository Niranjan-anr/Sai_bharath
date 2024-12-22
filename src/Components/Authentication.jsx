import React from 'react';
import classes from './Authentication.module.css';

const Authentication = ({ onAuthenticate }) => {
  React.useEffect(() => {
    onAuthenticate(true);
  }, [onAuthenticate]);

  return (
    <div className={classes.Authentication}>
      <h2>Welcome to the website!</h2>
    </div>
  );
};

export default Authentication;