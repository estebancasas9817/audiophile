import React from 'react';
import './ProductTitle.css';
import PropTypes from 'prop-types';

function ProductTitle({ title }) {
	return <h1 className="title">{title}</h1>;
}
ProductTitle.propTypes = {
	title: PropTypes.string,
};
export default ProductTitle;
