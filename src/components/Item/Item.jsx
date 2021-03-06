import React from 'react';
import './Item.css';
import Button from '../Buttons/Button/Button';
import NumbersInput from '../FormElements/NumbersInput/NumbersInput';
import PropTypes from 'prop-types';

const Item = ({ product, addProduct, handlerModal, counter, onCounter }) => {
	return (
		<div className="item__container">
			<div className="item__left">
				<img src={product.image} alt="" width="500rem" />
			</div>
			<div className="item__right">
				{product.new && <h2 className="item__subtitle">NEW PRODUCT</h2>}
				<h1 className="item__title">{product.name}</h1>
				<p className="item__text">{product.description}</p>
				<h3 className="item__price">$ {product.price}</h3>
				<div className="item__right-box">
					<NumbersInput counter={counter} onCounter={onCounter} />
					<Button
						backcolor="--color-orange-dark"
						hover="--color-orange-light"
						color="--color-white"
						text="Add to cart"
						product={product}
						addProduct={addProduct.bind(null, product, counter)}
						handlerModal={handlerModal.bind(null, true)}
					/>
				</div>
			</div>
		</div>
	);
};
Item.propTypes = {
	product: PropTypes.object,
	addProduct: PropTypes.func,
	handlerModal: PropTypes.func,
	counter: PropTypes.number,
	onCounter: PropTypes.func,
};
export default Item;
