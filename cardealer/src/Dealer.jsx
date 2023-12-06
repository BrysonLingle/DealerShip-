import React, { useState } from 'react';

const CarDealership = () => {
  // Sample data for cars
  const initialCars = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2022, price: 25000 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2021, price: 22000 },
    // Add more cars as needed
  ];

  const [cars, setCars] = useState(initialCars);

  return (
    <div>
      <h1>Welcome to XYZ Car Dealership</h1>
      
      <h2>Available Cars</h2>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <strong>{car.year} {car.make} {car.model}</strong> - ${car.price.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarDealership;
