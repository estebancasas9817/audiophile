import React from 'react';
import styled from 'styled-components';
import ProductCard from '../ProductCard/ProductCard';
import './Hero.css';
import PropTypes from 'prop-types';

function Hero({ filteredHeroProduct }) {
	const Heros = styled.div`
		max-width: var(--max-width);
		margin: 0 auto;
		position: relative;
		height: 80vh;
	`;

	return (
		<Heros hero>
			<ProductCard product={filteredHeroProduct[0]} />
		</Heros>
	);
}
Hero.propTypes = {
	filteredHeroProduct: PropTypes.array,
};
export default Hero;
