import React from 'react';

const style = {
	border: '1px solid gold',
	display: 'inline-block',
	padding: '10px',
	borderRadius: '4px',
	textAlign: 'center',
};

const Component = props => (
	<div style={style}>
		{props.children}
	</div>
);

Component.propTypes = {
	children: React.PropTypes.node.isRequired,
};

export default Component;
