import { createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../api/customAxios';

const accessToken = localStorage.accessToken;

const initialState = {
  cart: JSON.parse(localStorage.cart || `[]`),
  orderAmount: 0
};

console.log(initialState.cart);
console.log(initialState.orderAmount);

const logoutCart = (cart) => {
  localStorage.cart = JSON.stringify(cart);
};

const orderAmount = (cart) => {
  return cart
    .filter((el) => el.check === true)
    .map((el) => el.priceAmount)
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
    id: cart.length + 1,
    productId: data.productId,
    img: data.img,
    name: data.name,
    price: data.price,
    count: data.count,
    priceAmount: data.price,
    check: true
  });

  accessToken && postAPI(body);
};

const updataCartState = (cart, data) => {
  const body = JSON.stringify({
    quantity: data.count
  });

  cart = cart.map((el) =>
    el.Id === data.Id
      ? {
          ...el,
          priceAmount: el.price * data.count,
          count: data.count
        }
      : el
  );

  accessToken && patchAPI(data.id, body);
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart.filter((el) => el.Id === action.payload.Id)[0] === undefined
        ? addCartState(state.cart, action.payload)
        : updataCartState(state.cart, action.payload);

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

      state.cart = state.cart.filter((el) => el.Id !== action.payload.Id);

      state.orderAmount = orderAmount(state.cart);

      accessToken === undefined && logoutCart(state.cart);
    },
    checkCart: (state, action) => {
      state.cart = state.cart.map((el) =>
        el.id === action.payload.id
          ? { ...el, check: action.payload.check }
          : el
      );

      state.orderAmount = orderAmount(state.cart);

      accessToken === undefined && logoutCart(state.cart);
    },
    allCheckCart: (state) => {
      state.cart.filter((el) => el.check === false)[0] === undefined
        ? (state.cart = state.cart.map((el) => {
            return { ...el, check: false };
          }))
        : (state.cart = state.cart.map((el) => {
            return { ...el, check: true };
          }));

      state.orderAmount = orderAmount(state.cart);

      accessToken === undefined && logoutCart(state.cart);
    },
    deleteCheckCart: (state) => {
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
