import React from 'react';

const Avatar = props => (
  <img src={props.src} alt={props.alt} />
);

Avatar.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string,
};

Avatar.defaultProps = {
  alt: '',
};

export default Avatar;
