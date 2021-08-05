import { combineReducers } from '@reduxjs/toolkit';
import position from './position';

const rootReducer = combineReducers({
  position: position.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
