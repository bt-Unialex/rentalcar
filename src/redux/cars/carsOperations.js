import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCars } from '../../api/api.js';

export const getCars = createAsyncThunk(
  'cars/getAll',
  async (params = {}, thunkAPI) => {
    const { page, limit } = params;
    const filters = thunkAPI.getState().filters;

    try {
      return await fetchCars(page, limit, filters);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
