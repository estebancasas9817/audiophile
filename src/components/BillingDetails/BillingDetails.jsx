import React from 'react';
import TextInput from '../FormElements/TextInput/TextInput';
import './BillingDetails.css';
function BillingDetails() {
	return (
		<>
			<h3 className="billing__title">Billing Details</h3>
			<div className="billing__container">
				<div className="billing__item">
					<span>Name</span>
					<TextInput type="text" placeholder="Alexei Ward" />
				</div>
				<div className="billing__item">
					<span>Email Address</span>

					<TextInput type="email" placeholder="alexei@gmail.com" />
				</div>
				<div className="billing__item">
					<span>PhoneNumber</span>

					<TextInput type="number" placeholder="3132804567" />
				</div>
			</div>
		</>
	);
}

export default BillingDetails;
