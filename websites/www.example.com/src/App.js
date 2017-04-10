import React, { Component } from 'react';
import { connectTodos, PropTypes as TodosPropTypes } from '@org/redux-todos';
import './App.css';

class App extends Component {
  static propTypes = {
    ...TodosPropTypes,
  }

  state = {
    counter: 0,
  }

  addTodo = () => {
    this.setState({
      counter: this.state.counter + 1,
    }, () => {
      this.props.addTodo('todo ' + this.state.counter);
    });
  }

  render() {
    return (
      <div>
        {this.props.todos.map(todo => <p>{todo}</p>)}
        <button onClick={this.addTodo}>Add todo</button>
      </div>
    );
  }
}

export default connectTodos(App);
