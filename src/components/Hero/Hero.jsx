import React from 'react';
import styled from 'styled-components';
import ProductCard from '../ProductCard/ProductCard';
import './Hero.css';
import PropTypes from 'prop-types';

const Heros = styled.div`
	max-width: var(--max-width);
	margin: 0 auto;
	position: relative;
	min-height: 70rem;
`;
function Hero({ filteredHeroProduct }) {
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
