import React, { useState } from 'react';
import classes from './Listing.module.css';
import MilletFlour from '../Images/MilletFlour.jpg';
import MilletBatter from '../Images/MilletBatter.png';
import Idli from '../Images/Idli.jpg';
import Veg from '../Images/Veg.jpg';
import Sprouts from '../Images/Sprouts.jpg';

const Listing = ({ addItemToCart }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleImageClick = (item) => {
    setSelectedItem((prevSelectedItem) => (prevSelectedItem && prevSelectedItem.id === item.id) ? null : item);
  };

  const items = [
    { id: 'Millet', name: 'Millet Batters', image: MilletBatter , alt: 'Millet Batter', description: { price:'₹160', storage:'5 days' } },
    { id: 'MilletFlour', name: 'Millet Flour', image: MilletFlour, alt: 'image', description: { price: '₹99', storage:'10 days' } },
    { id: 'Sprouts', name: 'Sprouts Batter', image: Sprouts, alt: 'image', description: { price: '₹49', storage:'5 days' } },
    { id: 'Veg', name: 'Veg Batter', image: Veg, alt: 'image', description: { price: '₹249', storage:'10 days' } },
    { id: 'Idli', name: 'Idli and Dosa Batter', image: Idli, alt: 'Image', description: { price: '₹29', storage:'3 days' } },
  ];

  return (
    <div className={classes.container}>
      {items.map((item) => (
        <div key={item.id} className={classes.item}>
          <div className={classes.imageWrapper}>
            <img src={item.image} alt={item.alt} onClick={() => handleImageClick(item)} className={classes.itemImage} />
          </div>
          {selectedItem && selectedItem.id === item.id && (
            <div className={classes.description}>
              {Object.entries(item.description).map(([key, value]) => (
                <p key={key} className={classes.descriptionText}>
                  <strong>{key}:</strong> {value}
                </p>
              ))}
            </div>
          )}
          <div className={classes.itemInfo}>
            <h2 className={classes.itemName}>{item.name}</h2>
            <button onClick={() => addItemToCart(item)} className={classes.addToCartButton}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
