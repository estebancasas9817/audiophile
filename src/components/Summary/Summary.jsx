import React from 'react';
import CheckoutButton from '../Buttons/CheckoutButton/CheckoutButton';
import './Summary.css';
function Summary() {
	return (
		<div className="summary">
			<h2 className="summary__title">Summary</h2>
			<ul>
				<li className="summary__item">
					<div className="summary__img"></div>
					<div className="summary__flex">
						<h4 className="summary__item-name">XX99 MK II</h4>
						<h4 className="summary__item-price">$ 2,999</h4>
					</div>
					<h6 className="summary__quantity">x1</h6>
				</li>
				<li className="summary__item">
					<div className="summary__img"></div>
					<div className="summary__flex">
						<h4 className="summary__item-name">XX99 MK II</h4>
						<h4 className="summary__item-price">$ 2,999</h4>
					</div>
					<h6 className="summary__quantity">x1</h6>
				</li>
				<li className="summary__item">
					<div className="summary__img"></div>
					<div className="summary__flex">
						<h4 className="summary__item-name">XX99 MK II</h4>
						<h4 className="summary__item-price">$ 2,999</h4>
					</div>
					<h6 className="summary__quantity">x1</h6>
				</li>
			</ul>
			<div className="summary__invoice">
				<ul>
					<li className="summary__invoice-item">
						<h3 className="summary__invoice-element">Total</h3>
						<h4 className="summary__inoice-value">$ 5,396</h4>
					</li>
					<li className="summary__invoice-item">
						<h3 className="summary__invoice-element">SHIPPING</h3>
						<h4 className="summary__inoice-value">$ 50</h4>
					</li>
					<li className="summary__invoice-item">
						<h3 className="summary__invoice-element">VAT (INCLUDED)</h3>
						<h4 className="summary__inoice-value">$ 1,079</h4>
					</li>
					<li className="summary__invoice-item summary__invoice-item-margin">
						<h3 className="summary__invoice-element">GRAND TOTAL</h3>
						<h4 className="summary__inoice-value summary__inoice-value-color">
							$ 5,446
						</h4>
					</li>
				</ul>
			</div>
			<CheckoutButton> Continue & pay</CheckoutButton>
		</div>
	);
}

export default Summary;
