import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import infoDataReducer from './reducers/infoDataReducer';

export const store = configureStore({
  reducer: {
    infoData: infoDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
