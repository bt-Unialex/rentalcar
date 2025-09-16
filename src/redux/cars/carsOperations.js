import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const getCars = createAsyncThunk(
  'cars/getAll',
  async (params = {}, thunkAPI) => {
    const { page = 1, limit = 12 } = params;

    const axiosParams = { page, limit };
    try {
      const response = await axios.get('/cars', { params: axiosParams });

      const paginationParams = calculatePaginationData(
        Number(response.data.totalCars),
        Number(response.data.page),
        Number(response.data.totalPages),
      );

      return { cars: response.data.cars, paginationParams };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

function calculatePaginationData(count, page, totalPages) {
  const hasNextPage = totalPages > page;
  const hasPreviousPage = page !== 1;

  return {
    totalCars: count,
    page,
    totalPages,
    hasNextPage,
    hasPreviousPage,
  };
}
