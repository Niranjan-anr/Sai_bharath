import React from 'react';
import classes from './OrderSuccsess.module.css';

const OrderSuccessDialog = ({ onClose }) => {
  return (
    <div className={classes.orderSuccessDialogBackdrop} onClick={onClose}>
      <div className={classes.orderSuccessDialogOverlay}>
        <div className={classes.orderSuccessDialogContent}>
          <h2 className={classes.orderSuccessDialogTitle}>Order Placed Successfully!</h2>
          <p>Your order has been placed successfully.</p>
          <button className={classes.orderSuccessDialogButton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessDialog;

