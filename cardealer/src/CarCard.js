// CarCard.js
import React from 'react';

const CarCard = ({ car }) => (
  <div className="card">
    <img src={car.image} alt={`${car.make} ${car.model}`} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
    <strong>{car.year} {car.make} {car.model}</strong>
    <p>Price: ${car.price.toLocaleString()}</p>
    <p>Miles: {car.miles.toLocaleString()} miles</p>
  </div>
);

export default CarCard;
