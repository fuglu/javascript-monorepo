import React from 'react';

const style = {
	border: '1px solid gold',
	borderRadius: '90%',
	padding: '10px',
};

const Circle = props => (
	<div style={style}>
		{props.children}
	</div>
);

Circle.propTypes = {
	children: React.PropTypes.node.isRequired,
};

export default Circle;
