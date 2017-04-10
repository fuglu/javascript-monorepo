import PropTypes from 'prop-types';

export default {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  addTodo: PropTypes.func.isRequired,
};
