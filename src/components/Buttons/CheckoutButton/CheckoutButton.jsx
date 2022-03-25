import React from 'react';
import './CheckoutButton.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CheckoutButton = ({ children, handleCheckModal, path }) => {
	return (
		<button className="checkoutButton" onClick={handleCheckModal}>
			<Link to={path} className="btn__link">
				{children}
			</Link>
		</button>
	);
};
CheckoutButton.propTypes = {
	children: PropTypes.children,
	handleCheckModal: PropTypes.fun,
	path: PropTypes.string,
};
export default CheckoutButton;
