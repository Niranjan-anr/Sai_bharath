import React, { useState } from 'react';
import classes from './OrderDialog.module.css';

const OrderDialog = ({ items, totalPrice, onClose, onConfirmOrder, setCoupon }) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [pincode, setPincode] = useState('');
  const [couponCode, setCouponCode] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  };

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handleCouponChange = (event) => {
    setCouponCode(event.target.value);
  };

  const handleConfirmOrder = () => {
    if (typeof onConfirmOrder === 'function') {
      const address = {
        name,
        city,
        street,
        pincode,
      };
      onConfirmOrder(address, totalPrice);
    }
  };

  const handleApplyCoupon = () => {
    setCoupon(couponCode);
  };

  return (
    <div className={classes.orderDialogOverlay}>
      <div className={classes.orderDialogContent}>
        <h2 className={classes.orderDialogTitle}>Confirm Order</h2>
        <ul className={classes.orderDialogList}>
          {items?.map((item) => (
            <li key={item.id} className={classes.orderDialogItem}>
              <span className={classes.orderDialogItemName}>{item.name}</span>
              <span className={classes.orderDialogItemCount}>({item.count})</span>
              <span className={classes.orderDialogItemPrice}>{item.price}</span>
            </li>
          ))}
        </ul>
        <div className={classes.orderDialogTotal}>
          Total: ₹{totalPrice.toLocaleString()}
        </div>
        <div className={classes.orderDialogAddress}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleCityChange}
            placeholder="Enter your city"
          />
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            value={street}
            onChange={handleStreetChange}
            placeholder="Enter your street"
          />
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            id="pincode"
            value={pincode}
            onChange={handlePincodeChange}
            placeholder="Enter your pincode"
          />
        </div>
        <div className={classes.orderDialogCoupon}>
          <label htmlFor="coupon">Coupon code:</label>
          <input
            type="text"
            id="coupon"
            value={couponCode}
            onChange={handleCouponChange}
            placeholder="Enter coupon code"
          />
          <button className={classes.orderDialogButton} onClick={handleApplyCoupon}>
            Apply Coupon
          </button>
        </div>
        <button className={classes.orderDialogButton} onClick={handleConfirmOrder}>
          Confirm Order
        </button>
        <button className={classes.orderDialogButton} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OrderDialog;
