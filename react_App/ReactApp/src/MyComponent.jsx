import React, { useState } from 'react';

function MyComponent() {
  const [cars, setCars] = useState([]);

  const [carName, setCarName] = useState('');
  const [carYears, setCarYears] = useState('');
  const [carColors, setCarColors] = useState('');
  const [carModels, setCarModels] = useState('');

  function handleAddCar() {
    const newCar = {
      name: carName,
      year: carYears,
      color: carColors,
      model: carModels
    };

    setCars(prev => [...prev, newCar]);

    // reset inputs
    setCarName('');
    setCarYears('');
    setCarColors('');
    setCarModels('');
  }

  function handleRemoveCar(index) {
    setCars(prev => prev.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>Car Details Lists.</h1>

      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.name} {car.year} {car.color} {car.model}
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={carName}
        onChange={(e) => setCarName(e.target.value)}
        placeholder="Add a car"
      /><br />

      <input
        type="number"
        value={carYears}
        onChange={(e) => setCarYears(e.target.value)}
        placeholder="Add a car year"
      /><br />

      <input
        type="text"
        value={carColors}
        onChange={(e) => setCarColors(e.target.value)}
        placeholder="Add a car color"
      /><br />

      <input
        type="text"
        value={carModels}
        onChange={(e) => setCarModels(e.target.value)}
        placeholder="Add a car model"
      /><br />

      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default MyComponent;