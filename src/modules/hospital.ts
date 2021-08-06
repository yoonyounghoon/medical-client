import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hospitalList: [],
};

const hospital = createSlice({
  name: 'hospitalReducer',
  initialState,
  reducers: {
    getHospitalList: (state, action) => ({
      ...state,
      hospitalList: action.payload,
    }),
  },
});

export default hospital;
