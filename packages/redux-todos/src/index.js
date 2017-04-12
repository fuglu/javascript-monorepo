import { ADD_TODO } from './constants';
export { default as actions } from './actions';
export { default as constants } from './constants';
export { default as connectTodos } from './Connector';
export { default as PropTypes } from './PropTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    default:
      return state;
  }
};

