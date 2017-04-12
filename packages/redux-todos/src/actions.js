import { ADD_TODO } from './constants';

export const addTodo = todo => ({
  type: ADD_TODO,
  todo,
});

export default {
  addTodo,
};