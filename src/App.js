import React from 'react';

import TypeDrink from './components/typeDrink/TypeDrink';
import './App.css';

import { dataDrinks } from './utils/constants/data';

function App() {
  
  console.log("Se añade este clg de prueba");

  return (
    <div className="primary-content">
      <TypeDrink data={dataDrinks}/>
    </div>
  );
}

export default App;
