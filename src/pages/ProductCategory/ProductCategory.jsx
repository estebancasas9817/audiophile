import React from 'react';
import AudioCard from '../../components/AudioCard/AudioCard';
import Product from '../../components/Product/Product';
import ProductBanner from '../../components/ProductBanner/ProductBanner';
import ProductTitle from '../../components/ProductTitle/ProductTitle';
import Wrapper from '../../components/Wrapper/Wrapper';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import './ProductCategory.css';
const ProductCategory = ({ products, addProduct, restartCounter }) => {
	const params = useParams();
	const filteredProducts = products.filter((product) => {
		if (product.category === params.category) {
			return product;
		}
	});

	return (
		<section className="headphones">
			<div className="category__container">
				<ProductTitle>{params.category}</ProductTitle>
			</div>

			<Wrapper>
				<Product
					filteredProducts={filteredProducts}
					addProduct={addProduct}
					restartCounter={restartCounter}
				/>
				<ProductBanner />
				<AudioCard />
			</Wrapper>
		</section>
	);
};
ProductCategory.propTypes = {
	products: PropTypes.array,
	addProduct: PropTypes.func,
	restartCounter: PropTypes.func,
};
export default ProductCategory;
