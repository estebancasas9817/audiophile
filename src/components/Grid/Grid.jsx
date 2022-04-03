import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../Buttons/Button/Button';
import './Grid.css';
import PropTypes from 'prop-types';
const GridCard = styled.div`
	${({ product }) =>
		product === 6
			? css`
					width: 35rem;
					position: absolute;
					right: 10%;
					top: 20%;
			  `
			: css``}
`;
const GridTitle = styled.h1`
	font-size: ${(props) => (props.product === 6 ? '5.6rem' : '2.8rem')};
	color: ${(props) => (props.product === 6 ? 'white' : 'black')};
	margin-bottom: 2.4rem;
	text-transform: uppercase;
`;

const GridSubTitle = styled.h2`
	font-size: var(--body-font-size);
	font-weight: 400;
	color: var(--color-white);
	margin: 2.4rem 0 3rem 0;
`;
function Grid({ gridItems }) {
	return (
		<div className="grid">
			{gridItems.reverse().map((product) => (
				<div className={product.slug} key={product.id}>
					{product.image && <img src={product.image} className="grid__img" />}
					<GridCard product={product.id}>
						<GridTitle product={product.id}>{product.name}</GridTitle>
						{product.text && <GridSubTitle>{product.text}</GridSubTitle>}
						{product.name && (
							<Button
								backcolor="--color-transparent"
								hover="--color-black"
								border="1px solid black"
								color="--color-black"
								text="See Product"
								product={product}
							/>
						)}
					</GridCard>
				</div>
			))}
		</div>
	);
}
Grid.propTypes = {
	product: PropTypes.number,
	gridItems: PropTypes.array,
};
export default Grid;
