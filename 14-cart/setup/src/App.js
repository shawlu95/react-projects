import React from 'react';
import { useGlobalContext } from './context';

// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
// items

import { createStore } from 'redux';
import { INCREASE, DECREASE } from './actions';
import reducer from './reducer';
import cartItems from './data';

const initialStore = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const store = createStore(reducer, initialStore);

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer />
    </main>
  );
}

export default App;
