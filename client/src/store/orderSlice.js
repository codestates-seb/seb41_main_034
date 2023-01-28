import { createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../api/customAxios';

const accessToken = localStorage.accessToken;

const logoutCart = (cart) => {
  localStorage.cart = JSON.stringify(cart);
};

const orderAmount = (cart) => {
  return cart
    .filter((el) => el.check === true)
    .map((el) => el.price * el.count)
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
    quantity: data.count
  });

  cart.push({
    id: data.id,
    productId: data.productId,
    img: data.img,
    name: data.name,
    price: data.price,
    count: data.count,
    check: true
  });

  accessToken && postAPI(body);
};

const updataCartState = (cart, data) => {
  const body = JSON.stringify({
    quantity: data.count
  });

  cart[data.id - 1].count = data.count;

  accessToken && patchAPI(data.id, body);
};

const initialState = {
  cart: JSON.parse(localStorage.cart || `[]`),
  orderAmount: orderAmount(JSON.parse(localStorage.cart || `[]`))
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart[action.payload.id - 1]
        ? updataCartState(state.cart, action.payload)
        : addCartState(state.cart, action.payload);

      state.orderAmount = orderAmount(state.cart);

      accessToken === undefined && logoutCart(state.cart);
    },
    updateCart: (state, action) => {
      updataCartState(state.cart, action.payload);

      state.orderAmount = orderAmount(state.cart);

      accessToken === undefined && logoutCart(state.cart);
    },
    deleteCart: (state, action) => {
      accessToken && deleteAPI(action.payload.id);

      state.cart.splice(action.payload.id - 1, 1);

      state.orderAmount = orderAmount(state.cart);

      accessToken === undefined && logoutCart(state.cart);
    },
    checkCart: (state, action) => {
      state.cart[action.payload.id - 1].check = action.payload.check;

      state.orderAmount = orderAmount(state.cart);

      accessToken === undefined && logoutCart(state.cart);
    },
    allCheckCart: (state) => {
      state.cart.filter((el) => el.check === false)[0] === undefined
        ? state.cart.map((el) => (el.check = false))
        : state.cart.map((el) => (el.check = true));

      state.orderAmount = orderAmount(state.cart);

      accessToken === undefined && logoutCart(state.cart);
    },
    deleteCheckCart: (state) => {
      accessToken &&
        state.cart
          .filter((el) => el.check === true)
          .map((el) => deleteAPI(el.id));

      state.cart = state.cart.filter((el) => el.check !== true);

      state.orderAmount = orderAmount(state.cart);

      accessToken === undefined && logoutCart(state.cart);
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
