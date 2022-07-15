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
    loadItems: (state) => {
      state.loading = true;
    },
    displayItems: (state, { payload }) => {
      state.loading = false;
      state.cartItems = payload.cartItems;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    toggleAmount: (state, { payload }) => {
      const { id, type } = payload;
      state.cartItems = state.cartItems
        .map((item) => {
          if (item.id === id) {
            if (type === 'inc') {
              return { ...item, amount: item.amount + 1 };
            } else if (type === 'dec') {
              return { ...item, amount: item.amount - 1 };
            }
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
    },
    calculateTotals: (state) => {
      let { total, amount } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          cartTotal.total += amount * price;
          cartTotal.amount += amount;
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      total = parseFloat(total.toFixed(2));
      state.total = total;
      state.amount = amount;
    },
  },
});

export const {
  loadItems,
  displayItems,
  clearCart,
  removeItem,
  toggleAmount,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
