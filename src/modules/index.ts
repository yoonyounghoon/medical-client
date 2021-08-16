import { combineReducers } from '@reduxjs/toolkit';
import position from './position/position';
import { all } from '@redux-saga/core/effects';
import { pharmacy, pharmacySaga } from './pharmacy';
import { hospital, hospitalSaga } from './hospital';

// 루트 리듀서
export const rootReducer = combineReducers({
  position: position.reducer,
  hospital,
  pharmacy,
});

// 루트 사가
export function* rootSaga() {
  yield all([hospitalSaga(), pharmacySaga()]);
}

export type RootState = ReturnType<typeof rootReducer>;
