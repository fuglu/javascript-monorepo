import { connect } from 'react-redux';
import { actions } from './';

const mapStateToProps = state => ({
  todos: state.todos,
});
export default Component => connect(mapStateToProps, actions)(Component);
