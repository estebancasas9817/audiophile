import React from 'react';
import AudioCard from '../../components/AudioCard/AudioCard';
import Product from '../../components/Product/Product';
import ProductBanner from '../../components/ProductBanner/ProductBanner';
import ProductTitle from '../../components/ProductTitle/ProductTitle';
import Wrapper from '../../components/Wrapper/Wrapper';
import PropTypes from 'prop-types';

function Speakers({ filteredSpeakers }) {
	console.log(filteredSpeakers);

	return (
		<section>
			<div className="headphones__container">
				<ProductTitle title="speakers" />
			</div>

			<Wrapper>
				<Product filteredProducts={filteredSpeakers} />
				<ProductBanner />
				<AudioCard />
			</Wrapper>
		</section>
	);
}
Speakers.propTypes = {
	filteredSpeakers: PropTypes.array,
};
export default Speakers;
