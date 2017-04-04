import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ReactComponentTemplate from './index';

storiesOf('ReactComponentTemplate', module)
	.add('Hello world', () => (
		<ReactComponentTemplate>Hello world</ReactComponentTemplate>
	));
