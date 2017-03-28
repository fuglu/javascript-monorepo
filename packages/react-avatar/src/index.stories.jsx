import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Avatar from './';

storiesOf('Avatar', module)
  .add('default', () => (
    <Avatar src={'https://unsplash.it/150/150'} />
  ));
