import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  xPos: 0,
  yPos: 0,
};

const position = createSlice({
  name: 'positionReducer',
  initialState,
  reducers: {
    setPosition: (state, action) => ({
      ...state,
      xPos: action.payload.xPos,
      yPos: action.payload.yPos,
    }),
  },
});

export const { setPosition } = position.actions;

export default position;
