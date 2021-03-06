import React from 'react';
import './ProductCard.css';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from '../Buttons/Button/Button';

const HeroContainer = styled.div`
	max-width: 40rem;
	.hero__subtitle {
		font-weight: 100;
		letter-spacing: 1rem;
		text-transform: uppercase;
	}
	.hero__title {
		text-transform: uppercase;
		margin: 2.4rem 0;
	}
	.hero__text {
		font-weight: 300;
		margin-bottom: 4.8rem;
		margin-right: 4.9rem;
	}
	${({ relative }) =>
		relative
			? css`
					.hero__subtitle {
						color: var(--color-orange-dark);
						font-size: var(--h6-font-size);
						font-weight: 100;
						letter-spacing: 1rem;
						text-transform: uppercase;
					}
					.hero__title {
						color: var(--color-black);
						font-size: var(--h1-font-size);
						text-transform: uppercase;
						margin: 2.4rem 0;
					}
					.hero__text {
						color: var(--color-black);
						font-size: var(--body-font-size);
						font-weight: 300;
						margin-bottom: 4.8rem;
						margin-right: 4.9rem;
					}
			  `
			: css`
					position: absolute;
					top: 25%;
					left: 0%;

					.hero__subtitle {
						color: var(--color-white-darker);
						font-size: var(--h6-font-size);
						font-weight: 100;
						letter-spacing: 1rem;
						text-transform: uppercase;
					}
					.hero__title {
						color: var(--color-white);
						font-size: var(--h1-font-size);
						text-transform: uppercase;
						margin: 2.4rem 0;
					}
					.hero__text {
						color: var(--color-white-darker);
						font-size: var(--body-font-size);
						font-weight: 300;
						margin-bottom: 4.8rem;
						margin-right: 4.9rem;
					}
			  `}
`;
function ProductCard({ relative, product, restartCounter }) {
	return (
		<HeroContainer relative={relative}>
			{product?.new && <h2 className="hero__subtitle">New Product</h2>}
			{product && <h1 className="hero__title">{product.name}</h1>}
			{product && <h3 className="hero__text">{product.description}</h3>}
			<Button
				backcolor="--color-orange-dark"
				hover="--color-orange-light"
				color="--color-white"
				text="See product"
				product={product}
				restartCounter={restartCounter}
			/>
		</HeroContainer>
	);
}
ProductCard.propTypes = {
	relative: PropTypes.string,
	product: PropTypes.any,
	restartCounter: PropTypes.func,
};
export default ProductCard;
