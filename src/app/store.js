import { configureStore } from '@reduxjs/toolkit';
import topBar from 'features/topBar/topBar';

export const store = configureStore({
  reducer: {
    topBar: topBar,
  },
});
