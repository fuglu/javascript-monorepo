import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Component from './';

storiesOf('Component', module)
  .add('default', () => (
    <Component />
  ));
