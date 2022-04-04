import React from 'react';
import Form from '../../components/Form/Form';
import Summary from '../../components/Summary/Summary';
import './Checkout.css';
import PropTypes from 'prop-types';

function Checkout({ handlerModal, cartProducts, total }) {
	return (
		<div className="checkout">
			<div className="checkout__container">
				<Form />
				<Summary
					handlerModal={handlerModal}
					cartProducts={cartProducts}
					total={total}
				/>
			</div>
		</div>
	);
}
Checkout.propTypes = {
	handlerModal: PropTypes.func,
	cartProducts: PropTypes.array,
	total: PropTypes.number,
};
export default Checkout;
