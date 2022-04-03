import React from 'react';
import './CheckoutButton.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CheckoutButton = ({ children, path, handlerModal }) => {
	return (
		<button className="checkoutButton" onClick={handlerModal}>
			<Link to={path} className="btn__link">
				{children}
			</Link>
		</button>
	);
};
CheckoutButton.propTypes = {
	children: PropTypes.node,
	handleCheckModal: PropTypes.func,
	path: PropTypes.string,
	handlerModal: PropTypes.func,
};
export default CheckoutButton;
