import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  orderAmount: 0
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart.filter((el) => el.id === action.payload.id)[0] === undefined
        ? state.cart.push({
            id: action.payload.id,
            img: action.payload.img,
            name: action.payload.name,
            price: action.payload.price,
            priceAmount: action.payload.priceAmount,
            count: action.payload.count
          })
        : (state.cart = state.cart.map((el) =>
            el.id === action.payload.id
              ? {
                  ...el,
                  priceAmount: el.price * (el.count + 1),
                  count: (el.count += 1)
                }
              : el
          ));
      state.orderAmount = state.cart
        .map((el) => el.priceAmount)
        .reduce((acc, cur) => acc + cur, 0);
    },
    updateCart: (state, action) => {
      state.cart = state.cart.map((el) =>
        el.id === action.payload.id
          ? {
              ...el,
              priceAmount: el.price * action.payload.count,
              count: action.payload.count
            }
          : el
      );
      state.orderAmount = state.cart
        .map((el) => el.priceAmount)
        .reduce((acc, cur) => acc + cur, 0);
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((el) => el.id !== action.payload.id);
      state.orderAmount = state.cart
        .map((el) => el.priceAmount)
        .reduce((acc, cur) => acc + cur, 0);
    }
  }
});

export default orderSlice;
export const { addCart, deleteCart, updateCart } = orderSlice.actions;
