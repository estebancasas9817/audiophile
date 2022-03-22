import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Product.css';
import PropTypes from 'prop-types';

function Product({ filteredProducts }) {
	return (
		<div className="product__box">
			{filteredProducts &&
				filteredProducts.map((product) => (
					<div className="product__item" key={product.id}>
						<img src={product.image} alt="headphones img" width="500px" />
						<ProductCard relative="relative" product={product} />
					</div>
				))}
		</div>
	);
}
Product.propTypes = {
	filteredProducts: PropTypes.array,
};
export default Product;
