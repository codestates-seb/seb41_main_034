import { configureStore } from '@reduxjs/toolkit';
import orderSlice from './orderSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    order: orderSlice.reducer,
    user: userSlice.reducer
  }
});

export default store;
