// CarDealership.js
import React, { useState } from 'react';
import './App.css';
import CarCard from './CarCard';
import Footer from './Footer'; 

const CarDealership = () => {
  const initialCars = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2022, price: 25000, miles: 2000, image: 'https://cfx-wp-images.imgix.net/2022/01/Toyota-Camry-TRD-Front-edited.jpg?auto=compress%2Cformat&fit=scale&h=576&ixlib=php-3.3.0&w=1024&wpsize=large&s=37bd7696cfb65d69f242135773223e4b' },
    { id: 2, make: 'Honda', model: 'Civic', year: 2021, price: 22000, miles: 15000, image: 'https://di-uploads-pod1.dealerinspire.com/hondaoflincoln/uploads/2020/09/2021-Civic-Hatch-on-sale.jpg' },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2023, price: 35000, miles: 12000, image: 'https://i.gaw.to/vehicles/photos/40/32/403228-2023-ford-mustang.jpg' },
    { id: 4, make: 'Chevrolet', model: 'Malibu', year: 2022, price: 28000, miles: 18000, image: 'https://smartcdn.gprod.postmedia.digital/driving/wp-content/uploads/2023/05/P2283718-scaled.jpg' },
    { id: 5, make: 'Nissan', model: 'Altima', year: 2021, price: 24000, miles: 22000, image: 'https://editorials.autotrader.ca/media/194129/2021-nissan-altima-sr-awd-03-ct.jpg?anchor=center&mode=crop&width=1920&height=1080&rnd=132610125421730000g' },
    { id: 6, make: 'BMW', model: 'X5', year: 2023, price: 50000, miles: 8000, image: 'url_to_x5_image.jpg' },
    { id: 7, make: 'Mercedes-Benz', model: 'C-Class', year: 2022, price: 45000, miles: 10000, image: 'url_to_cclass_image.jpg' },
    { id: 8, make: 'Audi', model: 'A4', year: 2023, price: 42000, miles: 3000, image: 'url_to_a4_image.jpg' },
    { id: 9, make: 'Tesla', model: 'Model 3', year: 2022, price: 60000, miles: 5000, image: 'url_to_model3_image.jpg' },
    { id: 10, make: 'Hyundai', model: 'Sonata', year: 2021, price: 23000, miles: 16000, image: 'url_to_sonata_image.jpg' },
    { id: 11, make: 'Kia', model: 'Optima', year: 2023, price: 26000, miles: 13000, image: 'url_to_optima_image.jpg' },
    { id: 12, make: 'Subaru', model: 'Outback', year: 2022, price: 32000, miles: 9000, image: 'url_to_outback_image.jpg' },
    { id: 13, make: 'Mazda', model: 'CX-5', year: 2021, price: 28000, miles: 7000, image: 'url_to_cx5_image.jpg' },
    { id: 14, make: 'Volkswagen', model: 'Jetta', year: 2023, price: 25000, miles: 11000, image: 'url_to_jetta_image.jpg' },
    { id: 15, make: 'Acura', model: 'MDX', year: 2022, price: 48000, miles: 14000, image: 'url_to_mdx_image.jpg' },
    { id: 16, make: 'Lexus', model: 'RX', year: 2021, price: 52000, miles: 17000, image: 'url_to_rx_image.jpg' },
    { id: 17, make: 'Buick', model: 'Encore', year: 2023, price: 30000, miles: 20000, image: 'url_to_encore_image.jpg' },
    { id: 18, make: 'Jeep', model: 'Cherokee', year: 2022, price: 35000, miles: 25000, image: 'url_to_cherokee_image.jpg' },
    { id: 19, make: 'Ram', model: '1500', year: 2021, price: 40000, miles: 3000, image: 'url_to_ram1500_image.jpg' },
    { id: 20, make: 'GMC', model: 'Terrain', year: 2023, price: 32000, miles: 8000, image: 'url_to_terrain_image.jpg' },
    // Add more cars as needed
  ];

  const [cars, setCars] = useState(initialCars);

  return (
    <div className="page-container">
      <h1>Lingle Dealers</h1>
      <h2>Available Cars</h2>
      <div className="cards-container">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default CarDealership;
