import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: [false, false, false, false],
};

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    clicked: (state, action) => {
      return {
        ...state,
        status: state.status.map((ele, i) =>
          i === action.payload ? !state.status[i] : state.status[i],
        ),
      };
    },
  },
});

export const { clicked } = likeSlice.actions;
export default likeSlice.reducer;
