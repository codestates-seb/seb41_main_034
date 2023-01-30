import { createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../api/customAxios';

const accessToken = localStorage.accessToken;

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
  state.cart = JSON.parse(localStorage.cart);

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
const patchAPI = async (cart, body) => {
  try {
    const res = await authAPI.get('cart');
    const cartId = res.data.data.filter(
      (el) => el.productId === cart.productId
    )[0].id;
    try {
      await authAPI.patch(`/cart/${cartId}`, body);
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};
const deleteAPI = async (cart) => {
  try {
    const res = await authAPI.get('cart');
    const cartId = res.data.data.filter(
      (el) => el.productId === cart.productId
    )[0].id;
    try {
      await authAPI.delete(`/cart/${cartId}`);
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

const addCartState = (cart, data) => {
  const body = JSON.stringify({
    productId: data.productId,
    quantity: data.quantity
  });
  accessToken !== undefined && postAPI(body);

  localStorage.cart = JSON.stringify([
    ...cart,
    {
      productId: data.productId,
      imageUrl: data.imageUrl,
      productName: data.productName,
      price: data.price,
      quantity: data.quantity,
      check: true
    }
  ]);
};
const updataCartState = (cart, data) => {
  const body = JSON.stringify({
    quantity: data.quantity
  });
  accessToken !== undefined && patchAPI(data, body);

  localStorage.cart = JSON.stringify(
    cart.map((el) =>
      el.productId === data.productId ? { ...el, quantity: data.quantity } : el
    )
  );
};
const deleteCartState = (cart, data) => {
  accessToken !== undefined && deleteAPI(data);

  localStorage.cart = JSON.stringify(
    cart.filter((el) => el.productId !== data.productId)
  );
};

const userCart = localStorage.cart
  ? JSON.parse(localStorage.cart).map((el) => ({ ...el, check: true }))
  : [];

const initialState = {
  cart: userCart,
  cartAmount: cartAmountState(userCart),
  orderAmount: orderAmountState(userCart)
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
    deleteCheckCart: (state, action) => {
      accessToken !== undefined &&
        action.payload.product.map((el) => deleteAPI(el));

      localStorage.cart = JSON.stringify(
        state.cart.filter((el) => el.check !== true)
      );

      cartCheck(state);
    },
    myCart: (state, action) => {
      localStorage.removeItem('shop');

      state.cart = action.payload.cart;
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
  deleteCheckCart,
  myCart
} = orderSlice.actions;
