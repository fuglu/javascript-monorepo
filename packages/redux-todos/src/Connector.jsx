import { connect } from 'react-redux';
import actions from './actions';

const createMapStateToProps = stateSlice =>
  state => ({
    todos: state[stateSlice],
  });

export default stateSlice =>
  Component => connect(createMapStateToProps(stateSlice), actions)(Component);