import { PayloadAction } from '@reduxjs/toolkit';
import { getHospitalListAPI, locationCode } from 'lib/api/hospital';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getHospitalList, getHospitalListSuccess } from './reducer';

// saga 코드
function* getHospitalDataSaga(action: PayloadAction<locationCode>): Generator {
  const { siDoCd, siGunGuCd } = action.payload;

  try {
    const response = yield call(getHospitalListAPI, { siDoCd, siGunGuCd });
    console.log(response);
    yield put({
      type: getHospitalListSuccess.type,
      payload: response,
    });
  } catch (e) {
    console.log(e);
  }
}

export default function* hospitalSaga() {
  yield takeEvery(getHospitalList.type, getHospitalDataSaga);
}
