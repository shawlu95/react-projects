import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTAL,
  LOADING,
  DISPLAY_ITEMS,
  TOGGLE_AMOUNT,
} from './actions';

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case INCREASE: {
      let cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: cart };
    }
    case DECREASE: {
      let cart = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            // remove item if amount drops to zero
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cart: cart };
    }
    case GET_TOTAL: {
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          cartTotal.total += amount * price;
          cartTotal.amount += amount;
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    }
    case LOADING:
      return { ...state, loading: true };
    case DISPLAY_ITEMS:
      return { ...state, cart: action.payload, loading: false };
    case TOGGLE_AMOUNT: {
      const { id, type } = action.payload;

      let cart = state.cart
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
      return { ...state, cart };
    }
    default:
      return state;
  }
};

export default reducer;
