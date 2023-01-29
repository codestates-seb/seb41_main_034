import { createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../api/customAxios';

const initialState = {
  accessToken: localStorage.accessToken
};

const checkToken = async () => {
  try {
    await authAPI.get('/user/login-status');
  } catch (err) {
    err.response.data.error.status === 401 && localStorage.clear();
    window.location.reload();
  }
};

const checkCart = async () => {
  try {
    const cart = await authAPI.get('/cart');
    localStorage.cart = JSON.stringify(cart.data.data);
  } catch (err) {
    console.log(err);
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userToken: () => {
      checkToken();
    },
    userCart: () => {
      checkCart();
    }
  }
});

export default userSlice;
export const { userToken, userCart } = userSlice.actions;
