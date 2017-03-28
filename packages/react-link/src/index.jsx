import React from 'react';

const Link = props => (
  <a href={props.href}>{props.children}</a>
);

Link.propTypes = {
  href: React.PropTypes.string,
  children: React.PropTypes.node,
};

Link.defaultProps = {
  href: '',
  children: null,
};

export default Link;
