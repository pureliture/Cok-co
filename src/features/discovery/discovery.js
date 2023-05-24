import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFirstTime: true,
};

const discoverySlice = createSlice({
  name: 'discovery',
  initialState,
  reducers: {
    setIsFirstTime: (state) => {
      return { ...state, isFirstTime: false };
    },
  },
});

export const { setIsFirstTime } = discoverySlice.actions;
export default discoverySlice.reducer;
