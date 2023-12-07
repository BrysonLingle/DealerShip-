import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarDealership from './CarDealerShip';
import NewCars from './NewCars';
import UsedCars from './UsedCars';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarDealership />} />
        <Route path="/new-cars" element={<NewCars />} />
        <Route path="/used-cars" element={<UsedCars />} />
      </Routes>
    </Router>
  );
};

export default App;
