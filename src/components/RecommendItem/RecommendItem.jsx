import React from 'react';
import PropTypes from 'prop-types';
import './RecommendItem.css';
function RecommendItem({ product }) {
	console.log(product);
	return (
		<div className="recommendItem">
			<div className="recommend__img">
				<img src={product.image} alt="" width="75%" />
			</div>
			<h1>{product.name}</h1>
			<button>mi boton</button>
		</div>
	);
}
RecommendItem.propTypes = {
	product: PropTypes.object,
};
export default RecommendItem;
