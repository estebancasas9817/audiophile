import React from 'react';
import './GridItem.css';
import PropTypes from 'prop-types';

const GridItem = ({ product }) => {
	return (
		<div className="gridItems">
			<div className="first">
				<img src={product.gallery.first} alt="" className="grid-item-img" />
			</div>
			<div className="second">
				<img src={product.gallery.second} alt="" className="grid-item-img" />
			</div>
			<div className="third">
				<img src={product.gallery.third} alt="" className="grid-item-img" />
			</div>
		</div>
	);
};
GridItem.propTypes = {
	product: PropTypes.object,
};
export default GridItem;
