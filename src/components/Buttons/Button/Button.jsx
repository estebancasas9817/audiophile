import React from 'react';
import './Button.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Btn = styled.button`
	background-color: var(${(props) => props.backcolor});
	padding: 1.5rem 3.1rem;
	text-transform: uppercase;

	transition: all 0.3s;
	border: ${(props) => props.border};
	.btn__link {
		color: var(${(props) => props.color});
	}
	&:hover {
		background-color: var(${(props) => props.hover});
		color: var(--color-white);
	}
	&:hover .btn__link {
		color: var(--color-white);
	}
`;
function Button({ backcolor, hover, border, color, text, product }) {
	return (
		<Btn
			type="button"
			className="btn"
			backcolor={backcolor}
			border={border}
			hover={hover}
			color={color}
		>
			{text && (
				<Link
					to={`/product-detail/${product?.slug}`}
					className="btn__link"
					params={{ product: product }}
				>
					{text}
				</Link>
			)}
		</Btn>
	);
}
Button.propTypes = {
	backcolor: PropTypes.string,
	hover: PropTypes.string,
	border: PropTypes.string,
	color: PropTypes.string,
	text: PropTypes.string,
	product: PropTypes.object,
};
export default Button;
