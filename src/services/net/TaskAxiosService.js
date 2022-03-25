import {AxiosService} from './base/AxiosService';

export const TaskAxiosService = {
  fetchPage(query = {location: '/tasks', page: 1, page_size: 5}) {
    return AxiosService.fetchPage(query.location, query);
  },

  getById(id) {
    if (typeof id !== "string") {
      throw new Error(
        "id must be a string"
      );
    }
    return AxiosService.get(`http://127.0.0.1:4000/api/v1/tasks/by_id/${id}`);
  },
}