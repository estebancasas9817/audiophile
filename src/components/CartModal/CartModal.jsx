import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NumbersInput from '../FormElements/NumbersInput/NumbersInput';
import './CartModal.css';
import CheckoutButton from '../Buttons/CheckoutButton/CheckoutButton';
import RemoveButton from '../Buttons/RemoveButton/RemoveButton';

function CartModal({ open, handleCartBtn }) {
	const ModalFlex = styled.div`
		display: flex;
		align-items: center;
		justify-content: space-between;
	`;
	if (!open) return null;
	return (
		<div>
			{ReactDOM.createPortal(
				<div className="backdrop">gbghg</div>,
				document.getElementById('overlay')
			)}
			{ReactDOM.createPortal(
				<div className="cartModal">
					<ModalFlex className="modal__header">
						<h2 className="modal__title">Cart (3)</h2>
						<RemoveButton />
					</ModalFlex>
					<ul className="modal__body">
						<li className="modal__item">
							<div className="modal__img"></div>
							<div className="modal__container">
								<h1 className="modal__name">XX99 MK II</h1>
								<h3 className="modal__price">$ 256</h3>
							</div>
							<NumbersInput modalInput="modalInput" />
						</li>
						<li className="modal__item">
							<div className="modal__img"></div>
							<div className="modal__container">
								<h1 className="modal__name">XX99 MK II</h1>
								<h3 className="modal__price">$ 256</h3>
							</div>
							<NumbersInput modalInput="modalInput" />
						</li>
						<li className="modal__item">
							<div className="modal__img"></div>
							<div className="modal__container">
								<h1 className="modal__name">XX99 MK II</h1>
								<h3 className="modal__price">$ 256</h3>
							</div>
							<NumbersInput modalInput="modalInput" />
						</li>
					</ul>
					<ModalFlex>
						<h1 className="modal__total-name">Total</h1>
						<h3 className="modal__total-price">$ 456</h3>
					</ModalFlex>
					<CheckoutButton handleCartBtn={handleCartBtn} path="/checkout">
						Checkout
					</CheckoutButton>
				</div>,
				document.getElementById('portal')
			)}
		</div>
	);
}
CartModal.propTypes = {
	open: PropTypes.bool,
	handleCartBtn: PropTypes.func,
};
export default CartModal;
