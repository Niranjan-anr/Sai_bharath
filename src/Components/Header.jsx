import React, { useState } from 'react';
import classes from './Header.module.css';
import CartButton from './CartButton';
import CartDialog from './CartDialog';
import ContactDetails from './ContactDialog';
import iphone_image from '../Images/Iphone.jpg';
import iwatch from '../Images/i watch.jpg';
import i_pad from '../Images/i_pad.jpg';
import airpadsPro from '../Images/airPodsPro.jpg';
import icharger from '../Images/ICharger.jpg';
import ipen from '../Images/Ipencil.jpg';
import PacBook from '../Images/MacBook.jpg';
import PiCloth from '../Images/PiCloth.jpg';
import piSafe from '../Images/piSafe.jpg';
import wiredEarPhones from '../Images/wiredEaredPhones.jpg';
import PiBoard from '../Images/PIBoard.jpg';

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
      case 'piPhone':
        return iphone_image;
      case 'piWatch':
        return iwatch;
      case 'piPad':
        return i_pad;
      case 'piPods':
        return airpadsPro;
        case 'picharger':
          return icharger;
        case 'pipen':
          return ipen;
        case 'PacBook':
          return PacBook;
        case 'PiCloth':
          return PiCloth;
        case 'piSafe':
          return piSafe;
        case 'wiredEarPhones':
          return wiredEarPhones;
        case 'piBoard':
          return PiBoard;
      default:
        return '';
    }
  }

  function getItemPrice(item) {
    switch (item) {
      case 'piPhone':
        return '₹70,000';
      case 'piWatch':
        return '₹35,000';
      case 'piPad':
        return '₹1,20,000';
      case 'piPods':
        return '₹25,000';
        case 'picharger':
          return '₹2,500'
        case 'pipen':
          return '₹5,000';
        case 'PacBook':
          return '₹50'; 
        case 'PiCloth':
          return '₹1,00,000'; 
        case 'piSafe':
          return '₹2,500';
        case 'wiredEarPhones':
          return '₹1,500'; 
        case 'piBoard':
          return '50,000';
      default:
        return '';
    }
  }
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
