import React from 'react';

const ItemPreview = ({ image, name, price, onClick }) => {
  return (
    <div className="itemPreview" onClick={onClick}>
      <img src={image} alt={name} className="itemImage" />
      <h3 className="itemName">{name}</h3>
      <span className="itemPrice">{price}</span>
    </div>
  );
};

export default ItemPreview;
