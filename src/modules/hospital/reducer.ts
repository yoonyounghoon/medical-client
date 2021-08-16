import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { locationCode } from 'lib/api/hospital';
import { HospitalInfo } from 'types';

export type hospitalState = {
  hospitalList: [] | HospitalInfo[];
};

const initialState: hospitalState = {
  hospitalList: [],
};

const hospital = createSlice({
  name: 'hospitalReducer',
  initialState,
  reducers: {
    getHospitalList: (state, action: PayloadAction<locationCode>) => ({
      ...state,
    }),
    getHospitalListSuccess: (state, action: PayloadAction<HospitalInfo[]>) => ({
      ...state,
      hospitalList: action.payload,
    }),
  },
});

export const { reducer, actions } = hospital;
export const { getHospitalList, getHospitalListSuccess } = actions;
export default reducer;
