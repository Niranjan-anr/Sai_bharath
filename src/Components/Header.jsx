import React, { useState } from 'react';
import classes from './Header.module.css';
import CartButton from './CartButton';
import CartDialog from './CartDialog';
import ContactDetails from './ContactDialog';
import MilletFlour from '../Images/MilletFlour.jpg';
import MilletBatter from '../Images/MilletBatter.png';
import Idli from '../Images/Idli.jpg';
import Veg from '../Images/Veg.jpg';
import Sprouts from '../Images/Sprouts.jpg';

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
      alt: 'Image not loading',
    }));

  function getItemImageUrl(item) {
    switch (item) {
      case 'Millet':
        return MilletBatter;
      case 'MilletFlour':
        return MilletFlour;
      case 'Idli':
        return Idli;
      case 'Sprouts':
        return Sprouts;
      case 'Veg':
        return Veg;
      default:
        return '';
    }
  }

  function getItemPrice(item) {
    switch (item) {
      case 'Millet':
        return '₹160';
      case 'MilletFlour':
        return '₹99';
      case 'Idli':
        return '₹49';
      case 'Sprouts':
        return '₹249';
      case 'Veg':
        return '₹29';
      default:
        return '';
    }
  }

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>SAI BHARATH MILLET PRODUCTS</h1>
      <nav>
        <ul className={classes.navList}>
          <li>
            <button className={classes.contactButton} onClick={handleContactButtonClick}>Contact</button>
          </li>
          <li>
            <CartButton className={classes.cartButton} itemCount={cartItems.length} onClick={handleCartButtonClick} />
          </li>
        </ul>
      </nav>
      <CartDialog
        isOpen={isCartOpen}
        onClose={handleCartDialogClose}
        items={cartItems}
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
