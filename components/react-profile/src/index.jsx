import React from 'react';
import Avatar from '@org/react-avatar';
import Button from '@org/react-button';

const Profile = props => (
  <div>
    <Avatar src={props.imageUrl} />
    <p>{props.name}</p>
    <Button onClick={props.onLogout}>Logout!</Button>
  </div>
);
Profile.propTypes = {
  name: React.PropTypes.string.isRequired,
  imageUrl: React.PropTypes.string.isRequired,
  onLogout: React.PropTypes.func,
};
Profile.defaultProps = {
  onLogout: null,
};

export default Profile;
