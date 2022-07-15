import React, { useEffect } from 'react';

// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from './features/cart/cartSlice';

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(getCartItems('foo'));
  }, [dispatch]);

  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
