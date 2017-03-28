import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Avatar from '@org/react-avatar';
import Button from '@org/react-button';
import Header from './';

storiesOf('Header', module)
  .add('with avatar and login button', () => (
    <Header>
      <Avatar src={'https://unsplash.it/150/150'} />
      <Button onClick={action('login')}>Login</Button>
    </Header>
  ));
