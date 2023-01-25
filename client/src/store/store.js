import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import orderSlice from './orderSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    order: orderSlice.reducer
  }
});

export default store;
