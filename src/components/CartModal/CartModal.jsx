import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NumbersInput from '../FormElements/NumbersInput/NumbersInput';
import './CartModal.css';
import CheckoutButton from '../Buttons/CheckoutButton/CheckoutButton';
import RemoveButton from '../Buttons/RemoveButton/RemoveButton';
const ModalFlex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
function CartModal({
	open,
	handleCartBtn,
	handlerModal,
	cartProducts,
	removeCart,
	onChangeItem,
	total,
}) {
	if (!open) return null;

	return (
		<div>
			{ReactDOM.createPortal(
				<div className="backdrop"></div>,
				document.getElementById('overlay')
			)}
			{ReactDOM.createPortal(
				<div className="cartModal">
					<ModalFlex className="modal__header">
						<h2 className="modal__title">Cart ({cartProducts?.length})</h2>
						<RemoveButton removeCart={removeCart} />
					</ModalFlex>
					<ul className="modal__body">
						{cartProducts?.length < 1 && <h3>Your cart is empty</h3>}
						{cartProducts?.length > 0 &&
							cartProducts?.map((item) => (
								<li className="modal__item" key={item.id}>
									<img src={item.image} alt="" className="modal__img" />
									<div className="modal__container">
										<h1 className="modal__name">{item.name}</h1>
										<h3 className="modal__price">$ {item.price}</h3>
									</div>
									<NumbersInput
										modalInput="modalInput"
										counter={item.quantity}
										onChangeItem={onChangeItem}
										product={item}
									/>
								</li>
							))}
					</ul>
					{cartProducts?.length > 0 && (
						<ModalFlex>
							<h1 className="modal__total-name">Total</h1>

							<h3 className="modal__total-price">$ {total}</h3>
						</ModalFlex>
					)}
					<CheckoutButton
						handleCartBtn={handleCartBtn}
						handlerModal={handlerModal.bind(null, true)}
						path="/checkout"
					>
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
	handlerModal: PropTypes.func,
	cartProducts: PropTypes.array,
	removeCart: PropTypes.func,
	onChangeItem: PropTypes.func,
	total: PropTypes.number,
};
export default CartModal;
