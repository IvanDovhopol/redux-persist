import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { reducer } from './clicksSlice';

export const store = configureStore({
  reducer: {
    clicks: reducer,
  },
});

export const persistor = persistStore(store);
