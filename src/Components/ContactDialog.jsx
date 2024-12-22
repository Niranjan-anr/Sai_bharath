import React from 'react';
import classes from './ContactDialog.module.css';

const ContactDetails = () => {
  return (
    <div className={classes.container}>
      <h2>Contact Details</h2>
      <div className={classes.details}>
        <p><strong>Name:</strong> AKKA </p>
        <p><strong>Phone:</strong> +91 8374670235 & 7075510279</p>
        <p><strong>Address:</strong>P.K Layout, Opp. Hot kerala Chips, Blue Building, TIRUPATI.
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
