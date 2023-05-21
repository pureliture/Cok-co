import { configureStore } from '@reduxjs/toolkit';
import tasteRegion from 'features/tasteRegion/tasteRegion';
import tasteRoom from 'features/tasteRoom/tasteRoom';
import topBar from 'features/topBar/topBar';

export const store = configureStore({
  reducer: {
    topBar: topBar,
    tasteRoom: tasteRoom,
    tasteRegion: tasteRegion,
  },
});
