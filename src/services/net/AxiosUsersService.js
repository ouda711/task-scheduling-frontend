import { UsersService } from '../local/UsersService';
import { AxiosService } from './base/AxiosService';
require('dotenv').config();

export const AxiosUsersService = {
  login(user) {
    return AxiosService.post(`${process.env.REACT_APP_SERVER_URL}/users/login`, user);
  },

  logout() {
    if (typeof window !== "undefined")
      UsersService.clearSession();
  },

  create(user) {
    return AxiosService.post('/users/register', user);
  },

  fetchAll() {

  },
}