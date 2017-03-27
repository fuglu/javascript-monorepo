import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Link from '@org/react-link';
import Footer from './';

storiesOf('Footer', module)
  .add('containing some links', () => (
    <Footer>
      <div>
        <Link href={'https://github.com/fuglu'}>github</Link>
      </div>
      <div>
        <Link href={'https://twitter.com/fuglu'}>twitter</Link>
      </div>
    </Footer>
  ));
