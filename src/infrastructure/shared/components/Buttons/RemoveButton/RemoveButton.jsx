import React from 'react';
import './RemoveButton.css';
import PropTypes from 'prop-types';

function RemoveButton({ removeCart }) {
	const onRemoveCart = () => {
		removeCart ? removeCart() : null;
	};
	return (
		<button className="remove__btn" onClick={onRemoveCart}>
			Remove all
		</button>
	);
}
RemoveButton.propTypes = {
	removeCart: PropTypes.func,
};
export default RemoveButton;
