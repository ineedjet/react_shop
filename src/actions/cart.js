export const addToCart = (item = 1) => ({
  type: 'ADD_TO_CART',
  item
});

export const initCart = (items) => ({
  type: 'INIT_CART',
  items
});