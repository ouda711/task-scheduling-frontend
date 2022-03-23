import { UsersService } from '../local/UsersService';
import { AxiosService } from './base/AxiosService';
require('dotenv').config();

export const AxiosUsersService = {
  login(user) {
    return AxiosService.post('http://127.0.0.1:4000/api/v1/users/login', user);
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