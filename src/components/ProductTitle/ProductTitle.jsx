import React from 'react';
import './ProductTitle.css';
import PropTypes from 'prop-types';

function ProductTitle({ children }) {
	return <h1 className="title">{children}</h1>;
}
ProductTitle.propTypes = {
	children: PropTypes.children,
};
export default ProductTitle;
