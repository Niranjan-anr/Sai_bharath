import React, { useRef, useEffect, useState } from 'react';
import classes from './CartDialog.module.css';
import Backdrop from './Backdrop';
import OrderDialog from './OrderDialog';
import OrderSuccessDialog from './OrderSuccess';

const CartDialog = ({ isOpen, onClose, items }) => {
  const dialogRef = useRef(null);
  const [showOrderDialog, setShowOrderDialog] = useState(false);
  const [showOrderPlacedDialog, setShowOrderPlacedDialog] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState(0);
  
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };
  
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);
  useEffect(() => { 
    applyDiscount();
    // eslint-disable-next-line 
  }, [coupon, items]);
  
  const totalPrice = items?.reduce((total, item) => {
    const price = parseFloat(item.price?.replace(/,/g, '').replace('₹', '')) || 0;
    return total + price * item.count;
  }, 0) || 0;
  useEffect(() => { 
    applyDiscount();
    // eslint-disable-next-line 
  }, [coupon]);
   
  const handlePlaceOrder = () => {
    setShowOrderDialog(true);
    onClose();
  };

  const handleOrderClose = () => {
    setShowOrderDialog(false);
  };

  const handleOrderPlacedClose = () => {
    setShowOrderPlacedDialog(false);
  };

  const handleOrderPlaced = (address, total) => {
    setShowOrderDialog(false);
    setShowOrderPlacedDialog(true);

    fetch('https://pinapple-b8f29-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({ items, totalPrice: total, address }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Order submitted:', data);
      })
      .catch((error) => {
        console.error('Error submitting order:', error);
      });
  };

  const applyDiscount = () => {
    if (coupon === 'Niranjan') {
      const discount = totalPrice * 0.3; // 30% discount
      setDiscountedPrice(totalPrice - discount);
    } else {
      setDiscountedPrice(totalPrice);
    }
  };

  return (
    <>
      {isOpen && (
        <>
          <Backdrop onClick={onClose} />
          <div className={classes.cartDialogOverlay}>
            <div className={classes.cartDialogContent} ref={dialogRef}>
              <h2 className={classes.cartDialogTitle}>Cart</h2>
              <ul className={classes.cartDialogList}>
                {items?.map((item) => (
                  <li key={item.id} className={classes.cartDialogItem}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={classes.cartDialogItemImage}
                    />
                    <span className={classes.cartDialogItemName}>{item.name}</span>
                    <span className={classes.cartDialogItemCount}>({item.count})</span>
                    <span className={classes.cartDialogItemPrice}>{item.price}</span>
                    
                  </li>
                ))}
              </ul>
              <div className={classes.cartDialogTotal}>
                Total: ₹{discountedPrice.toLocaleString()}
              </div>
              <button
                className={classes.cartDialogButtonOrder}
                onClick={handlePlaceOrder}
                disabled={items.length === 0} // Disable button when there are no items
              >
                Place Order
              </button>
              <button className={classes.cartDialogButton} onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </>
      )}
      {showOrderDialog && (
        <OrderDialog
          items={items}
          totalPrice={discountedPrice}
          onClose={handleOrderClose}
          onConfirmOrder={(address, total) => handleOrderPlaced(address, total)}
          setCoupon={setCoupon}
        />
      )}
      {showOrderPlacedDialog && <OrderSuccessDialog onClose={handleOrderPlacedClose} />}
    </>
  );
};

export default CartDialog;