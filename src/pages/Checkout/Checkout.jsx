import React from 'react';
import Form from '../../components/Form/Form';
import Summary from '../../components/Summary/Summary';
import './Checkout.css';
import PropTypes from 'prop-types';

function Checkout({ handleCheckModal }) {
	return (
		<div className="checkout">
			<div className="checkout__container">
				<Form />
				<Summary handleCheckModal={handleCheckModal} />
			</div>
		</div>
	);
}
Checkout.propTypes = {
	handleCheckModal: PropTypes.func,
};
export default Checkout;
