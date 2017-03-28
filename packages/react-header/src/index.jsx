import React from 'react';

const Header = props => (
  <div>{props.children}</div>
);

Header.propTypes = {
  children: React.PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
