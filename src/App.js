import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
        <CartValue/>
        <ExpenseList/>
        <ExpenseItem/>
        <ItemSelected/>
        <Location/>
    </div>
  );
}

export default App;
