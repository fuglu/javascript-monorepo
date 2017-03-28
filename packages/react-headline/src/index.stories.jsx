import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Headline from './';

storiesOf('Headline', module)
  .add('with text', () => (
    <Headline>Awesome headline</Headline>
  ));
