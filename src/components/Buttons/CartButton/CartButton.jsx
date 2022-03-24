import React from 'react';
import Icons from '../../Icons/Icons';
import './CartButton.css';
import PropTypes from 'prop-types';

const CartButton = ({ handleCartBtn }) => {
	return (
		<button className="btn__cart" onClick={handleCartBtn}>
			<Icons name="shopping-cart" color="#fff" width="20px" height="20px" />
		</button>
	);
};
CartButton.propTypes = {
	handleCartBtn: PropTypes.func,
};
export default CartButton;
