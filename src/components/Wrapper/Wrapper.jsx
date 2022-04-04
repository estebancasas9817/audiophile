import React from 'react';
import './Wrapper.css';
import PropTypes from 'prop-types';

function Wrapper({ children }) {
	return <main className="wrapper">{children}</main>;
}
Wrapper.propTypes = {
	children: PropTypes.node,
};
export default Wrapper;
