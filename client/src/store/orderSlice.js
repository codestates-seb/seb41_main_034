import { createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../api/customAxios';

const accessToken = localStorage.accessToken;

const logoutCart = (cart) => {
  localStorage.cart = JSON.stringify(cart);
};

const cartAmount = (cart) => {
  return cart
    .map((el) => el.price * el.quantity)
    .reduce((acc, cur) => acc + cur, 0);
};

const orderAmount = (cart) => {
  return cart
    .filter((el) => el.check === true)
    .map((el) => el.price * el.quantity)
    .reduce((acc, cur) => acc + cur, 0);
};

const postAPI = async (body) => {
  try {
    await authAPI.post(`/cart`, body);
  } catch (err) {
    console.log(err);
  }
};

const patchAPI = async (cartId, body) => {
  try {
    await authAPI.patch(`/cart/${cartId}`, body);
  } catch (err) {
    console.log(err);
  }
};

const deleteAPI = async (cartId) => {
  try {
    await authAPI.delete(`/cart/${cartId}`);
  } catch (err) {
    console.log(err);
  }
};

const addCartState = (cart, data) => {
  const body = JSON.stringify({
    productId: data.productId,
    quantity: data.quantity
  });

  cart.push({
    productId: data.productId,
    imageUrl: data.imageUrl,
    productName: data.productName,
    price: data.price,
    quantity: data.quantity,
    check: true
  });

  accessToken && postAPI(body);
};

const updataCartState = (cart, data) => {
  const body = JSON.stringify({
    quantity: data.quantity
  });

  cart.map(
    (el) => el.productId === data.productId && (el.quantity = data.quantity)
  );

  accessToken &&
    cart.map((el) => el.productId === data.productId && patchAPI(el.id, body));
};

const localCart = localStorage.cart
  ? JSON.parse(localStorage.cart).map((el) => ({ ...el, check: true }))
  : [];

const initialState = {
  cart: localCart,
  cartAmount: cartAmount(localCart),
  orderAmount: orderAmount(localCart)
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart.filter((el) => el.productId === action.payload.productId)[0]
        ? updataCartState(state.cart, action.payload)
        : addCartState(state.cart, action.payload);

      state.cartAmount = cartAmount(state.cart);
      state.orderAmount = orderAmount(state.cart);

      logoutCart(state.cart);
    },
    updateCart: (state, action) => {
      updataCartState(state.cart, action.payload);

      state.cartAmount = cartAmount(state.cart);
      state.orderAmount = orderAmount(state.cart);

      logoutCart(state.cart);
    },
    deleteCart: (state, action) => {
      accessToken &&
        state.cart.map(
          (el) => el.productId === action.payload.productId && deleteAPI(el.id)
        );

      state.cart = state.cart.filter(
        (el) => el.productId !== action.payload.productId
      );

      state.cartAmount = cartAmount(state.cart);
      state.orderAmount = orderAmount(state.cart);

      logoutCart(state.cart);
    },
    checkCart: (state, action) => {
      state.cart.map(
        (el) =>
          el.productId === action.payload.productId &&
          (el.check = action.payload.check)
      );

      state.cartAmount = cartAmount(state.cart);
      state.orderAmount = orderAmount(state.cart);

      logoutCart(state.cart);
    },
    allCheckCart: (state) => {
      state.cart.filter((el) => el.check === false)[0] === undefined
        ? state.cart.map((el) => (el.check = false))
        : state.cart.map((el) => (el.check = true));

      state.cartAmount = cartAmount(state.cart);
      state.orderAmount = orderAmount(state.cart);

      logoutCart(state.cart);
    },
    deleteCheckCart: (state) => {
      accessToken &&
        state.cart
          .filter((el) => el.check === true)
          .map((el) => deleteAPI(el.id));

      state.cart = state.cart.filter((el) => el.check !== true);

      state.cartAmount = cartAmount(state.cart);
      state.orderAmount = orderAmount(state.cart);

      logoutCart(state.cart);
    }
  }
});

export default orderSlice;
export const {
  addCart,
  deleteCart,
  updateCart,
  checkCart,
  allCheckCart,
  deleteCheckCart
} = orderSlice.actions;
