import { createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../api/customAxios';

const accessToken = localStorage.accessToken;
const logoutCart = !localStorage.cart
  ? []
  : localStorage.cart === '[]'
  ? []
  : JSON.parse(localStorage.cart).map((el) => ({ ...el, check: true }));

let loginCart = [];
const loginCartState = async () => {
  try {
    const res = await authAPI.get('/cart');
    loginCart = res.data.data.map((el) => ({ ...el, check: true }));
  } catch (err) {
    console.log(err);
  }
};
accessToken !== undefined && loginCartState();

const cartAmountState = (cart) => {
  return cart
    .map((el) => el.price * el.quantity)
    .reduce((acc, cur) => acc + cur, 0);
};
const orderAmountState = (cart) => {
  return cart
    .filter((el) => el.check === true)
    .map((el) => el.price * el.quantity)
    .reduce((acc, cur) => acc + cur, 0);
};

const cartCheck = (state) => {
  state.cart =
    accessToken === undefined
      ? JSON.parse(localStorage.cart)
      : loginCartState();

  state.cartAmount = cartAmountState(state.cart);
  state.orderAmount = orderAmountState(state.cart);
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

  accessToken === undefined
    ? (localStorage.cart = JSON.stringify([
        ...cart,
        {
          productId: data.productId,
          imageUrl: data.imageUrl,
          productName: data.productName,
          price: data.price,
          quantity: data.quantity,
          check: true
        }
      ]))
    : postAPI(body);
};
const updataCartState = (cart, data) => {
  const body = JSON.stringify({
    quantity: data.quantity
  });

  accessToken === undefined
    ? (localStorage.cart = JSON.stringify(
        cart.map((el) =>
          el.productId === data.productId
            ? { ...el, quantity: data.quantity }
            : el
        )
      ))
    : loginCart.map(
        (el) => el.productId === data.productId && patchAPI(el.id, body)
      );
};
const deleteCartState = (cart, data) => {
  accessToken === undefined
    ? (localStorage.cart = JSON.stringify(
        cart.filter((el) => el.productId !== data.productId)
      ))
    : loginCart.map(
        (el) => el.productId === data.productId && deleteAPI(el.id)
      );
};

const initialState = {
  cart: accessToken === undefined ? logoutCart : loginCart,
  cartAmount:
    accessToken === undefined
      ? cartAmountState(logoutCart)
      : cartAmountState(loginCart),
  orderAmount:
    accessToken === undefined
      ? orderAmountState(logoutCart)
      : orderAmountState(loginCart)
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart.filter((el) => el.productId === action.payload.productId)[0]
        ? updataCartState(state.cart, action.payload)
        : addCartState(state.cart, action.payload);

      cartCheck(state);
    },
    updateCart: (state, action) => {
      updataCartState(state.cart, action.payload);

      cartCheck(state);
    },
    deleteCart: (state, action) => {
      deleteCartState(state.cart, action.payload);

      cartCheck(state);
    },
    checkCart: (state, action) => {
      state.cart = state.cart.map((el) =>
        el.productId === action.payload.productId
          ? { ...el, check: action.payload.check }
          : el
      );

      state.cartAmount = cartAmountState(state.cart);
      state.orderAmount = orderAmountState(state.cart);
    },
    allCheckCart: (state) => {
      state.cart.filter((el) => el.check === false)[0] === undefined
        ? state.cart.map((el) => (el.check = false))
        : state.cart.map((el) => (el.check = true));

      state.cartAmount = cartAmountState(state.cart);
      state.orderAmount = orderAmountState(state.cart);
    },
    deleteCheckCart: (state) => {
      accessToken === undefined
        ? (localStorage.cart = JSON.stringify(
            state.cart.filter((el) => el.check !== true)
          ))
        : state.cart
            .filter((el) => el.check === true)
            .map((el) => deleteAPI(el.id));

      cartCheck(state);
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
