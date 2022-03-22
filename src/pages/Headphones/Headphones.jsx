import React from 'react';
import ProductTitle from '../../components/ProductTitle/ProductTitle';
import Wrapper from '../../components/Wrapper/Wrapper';
import './Headphones.css';
import Product from '../../components/Product/Product';
import ProductBanner from '../../components/ProductBanner/ProductBanner';
import AudioCard from '../../components/AudioCard/AudioCard';
import PropTypes from 'prop-types';

function Headphones({ filteredHeadphones }) {
	return (
		<section className="headphones">
			<div className="headphones__container">
				<ProductTitle title="headphones" />
			</div>

			<Wrapper>
				<Product filteredProducts={filteredHeadphones} />
				<ProductBanner />
				<AudioCard />
			</Wrapper>
		</section>
	);
}
Headphones.propTypes = {
	filteredHeadphones: PropTypes.array,
};
export default Headphones;
