// UsedCars.js
import React, { useState } from 'react';
import CarCard from './CarCard';
import './UsedCars.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const UsedCars = () => {
  const initialUsedCars = [
    // Your existing used cars
    { id: 21, make: 'Toyota', model: 'Corolla', year: 2019, price: 18000, miles: 30000, color: 'Black', condition: 'Good', image: 'url_to_corolla_image.jpg' },
    // Add 20 more used cars
    { id: 22, make: 'Honda', model: 'Accord', year: 2018, price: 20000, miles: 25000, color: 'Silver', condition: 'Excellent', image: 'url_to_accord_image.jpg' },
    { id: 23, make: 'Ford', model: 'Escape', year: 2017, price: 16000, miles: 35000, color: 'Blue', condition: 'Good', image: 'url_to_escape_image.jpg' },
    // Add more cars as needed
    // ...
    { id: 40, make: 'Nissan', model: 'Sentra', year: 2016, price: 15000, miles: 28000, color: 'Red', condition: 'Good', image: 'url_to_sentra_image.jpg' },
  ];

  const [cars, setCars] = useState(initialUsedCars);
  return (
    <div className="page-container">
      <h1>Lingle Dealers</h1>
      <h2>Available Used Cars</h2>
      <Link to="/" className="back-button">Back to Home</Link>
      <div className="cards-container">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default UsedCars;
