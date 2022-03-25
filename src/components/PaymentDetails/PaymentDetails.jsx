import React from 'react';
import RadioInput from '../FormElements/RadioInput/RadioInput';
import TextInput from '../FormElements/TextInput/TextInput';
import './PaymentDetails.css';
function PaymentDetails() {
	return (
		<>
			<h3 className="billing__title">Payment Details</h3>
			<div className="paymentDetails">
				<div className="payment__item payment__item-1">
					<span className="payment__width">Payment Method</span>
				</div>
				<div className="payment__item payment__item-2">
					<RadioInput />
					<RadioInput />
				</div>

				<div className="payment__item">
					<span>e-Money Payment</span>
					<TextInput type="number" />
				</div>
				<div className="payment__item">
					<span>e-Money Pin</span>
					<TextInput type="number" />
				</div>
			</div>
		</>
	);
}

export default PaymentDetails;
