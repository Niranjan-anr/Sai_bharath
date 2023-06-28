import React, { useState } from 'react';
import classes from './Listing.module.css';
import iphone_image from '../Images/Iphone.jpg';
import iwatch_image from '../Images/i watch ultra.webp';
import ipad_image from '../Images/i_pad.jpg';
import airpadsPro from '../Images/airPodsPro.jpg';
import icharger from '../Images/ICharger.jpg';
import ipen from '../Images/Ipencil.jpg';
import MacBook from '../Images/MacBook.jpg';
import PiCloth from '../Images/PiCloth.jpg';
import piSafe from '../Images/piSafe.jpg';
import wiredEarPhones from '../Images/wiredEaredPhones.jpg';
import PiBoard from '../Images/PIBoard.jpg';



const Listing = ({ addItemToCart }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleImageClick = (item) => {
    setSelectedItem((prevSelectedItem) => (prevSelectedItem && prevSelectedItem.id === item.id) ? null : item);
  };

  const items = [
    { id: 'piPhone', name: 'pi Phone 14', image: iphone_image, alt: 'iPhone', description: {
      clor:'black',
      price:'70,000',
      storage: '128 GB ROM',
      size:'15.49 cm (6.1 inch) Super Retina XDR Display',
      camera:'12MP + 12MP | 12MP Front Camera',
     chip_and_processor:'A15 Bionic Chip, 6 Core Processor Processor'} },
    { id: 'piWatch', name: 'pi Watch ultra', image: iwatch_image, alt: 'iWatch', description: { color:'Black', price : '₹35,000',Tracking:'GPS Antenna. Precision dual-frequency GPS provides accurate location for calculating distance, pace and route maps',
      special_button:'Action button in International Orange. ...'
      ,speakers:'Dual Speakers. ...'} },
    { id: 'piPad', name: 'pi Pad air', image: ipad_image, alt: 'iPad', description: {price : '₹1,20,000',color:"silver", storage:'64 GB ROM',
      Display:'27.69 cm (10.9 Inch) Display',
      camera:'12 MP Primary Camera | 12 MP Front',
      iPadOS:' 15' , Battery: 'Lithium Polymer',
      Processor: 'Apple M1 Chip '} },
      { id:'piPods' ,name: 'pi pods(3rd generation)', image: airpadsPro, alt: 'iPad', description: {color: 'White',
      design: 'In-ear',
      activeNoiseCancellation: true,
      wirelessCharging: true,
      waterResistance: 'IPX4',
      connectivity: 'Bluetooth 5.0'}},
      { id: 'picharger', name: 'Pi Charger', image: icharger, alt: 'PI charger', description: { price : '₹2,500', charging: "Fast charging",
      ports: "Multiple USB ports",
      design: "Compact design",}},
      { id: 'pipen', name: ' Pipen', image: ipen, alt: 'Pipen', description: { price : '₹5,000', stylus: "Digital stylus",
      sensitivity: "Pressure sensitivity",
      connectivity: "Bluetooth connectivity",}},   
      { id: 'PacBook', name:  'MacBook', image: MacBook, alt: ' MacBook', description:{ price : '50',  processor: "Powerful processor",
      display: "High-resolution display",
      design: "Sleek design",}},   
      { id: 'PiCloth', name: 'PiCloth', image: PiCloth, alt: 'PiCloth', description: { price : '₹1,00,000', material: "Microfiber material",
      cleaning: "Lint-free cleaning",
      safeForScreens: "Safe for screens",}},   
      { id: 'piSafe', name: 'piSafe', image: piSafe, alt: 'piSafe', description: { price : '₹2,500', lockingMechanism: "Secure locking mechanism",
      authentication: "Biometric authentication",
      construction: "Durable construction",}},   
      { id: 'wiredEarPhones', name: 'wiredEarPhones', image: wiredEarPhones, alt: 'wiredEarPhones', description: { price : '₹1,500', soundQuality: "High-quality sound",
      tangleFreeCables: "Tangle-free cables",
      microphone: "In-line microphone",}},   
      { id: 'piBoard', name: 'Pi Board', image: PiBoard, alt: 'PiBoard', description: { price : '₹50,000',  connectivity: "Wireless connectivity",
      portability: "Compact and portable",
      batteryLife: "Long battery life",}},   

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
