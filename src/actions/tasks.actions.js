import {UiActionCreator} from './ui.actions';
import {TaskAxiosService} from '../services/net/TaskAxiosService';
import {TaskAction} from './types';
// import NProgress from 'nprogress';

const BASE_URL = 'http://127.0.0.1:4000/api/v1';
const BASE_URL_TASKS = `${BASE_URL}/tasks`;

const fetchedTasks = (page_meta, products) => {
  return {
    type: TaskAction.FETCH_TASKS_SUCCESS,
    products_data: {page_meta, products}
  }
};

const fetchedTask = (product) => {
  return {
    type: TaskAction.FETCH_TASK_SUCCESS,
    product
  };
};

const fetchTasks = function (query) {
  console.trace('TaskActionCreator::fetchTasks');
  return (dispatch) => {
    console.trace('TaskActionCreator::fetchTasks_Async');
    dispatch(UiActionCreator.info('Loading tasks'));
    TaskAxiosService.fetchPage(query).then(res => {
      dispatch(UiActionCreator.successToast('Fetched products'));
      if (res.data.success)
        dispatch(TaskActionCreator.fetchedTasks(res.data.page_meta, res.data.tasks_data));
      else
        dispatch(UiActionCreator.showErrorAlert(res.data.full_messages ? res.data.full_messages : 'An error occurred'));
    }).catch(err => {
      console.error(err);
    });
  }
};

export function fetchTask(id) {
  console.trace('TaskActionCreator::fetchTask');
  return (dispatch) => {
    console.trace('TaskActionCreator::fetchTask_Async');
    //dispatch(UiActionCreator.info('Loading products'));
    TaskAxiosService.getById(id).then(res => {
      if (res.data.success) {
        //       dispatch(UiActionCreator.clearToast());
        dispatch(TaskActionCreator.fetchedTask(res.data));
      } else
        dispatch(UiActionCreator.showErrorAlert(res.data.full_messages ? res.data.full_messages : 'An error occurred'));
    }).catch(err => {
      console.error(err);
    });
  }
}

export const TaskActionCreator = {
  fetchTasks,
  fetchedTasks,
  fetchedTask
}
