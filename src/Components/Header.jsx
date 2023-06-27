import React, { useState } from 'react';
import classes from './Header.module.css';
import CartButton from './CartButton';
import CartDialog from './CartDialog';
import ContactDetails from './ContactDialog';
import iphone_image from '../Images/Iphone.jpg';
import iwatch from '../Images/i watch.jpg';
import i_pad from '../Images/i_pad.jpg';

const Header = ({ itemCounts }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);

  const handleCartButtonClick = () => {
    setCartOpen(true);
  };

  const handleCartDialogClose = () => {
    setCartOpen(false);
  };

  const handleContactButtonClick = () => {
    setContactOpen(true);
  };

  const handleContactDialogClose = () => {
    setContactOpen(false);
  };

  const cartItems = Object.entries(itemCounts)
    .filter(([_, count]) => count > 0)
    .map(([item, count]) => ({
      id: item,
      name: item,
      count,
      image: getItemImageUrl(item),
      price: getItemPrice(item),
      alt: 'not loading',
    }));

  function getItemImageUrl(item) {
    switch (item) {
      case 'iPhone':
        return iphone_image;
      case 'iWatch':
        return iwatch;
      case 'iPad':
        return i_pad;
      default:
        return '';
    }
  }

  function getItemPrice(item) {
    switch (item) {
      case 'iPhone':
        return '₹70,000';
      case 'iWatch':
        return '₹35,000';
      case 'iPad':
        return '₹1,20,000';
      default:
        return '';
    }
  }

  const handleRemoveItem = (itemId) => {
    // Implement the logic to remove the item from the cart
    // using the provided itemId
    console.log('Removing item with ID:', itemId);
  };

  return (
    <header className={classes.header}>
      <h1>Pinapple</h1>
      <nav>
        <ul>
          <li>
            <button onClick={handleContactButtonClick}>Contact</button>
          </li>
          <li>
            <CartButton itemCount={cartItems.length} onClick={handleCartButtonClick} />
          </li>
        </ul>
      </nav>
      <CartDialog
        isOpen={isCartOpen}
        onClose={handleCartDialogClose}
        items={cartItems}
        onRemoveItem={handleRemoveItem} // Pass the onRemoveItem function as a prop
      />
      {isContactOpen && (
        <div className={classes.contactContainer}>
          <ContactDetails />
          <button className={classes.closeButton} onClick={handleContactDialogClose}>
            Close
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
