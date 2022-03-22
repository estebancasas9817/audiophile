import React from 'react';
import ShopButton from '../Buttons/ShopButton/ShopButton';
import './ProductBanner.css';

function ProductBanner() {
	return (
		<div className="product__list">
			<div className="product__container">
				<div className="product__img" />
				<div className="product">
					<h2 className="product__title">Headphones</h2>
					<ShopButton className="hover" />
				</div>
			</div>

			<div className="product__container">
				<div className="product__img" />
				<div className="product">
					<h2 className="product__title">Speakers</h2>
					<ShopButton className="hover" />
				</div>
			</div>
			<div className="product__container">
				<div className="product__img" />
				<div className="product">
					<h2 className="product__title">Earphones</h2>
					<ShopButton className="hover" />
				</div>
			</div>
		</div>
	);
}

export default ProductBanner;
