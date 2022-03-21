import React from 'react';
import styled from 'styled-components';
import sprite from '../../assets/sprite.svg';
import './Icons.css';

function Icons({ name, color, width, height }) {
	const Svg = styled.svg`
		fill: ${color};
		width: ${width};
		height: ${height};
		display: inline-block;
	`;
	return (
		<Svg>
			<use xlinkHref={`${sprite}#icon-${name}`} />
		</Svg>
	);
}

export default Icons;
