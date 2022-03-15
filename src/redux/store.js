import { configureStore } from '@reduxjs/toolkit';
import infoDataReducer from './reducers/infoDataReducer';

export const store = configureStore({
  reducer: {
    infoData: infoDataReducer,
  },
});