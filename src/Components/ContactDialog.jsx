import React from 'react';
import classes from './ContactDialog.module.css';

const ContactDetails = () => {
  return (
    <div className={classes.container}>
      <h2>Contact Details</h2>
      <div className={classes.details}>
        <p><strong>Name:</strong> ANR (Niranjan)</p>
        <p><strong>Email:</strong> niranjanreddyannareddy@email.com</p>
        <p><strong>Phone:</strong> +91 93924848249</p>
        <p><strong>Address:</strong>go staraight take left and bendforward</p>
      </div>
    </div>
  );
};

export default ContactDetails;
