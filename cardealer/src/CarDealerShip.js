import React from 'react';
import { Link } from 'react-router-dom';
import './CarDealerShip.css'; // Make sure to import your CSS file

const CarDealership = () => {
  // Sample data for cars
  // ...

  // Replace 'your-logo-url' with the actual URL of your logo
  const logoUrl = 'https://freeimage.host/i/JIkX6j2';

  return (
    <div>
      {/* Logo in the top left */}
      <img src={logoUrl} alt="Lingle Dealers Logo" className="logo" />

      <h1>Lingle Dealers</h1>

      <ul>
        {/* ... */}
      </ul>

      {/* Navigation Buttons */}
      <div>
        <Link to="/new-cars">
          <button>New Cars</button>
        </Link>

        <Link to="/used-cars">
          <button>Used Cars</button>
        </Link>
      </div>
    </div>
  );
};

export default CarDealership;
