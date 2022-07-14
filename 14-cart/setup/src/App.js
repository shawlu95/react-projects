import React from 'react';
import { useGlobalContext } from './context';

// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
// items

import { createStore } from 'redux';

function reducer(state, action) {
  console.log('reducer called', state, action);
  if (action.type === 'DECREASE') {
    // returning a new state object (not mutating old state)
    return { ...state, count: state.count - 1 };
  }

  if (action.type === 'INCREASE') {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === 'RESET') {
    return { ...state, count: 0 };
  }

  // return old state if no matching action found
  return state;
}

const initialStore = {
  count: 10,
  name: 'shaw',
};

const store = createStore(reducer, initialStore);
store.dispatch({ type: 'DECREASE' });
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'RESET' });

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
