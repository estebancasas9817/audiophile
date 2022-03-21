import React from 'react';
import './Home.css';
import Hero from '../../components/Hero/Hero';
import Wrapper from '../../components/Wrapper/Wrapper';
import ProductBanner from '../../components/ProductBanner/ProductBanner';
import Grid from '../../components/Grid/Grid';
import AudioCard from '../../components/AudioCard/AudioCard';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<Hero />
			</div>
			<Wrapper>
				<ProductBanner />
				<Grid />
				<AudioCard />
			</Wrapper>
		</div>
	);
}

export default Home;
