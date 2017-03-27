import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Footer from './';

storiesOf('Footer', module)
  .add('containing some links', () => (
    <Footer>
      <div>
        <a href={'https://github.com/fuglu'}>github</a>
      </div>
      <div>
        <a href={'https://twitter.com/fuglu'}>twitter</a>
      </div>
    </Footer>
  ));
