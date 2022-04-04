import React from 'react';
import TextInput from '../FormElements/TextInput/TextInput';

function ShippingDetails() {
	return (
		<>
			<h3 className="billing__title">Shipping Info</h3>
			<div className="billing__container">
				<div className="billing__item billing__item-width">
					<span>Address</span>
					<TextInput
						type="text"
						placeholder="1137 Williams Avenue"
						width="width"
					/>
				</div>
				<div className="billing__item">
					<span>Zip Code</span>

					<TextInput type="number" placeholder="10001" />
				</div>
				<div className="billing__item">
					<span>City</span>

					<TextInput type="text" placeholder="New York" />
				</div>
				<div className="billing__item">
					<span>Country</span>

					<TextInput type="text" placeholder="United States" />
				</div>
			</div>
		</>
	);
}

export default ShippingDetails;
