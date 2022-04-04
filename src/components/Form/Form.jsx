import React from 'react';
import './Form.css';
import BillingDetails from '../BillingDetails/BillingDetails';
import ShippingDetails from '../ShippingDetails/ShippingDetails';
import PaymentDetails from '../PaymentDetails/PaymentDetails';
function Form() {
	return (
		<form className="form">
			<h1 className="form__title">Checkout</h1>
			<BillingDetails />
			<ShippingDetails />
			<PaymentDetails />
		</form>
	);
}

export default Form;
