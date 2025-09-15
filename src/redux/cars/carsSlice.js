import { toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
import { getCars } from './carsOperations.js';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  toast.error(action.payload);
  state.error = action.payload;
};

const initialCars = {
  cars: [],
  paginationParams: {},
  isLoading: true,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: initialCars,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCars.pending, handlePending)
      .addCase(getCars.rejected, handleRejected)
      .addCase(getCars.fulfilled, (state, action) => {
        state.cars = [...state.cars, ...action.payload.cars];
        state.paginationParams = action.payload.paginationParams;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export default carsSlice.reducer;
