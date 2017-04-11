import { connect } from 'react-redux';
import { actions } from './';

const createMapStateToProps = stateSlice =>
  state => ({
    todos: state[stateSlice],
  });

export default stateSlice =>
  Component => connect(createMapStateToProps(stateSlice), actions)(Component);