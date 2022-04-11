import React from 'react';
import './Home.css';
import Hero from './components/Hero/Hero';
import Wrapper from '../../shared/components/Wrapper/Wrapper';
import ProductBanner from '../../shared/components/ProductBanner/ProductBanner';
import Grid from './components/Grid/Grid';
import AudioCard from '../../shared/components/AudioCard/AudioCard';
import PropTypes from 'prop-types';

function Home({ filteredHeroProduct, gridItems }) {
	return (
		<section className="home">
			<div className="home__container">
				<Hero filteredHeroProduct={filteredHeroProduct} />
			</div>
			<Wrapper>
				<ProductBanner />
				<Grid gridItems={gridItems} />
				<AudioCard />
			</Wrapper>
		</section>
	);
}
Home.propTypes = {
	filteredHeroProduct: PropTypes.array,
	gridItems: PropTypes.array,
};
export default Home;
