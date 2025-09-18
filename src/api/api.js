import axios from 'axios';
axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export async function fetchCars(page = 1, limit = 12) {
  const axiosParams = { page, limit };
  const response = await axios.get('/cars', { params: axiosParams });

  const paginationParams = calculatePaginationData(
    Number(response.data.totalCars),
    Number(response.data.page),
    Number(response.data.totalPages),
  );

  return { cars: response.data.cars, paginationParams };
}

export async function fetchCarById(id) {
  const response = await axios.get(`/cars/${id}`);
  return response.data;
}

export async function fetchBrands() {
  const response = await axios.get('/brands');
  return response.data;
}

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
