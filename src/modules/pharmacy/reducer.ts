import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PositionData } from 'lib/api/pharmacy';
import { PharmacyInfo } from 'types';

// toolkit에서 제공하는 방식대로 reducer도 써주되 saga관련해서 Type을 조금 지정은 해야한다.
// 만약 reducer에 들어가는 어떤 Payload가 아래의 형태라면 export 해서 saga 쪽에서 쓸 수 있게

// 초기 상태 타입
export type pharmacyState = {
  pharmacyList: [] | PharmacyInfo[];
};

const initialState: pharmacyState = {
  pharmacyList: [],
};

const pharmacy = createSlice({
  name: 'pharmacyReducer',
  initialState,
  reducers: {
    getPharmacy: (
      state: pharmacyState,
      action: PayloadAction<PositionData>,
    ) => ({
      ...state,
    }),
    getPharmacySuccess: (
      state: pharmacyState,
      action: PayloadAction<PharmacyInfo[]>,
    ) => ({
      pharmacyList: action.payload,
    }),
    getPharmacyFailure: (state: pharmacyState, action) => ({
      ...state,
    }),
  },
});

// 리듀서 && 액션 리턴
const { actions, reducer } = pharmacy;
export const { getPharmacy, getPharmacySuccess } = actions;
export default reducer;
