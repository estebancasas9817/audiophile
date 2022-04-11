import React from 'react';
import styled from 'styled-components';
import sprite from '../../../../assets/sprite.svg';

import './Icons.css';
import PropTypes from 'prop-types';
const Svg = styled.svg`
	fill: ${(props) => props.color};
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	display: inline-block;
`;
function Icons({ name, color, width, height }) {
	return (
		<Svg color={color} width={width} height={height}>
			<use xlinkHref={`${sprite}#icon-${name}`} />
		</Svg>
	);
}
Icons.propTypes = {
	name: PropTypes.string,
	color: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
};

export default Icons;
