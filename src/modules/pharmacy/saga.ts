import { PayloadAction } from '@reduxjs/toolkit';
import { getPharmacyList, PositionData } from 'lib/api/pharmacy';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getPharmacy, getPharmacySuccess } from './reducer';

// saga 코드
function* getPharmacyDataSaga(action: PayloadAction<PositionData>): Generator {
  const { xPos, yPos } = action.payload;

  try {
    const response = yield call(getPharmacyList, { xPos, yPos });

    yield put({
      type: getPharmacySuccess.type,
      payload: response,
    });
  } catch (e) {
    console.log(e);
  }
}

export default function* pharmacySaga() {
  yield takeEvery(getPharmacy.type, getPharmacyDataSaga);
}
