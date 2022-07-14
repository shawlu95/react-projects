export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const REMOVE = 'REMOVE';
export const CLEAR_CART = 'CLEAR_CART';
export const GET_TOTAL = 'GET_TOTAL';
export const GET_AMOUNT = 'GET_AMOUNT';
export const LOADING = 'LOADING';
export const DISPLAY_ITEMS = 'DISPLAY_ITEMS';
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT';

// example: action creator
export const removeItem = (id) => {
  return { type: REMOVE, payload: id };
};
