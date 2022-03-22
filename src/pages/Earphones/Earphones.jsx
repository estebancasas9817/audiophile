import React from 'react';
import AudioCard from '../../components/AudioCard/AudioCard';
import Product from '../../components/Product/Product';
import ProductBanner from '../../components/ProductBanner/ProductBanner';
import ProductTitle from '../../components/ProductTitle/ProductTitle';
import Wrapper from '../../components/Wrapper/Wrapper';
import PropTypes from 'prop-types';

function Earphones({ filteredEarphones }) {
	console.log(filteredEarphones);
	return (
		<section>
			<div className="headphones__container">
				<ProductTitle title="earphones" />
			</div>

			<Wrapper>
				<Product filteredProducts={filteredEarphones} />
				<ProductBanner />
				<AudioCard />
			</Wrapper>
		</section>
	);
}
Earphones.propTypes = {
	filteredEarphones: PropTypes.array,
};
export default Earphones;
