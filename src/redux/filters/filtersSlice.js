import { createSlice } from '@reduxjs/toolkit';

const initialFilters = {
  // brand: '',
  // rentalPrice: 0,
  // minMileage: 0,
  // maxMileage: 0,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFilters,
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setPrice: (state, action) => {
      state.rentalPrice = action.payload;
    },
    setMileageFrom: (state, action) => {
      state.minMileage = action.payload;
    },
    setMileageTo: (state, action) => {
      state.maxMileage = action.payload;
    },
    resetFilters: () => initialFilters,
  },
});

export const {
  setBrand,
  setPrice,
  setMileageFrom,
  setMileageTo,
  resetFilters,
} = filtersSlice.actions;
export default filtersSlice.reducer;
