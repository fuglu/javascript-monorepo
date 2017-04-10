import todos, { actions, types } from './';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const todo = 'foo';
    const expectedAction = {
      type: types.ADD_TODO,
      todo,
    };
    expect(actions.addTodo(todo)).toEqual(expectedAction);
  });
});

describe('reducer', () => {
  it('should add a todo', () => {
    const todo = 'a todo';
    const state = todos(undefined, {});
    const newState = todos(state, actions.addTodo(todo));
    const expectedState = [todo];
    expect(newState).toEqual(expectedState);
  });
});
