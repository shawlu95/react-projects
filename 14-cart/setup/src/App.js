import React, { useEffect } from 'react';

// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { loadItems, displayItems } from './features/cart/cartSlice';

const url = 'https://course-api.com/react-useReducer-cart-project';

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.cart);
  useEffect(() => {
    const fetchData = async () => {
      dispatch(loadItems());
      const response = await fetch(url);
      const cartItems = await response.json();
      dispatch(displayItems({ cartItems }));
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
