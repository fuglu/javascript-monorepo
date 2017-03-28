import React from 'react';

const Footer = props => (
  <div>{props.children}</div>
);

Footer.propTypes = {
  children: React.PropTypes.node,
};

Footer.defaultProps = {
  children: null,
};

export default Footer;
