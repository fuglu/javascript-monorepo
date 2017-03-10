import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Circle from './index';

storiesOf('Circle', module)
	.add('with some emoji', () => (
		<Circle>😀 😎 👍 💯</Circle>
	));
