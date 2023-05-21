import { configureStore } from '@reduxjs/toolkit';
import tasteRoom from 'features/tasteRoom/tasteRoom';
import topBar from 'features/topBar/topBar';

export const store = configureStore({
  reducer: {
    topBar: topBar,
    tasteRoom: tasteRoom,
  },
});
