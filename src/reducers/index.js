import {combineReducers} from 'redux';
import {AuthReducer} from './auth.reducer';
import {UiReducer} from './ui.reducer';

export const rootReducer = combineReducers({
  AuthReducer,
  UiReducer
});