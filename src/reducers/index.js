import {combineReducers} from 'redux';
import {AuthReducer} from './auth.reducer';
import {UiReducer} from './ui.reducer';
import {TaskReducer} from './tasks.reducer';

export const rootReducer = combineReducers({
  TaskReducer,
  AuthReducer,
  UiReducer,
});