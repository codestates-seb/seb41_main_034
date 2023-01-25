import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: []
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
            count: action.payload.count
          })
        : (state.cart = state.cart.map((el) =>
            el.id === action.payload.id ? { ...el, count: (el.count += 1) } : el
          ));
    },
    updateCart: (state, action) => {
      state.cart = state.cart.map((el) =>
        el.id === action.payload.id
          ? { ...el, count: action.payload.count }
          : el
      );
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((el) => el.id !== action.payload.id);
    }
  }
});

export default orderSlice;
export const { addCart, deleteCart, updateCart } = orderSlice.actions;
