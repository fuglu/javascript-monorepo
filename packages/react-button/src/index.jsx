import React from 'react';

const Button = props => (
  <button onClick={props.onClick}>{props.children}</button>
);

Button.propTypes = {
  onClick: React.PropTypes.func,
  children: React.PropTypes.node,
};

Button.defaultProps = {
  onClick: () => {},
  children: null,
};

export default Button;
