import React from 'react';
import Form from '../../components/Form/Form';
import Summary from '../../components/Summary/Summary';
import './Checkout.css';
function Checkout() {
	return (
		<div className="checkout">
			<div className="checkout__container">
				<Form />
				<Summary />
			</div>
		</div>
	);
}

export default Checkout;
