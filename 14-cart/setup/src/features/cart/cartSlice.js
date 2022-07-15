import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../data';
const initialState = {
  loading: false,
  cartItems,
  total: 0,
  amount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
