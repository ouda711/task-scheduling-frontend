import {TaskAction} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  tasks_data: {
    page_meta: {},
    tasks: []
  },
  selected_task: {},
  task_created: false
};
export const TaskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TaskAction.FETCH_TASKS:
      return {...state, loading: true};
    case TaskAction.FETCH_TASKS_SUCCESS:
      return {...state, loading: false, tasks_data: action.tasks_data};
    case TaskAction.FETCH_TASK:
      return {...state, loading: true};
    case TaskAction.FETCH_TASK_SUCCESS:
      return {...state, loading: false, selected_task: action.task};
    default:
      return state;
  }
};