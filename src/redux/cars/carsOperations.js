import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCars } from '../../api/api.js';

export const getCars = createAsyncThunk(
  'cars/getAll',
  async (params = {}, thunkAPI) => {
    const { page = 1, limit = 12 } = params;

    try {
      return await fetchCars(page, limit);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
