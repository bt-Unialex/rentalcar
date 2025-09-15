import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice.js';

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});

export default store;
