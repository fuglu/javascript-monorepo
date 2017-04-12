import reducer  from './';
import constants from './constants';
import actions from './actions';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const todo = 'foo';
    const expectedAction = {
      type: constants.ADD_TODO,
      todo,
    };
    expect(actions.addTodo(todo)).toEqual(expectedAction);
  });
});

describe('reducer', () => {
  it('should add a todo', () => {
    const todo = 'a todo';
    const state = reducer(undefined, {});
    const newState = reducer(state, actions.addTodo(todo));
    const expectedState = [todo];
    expect(newState).toEqual(expectedState);
  });
});
