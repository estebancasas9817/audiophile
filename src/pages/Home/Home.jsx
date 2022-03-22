import React from 'react';
import './Home.css';
import Hero from '../../components/Hero/Hero';
import Wrapper from '../../components/Wrapper/Wrapper';
import ProductBanner from '../../components/ProductBanner/ProductBanner';
import Grid from '../../components/Grid/Grid';
import AudioCard from '../../components/AudioCard/AudioCard';
import PropTypes from 'prop-types';

function Home({ filteredHeroProduct }) {
	return (
		<section className="home">
			<div className="home__container">
				<Hero filteredHeroProduct={filteredHeroProduct} />
			</div>
			<Wrapper>
				<ProductBanner />
				<Grid />
				<AudioCard />
			</Wrapper>
		</section>
	);
}
Home.propTypes = {
	filteredHeroProduct: PropTypes.array,
};
export default Home;
