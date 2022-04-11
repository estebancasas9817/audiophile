import React from 'react';
import CheckoutButton from '../../../../shared/components/Buttons/CheckoutButton/CheckoutButton';
import './Summary.css';
import PropTypes from 'prop-types';

function Summary({ handlerModal, cartProducts, total }) {
	return (
		<div className="summary">
			<h2 className="summary__title">Summary</h2>
			<ul>
				{cartProducts?.length > 0 &&
					cartProducts.map((product) => (
						<li className="summary__item" key={product.id}>
							<img src={product.image} className="summary__img" />
							<div className="summary__flex">
								<h4 className="summary__item-name">{product.name}</h4>
								<h4 className="summary__item-price">$ {product.price}</h4>
							</div>
							<h6 className="summary__quantity">x{product.quantity}</h6>
						</li>
					))}
			</ul>
			<div className="summary__invoice">
				<ul>
					<li className="summary__invoice-item">
						<h3 className="summary__invoice-element">Total</h3>
						<h4 className="summary__inoice-value">$ {total}</h4>
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
							$ {total + 50 + 1079}
						</h4>
					</li>
				</ul>
			</div>
			<CheckoutButton
				handlerModal={handlerModal.bind(null, false)}
				path="/checkout"
			>
				Continue & pay
			</CheckoutButton>
		</div>
	);
}
Summary.propTypes = {
	handlerModal: PropTypes.func,
	cartProducts: PropTypes.array,
	total: PropTypes.number,
};
export default Summary;
