import React from 'react';
import './ProductFeature.css';
import PropTypes from 'prop-types';

function ProductFeature({ product }) {
	return (
		<div className="productFeature">
			<div className="feature__left">
				<h1 className="feature__title">FEATURES</h1>
				<p className="feature__text">{product.features}</p>
			</div>
			<div className="feature__right">
				<h1 className="feature__title">IN THE BOX</h1>
				<ul className="feature__list">
					{product.includes.map((item) => (
						<li className="feature__item" key={item.item}>
							<span className="feature__span">{item.quantity} </span>
							{item.item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
ProductFeature.propTypes = {
	product: PropTypes.object,
};
export default ProductFeature;
