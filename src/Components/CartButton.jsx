import React from 'react';
import classes from './CartButton.module.css';

const CartButton = ({ itemCount, onClick }) => {
  return (
    <button className={classes.cartButton} onClick={onClick}>
      Cart ({itemCount})
    </button>
  );
};

export default CartButton;
