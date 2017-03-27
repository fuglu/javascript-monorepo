import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Link from './';

storiesOf('Link', module)
  .add('github', () => (
    <Link href={'https://github.com/fuglu'}>github</Link>
  ))
  .add('twitter', () => (
    <Link href={'https://twitter.com/fuglu'}>twitter</Link>
  ));
