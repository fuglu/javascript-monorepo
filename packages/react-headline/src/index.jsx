import React from 'react';

const Headline = ({ children }) => (
  <h1>{children}</h1>
);

Headline.propTypes = {
  children: React.PropTypes.node,
};

Headline.defaultProps = {
  children: null,
};

export default Headline;
