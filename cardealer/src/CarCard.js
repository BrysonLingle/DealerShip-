// Inside CarCard.js

// ... other imports and code ...

const CarCard = ({ car }) => (
    <div className="card">
      <img src={car.image} alt={`${car.make} ${car.model}`} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
      <div className="card-content">
        <strong>{car.year} {car.make} {car.model}</strong>
        <p>Price: ${car.price.toLocaleString()}</p>
        <p>Miles: {car.miles.toLocaleString()} miles</p>
        <div className="additional-info">
          {/* Add any additional information you want to display */}
          <p className="color-info">Color: {car.color}</p>
          <p className="condition-info">Condition: {car.condition}</p>
        </div>
      </div>
    </div>
  );
  
  export default CarCard;
  