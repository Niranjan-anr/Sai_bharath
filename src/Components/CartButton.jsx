import React from 'react';

const CartButton = ({ itemCount, onClick }) => {
  return (
    <button onClick={onClick}>
      Cart ({itemCount})
    </button>
  );
};

export default CartButton;
