import React from 'react';
import './NumbersInput.css';
function NumbersInput() {
	return (
		<div className="numbersInput">
			<button className="btn__number">-</button>
			<input type="number" disabled className="input__number" placeholder="0" />
			<button className="btn__number">+</button>
		</div>
	);
}

export default NumbersInput;
