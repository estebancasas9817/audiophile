import React from 'react';
import './CheckoutButton.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CheckoutButton = ({ children, handleCartBtn }) => {
	return (
		<button className="checkoutButton" onClick={handleCartBtn}>
			<Link to="/checkout" className="btn__link">
				{children}
			</Link>
		</button>
	);
};
CheckoutButton.propTypes = {
	children: PropTypes.children,
	handleCartBtn: PropTypes.fun,
};
export default CheckoutButton;
