import { combineReducers } from '@reduxjs/toolkit';
import position from './position';
import createSagaMiddleware from 'redux-saga';

const rootReducer = combineReducers({
  position: position.reducer,
});
export default rootReducer;

export const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof rootReducer>;
