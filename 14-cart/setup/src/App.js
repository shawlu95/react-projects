import React, { useEffect } from 'react';
import { useGlobalContext } from './context';

// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useDispatch } from 'react-redux';
import { loadItems, displayItems } from './features/cart/cartSlice';

const url = 'https://course-api.com/react-useReducer-cart-project';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      dispatch(loadItems());
      const response = await fetch(url);
      const cartItems = await response.json();
      dispatch(displayItems({ cartItems }));
    };
    fetchData();
  }, []);

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
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
