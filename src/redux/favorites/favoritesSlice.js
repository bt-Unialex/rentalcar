import { createSlice } from '@reduxjs/toolkit';

const initialFavorites = { favorites: [] };

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialFavorites,
  reducers: {
    refrashFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    addFavorites: (state, action) => {
      state.favorites = [...new Set([...state.favorites, action.payload])];
    },
    removeFavorites: (state, action) => {
      state.favorites = state.favorites.filter(id => id !== action.payload);
    },
    resetFavorites: () => initialFavorites,
  },
});

export const {
  refrashFavorites,
  addFavorites,
  removeFavorites,
  resetFavorites,
} = favoritesSlice.actions;
export default favoritesSlice.reducer;
