import React from 'react';
import PropTypes from 'prop-types';
import './RecommendItem.css';
import Button from '../../../../shared/components/Buttons/Button/Button';
function RecommendItem({ product, restartCounter }) {
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
				restartCounter={restartCounter}
			/>
		</div>
	);
}
RecommendItem.propTypes = {
	product: PropTypes.object,
	restartCounter: PropTypes.func,
};
export default RecommendItem;
