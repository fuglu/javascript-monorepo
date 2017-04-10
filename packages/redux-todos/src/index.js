export const ADD_TODO = 'ADD_TODO';

export const addTodo = todo => ({
  type: ADD_TODO,
  todo,
});

export const types = {
  ADD_TODO,
};

export const actions = {
  addTodo,
};

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    default:
      return state;
  }
};

