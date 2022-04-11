import React from 'react';
import Icons from '../../Icons/Icons';
import './CartButton.css';
import PropTypes from 'prop-types';

const CartButton = ({ handlerModal }) => {
	return (
		<button className="btn__cart" onClick={handlerModal}>
			<Icons name="shopping-cart" color="#fff" width="20px" height="20px" />
		</button>
	);
};
CartButton.propTypes = {
	handlerModal: PropTypes.func,
};
export default CartButton;
