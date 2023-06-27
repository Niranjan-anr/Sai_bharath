import React, { useState } from 'react';
import classes from './Listing.module.css';
import iphone_image from '../Images/Iphone.jpg';
import iwatch_image from '../Images/i watch ultra.webp';
import ipad_image from '../Images/i_pad.jpg';

const Listing = ({ addItemToCart }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleImageClick = (item) => {
    setSelectedItem((prevSelectedItem) => (prevSelectedItem && prevSelectedItem.id === item.id) ? null : item);
  };

  const items = [
    { id: 'iPhone', name: 'pi Phone 14', image: iphone_image, alt: 'iPhone', description: {
      clor:'black',
      storage: '128 GB ROM',
      size:'15.49 cm (6.1 inch) Super Retina XDR Display',
      camera:'12MP + 12MP | 12MP Front Camera',
     chip_and_processor:'A15 Bionic Chip, 6 Core Processor Processor'} },
    { id: 'iWatch', name: 'pi Watch ultra', image: iwatch_image, alt: 'iWatch', description: { color:'Black',Tracking:'GPS Antenna. Precision dual-frequency GPS provides accurate location for calculating distance, pace and route maps',
      special_button:'Action button in International Orange. ...'
      ,speakers:'Dual Speakers. ...'} },
    { id: 'iPad', name: 'pi Pad air', image: ipad_image, alt: 'iPad', description: {color:"silver", storage:'64 GB ROM',
      Display:'27.69 cm (10.9 Inch) Display',
      camera:'12 MP Primary Camera | 12 MP Front',
      iPadOS:' 15' , Battery: 'Lithium Polymer',
      Processor: 'Apple M1 Chip '} },
  ];

  return (
    <div className={classes.container_image}>
      {items.map((item) => (
        <div key={item.id}>
          <div>
            <img src={item.image} alt={item.alt} onClick={() => handleImageClick(item)} />
          </div>
          {selectedItem && selectedItem.id === item.id && (
            <div className={classes.description}>
            {Object.entries(item.description).map(([key, value]) => (
              <p key={key}>
                {key}: 
                {value}
              </p>
            ))}
          </div>          
          )}
          <div>
            <h2>{item.name}</h2>
            <button onClick={() => addItemToCart(item)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
