import React from 'react';
import './Button.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Button({ backcolor, hover, border, color }) {
	const Btn = styled.button`
		background-color: var(${backcolor});
		padding: 1.5rem 3.1rem;
		text-transform: uppercase;
		color: var(${color});
		transition: all 0.3s;
		border: ${border};
		&:hover {
			background-color: var(${hover});
			color: var(--color-white);
		}
	`;
	return (
		<Btn type="button" className="btn">
			See product
		</Btn>
	);
}
Button.propTypes = {
	backcolor: PropTypes.string,
	hover: PropTypes.string,
	border: PropTypes.string,
	color: PropTypes.string,
};
export default Button;
