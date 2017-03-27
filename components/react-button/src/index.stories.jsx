import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './';

storiesOf('Button', module)
  .add('default', () => (
    <Button />
  ))
  .add('with text and onClick', () => (
    <Button onClick={action('onClick')}>Click here</Button>
  ));
