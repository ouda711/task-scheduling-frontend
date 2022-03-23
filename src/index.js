import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import getStore from './store';
import reportWebVitals from './reportWebVitals';
import { UsersService } from './services/local/UsersService';
import { AxiosService } from './services/net/base/AxiosService';
import { AuthAction } from './actions/types';
import { Provider } from 'react-redux';

const store = getStore();

const user = UsersService.getUser();
if(user) {
  AxiosService.setUser(user);
  store.dispatch({type: AuthAction.LOGIN_SUCCESS, user});
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
