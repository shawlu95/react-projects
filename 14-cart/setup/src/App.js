import React from 'react';

// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
// items

import { createStore } from 'redux';
import { Provider } from 'react-redux';
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
  const { loading } = store.getState();
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
