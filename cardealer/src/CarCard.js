// Inside CarCard.js
import React, { useState } from 'react';
import './CarCard.css';

const CarCard = ({ car }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={car.image} alt={`${car.make} ${car.model}`} />
      <div className="card-content">
        <strong>{car.year} {car.make} {car.model}</strong>
        <p>Price: ${car.price.toLocaleString()}</p>
        <p>Miles: {car.miles.toLocaleString()} miles</p>
        <div className={`additional-info ${isHovered ? 'visible' : ''}`}>
          {/* Add any additional information you want to display */}
          <p className="color-info">Color: {car.color}</p>
          <p className="condition-info">Condition: {car.condition}</p>
          <p className="mpg-info">MPG: {car.milesPerGallon}</p>
          <p className="drivetrain-info">Drive Train: {car.driveTrain}</p>
          <p className="interior-info">Interior Color: {car.interiorColor}</p>
          <p className="fueltype-info">Fuel Type: {car.fuelType}</p>
          <p className="engine-info">Engine: {car.engine}</p>
          <p className="transmission-info">Transmission: {car.transmission}</p>
        </div>
        <button className="buttonInfo">More Info</button>
      </div>
    </div>
  );
};

export default CarCard;
