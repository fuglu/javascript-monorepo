import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Profile from './';

storiesOf('Profile', module)
  .add('default', () => (
    <Profile
      name={'Ben'}
      imageUrl={'http://www.gravatar.com/avatar/296b16853ab831aacc31b2a2c3883168'}
      onLogout={action('onLogout')}
    />
  ));
