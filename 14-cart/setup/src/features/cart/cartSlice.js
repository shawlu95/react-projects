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
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});

export const { clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
