const reducer = (state, action) => {
  console.log(action)
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  } else if (action.type === 'REMOVE') {
    return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
  } else if (action.type === 'INCREASE') {
    let cart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: cart };
  } else if (action.type === 'DECREASE') {
    let cart = state.cart.map((item) => {
      if (item.id === action.payload) {
        // remove item if amount drops to zero
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    }).filter((item) => item.amount !== 0);
    return { ...state, cart: cart };
  } else if (action.type === 'GET_TOTAL') {
    let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
      const { price, amount } = cartItem;
      cartTotal.total += amount * price;
      cartTotal.amount += amount;
      return cartTotal;
    }, { total: 0, amount: 0 });
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  } else if (action.type === 'LOADING') {
    return { ...state, loading: true };
  } else if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, loading: false };
  } else if (action.type === 'TOGGLE_AMOUNT') {
    const { id, type } = action.payload;

    let cart = state.cart.map((item) => {
      if (item.id === id) {
        if (type === 'inc') {
          return { ...item, amount: item.amount + 1 };
        } else if (type === 'dec') {
          return { ...item, amount: item.amount - 1 };
        }
      }
      return item;
    }).filter((item) => item.amount !== 0);
    return { ...state, cart };

  }
  throw new Error('No matching action type');
}

export default reducer;