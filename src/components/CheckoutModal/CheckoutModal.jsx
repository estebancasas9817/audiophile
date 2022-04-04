import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './CheckoutModal.css';
import Icons from '../Icons/Icons';
import CheckoutButton from '../Buttons/CheckoutButton/CheckoutButton';
function CheckoutModal({
	open,
	handleCheckModal,
	handlerModal,
	total,
	cartProducts,
}) {
	if (!open) return null;
	return (
		<div>
			{ReactDOM.createPortal(
				<div className="backdrop"></div>,
				document.getElementById('overlay')
			)}
			{ReactDOM.createPortal(
				<div className="checkoutModal">
					<div className="icon__circle">
						<Icons
							name="tick"
							width="40px"
							height="40px"
							color="--color-white"
						/>
					</div>
					<h1 className="checkout-modal-title">Thank your for your order</h1>
					<p className="checkout-modal-sub-title">
						You will receive an email confirmation shortly.
					</p>
					<div className="checkout-modal-body">
						<div className="checkout-modal__left">
							<div className="checkout-modal__flex">
								<img
									src={cartProducts[0].image}
									className="checkout-modal__img"
								/>
								<div className="checkout-modal__box">
									<h3 className="first__item">{cartProducts[0].name}</h3>
									<p className="first__itenm-price">
										$ {cartProducts[0].price}
									</p>
								</div>
								<p className="first__item-quantity">
									x{cartProducts[0].quantity}
								</p>
							</div>
							<p className="other__items">
								and {cartProducts.length - 1} other item(s)
							</p>
						</div>
						<div className="checkout-modal__right">
							<h3 className="checkout-modal__total">GRAND TOTAL</h3>
							<p className="checkout-modal__price">$ {total}</p>
						</div>
					</div>
					<CheckoutButton
						handleCheckModal={handleCheckModal}
						handlerModal={handlerModal.bind(null, false)}
						path="/home"
					>
						Back to home
					</CheckoutButton>
				</div>,
				document.getElementById('portal')
			)}
		</div>
	);
}
CheckoutModal.propTypes = {
	open: PropTypes.bool,
	handleCheckModal: PropTypes.func,
	handlerModal: PropTypes.func,
	total: PropTypes.number,
	cartProducts: PropTypes.array,
};
export default CheckoutModal;
