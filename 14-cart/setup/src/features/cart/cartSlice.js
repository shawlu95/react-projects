import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../data';
const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
});

export default cartSlice.reducer;
