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
					<div className="payment__item-flex">
						<RadioInput />
						<span>e-Money</span>
					</div>
					<div className="payment__item-flex">
						<RadioInput />
						<span>Cash on delivery</span>
					</div>
				</div>

				<div className="payment__item">
					<span>e-Money Payment</span>
					<TextInput type="number" placeholder="238521993" />
				</div>
				<div className="payment__item">
					<span>e-Money Pin</span>
					<TextInput type="number" placeholder="6891" />
				</div>
			</div>
		</>
	);
}

export default PaymentDetails;
