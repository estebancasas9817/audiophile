import React from 'react';
import './CheckoutButton.css';
import PropTypes from 'prop-types';

const CheckoutButton = ({ children }) => {
	return <button className="checkoutButton">{children}</button>;
};
CheckoutButton.propTypes = {
	children: PropTypes.children,
};
export default CheckoutButton;
