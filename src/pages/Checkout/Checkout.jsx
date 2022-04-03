import React from 'react';
import Form from '../../components/Form/Form';
import Summary from '../../components/Summary/Summary';
import './Checkout.css';
import PropTypes from 'prop-types';

function Checkout({ handlerModal }) {
	return (
		<div className="checkout">
			<div className="checkout__container">
				<Form />
				<Summary handlerModal={handlerModal} />
			</div>
		</div>
	);
}
Checkout.propTypes = {
	handlerModal: PropTypes.func,
};
export default Checkout;
