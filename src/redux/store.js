import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice.js';
import filtersReducer from './filters/filtersSlice.js';
import favoritesReducer from './favorites/favoritesSlice.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistedFavoritesReducer = persistReducer(
  {
    key: 'favorites',
    storage,
    whitelist: ['favorites'],
  },
  favoritesReducer,
);

const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favorites: persistedFavoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
