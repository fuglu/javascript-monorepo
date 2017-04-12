import { connect } from 'react-redux';
import actions from './actions';

const mapStateToProps = state => ({
  todos: state.todos,
});
export default Component => connect(mapStateToProps, actions)(Component);
