import React from 'react';
import PropTypes from 'prop-types';
import './RecommendItem.css';
import Button from '../Buttons/Button/Button';
function RecommendItem({ product }) {
	return (
		<div className="recommendItem">
			<div className="recommend__img">
				<img src={product.image} alt="" width="75%" />
			</div>
			<h1>{product.name}</h1>
			<Button
				backcolor="--color-orange-dark"
				hover="--color-orange-light"
				color="--color-white"
				text="See Product"
				product={product}
			/>
		</div>
	);
}
RecommendItem.propTypes = {
	product: PropTypes.object,
};
export default RecommendItem;
