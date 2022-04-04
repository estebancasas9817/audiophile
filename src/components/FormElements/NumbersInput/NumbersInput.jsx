import React from 'react';
import styled, { css } from 'styled-components';
import './NumbersInput.css';
import PropTypes from 'prop-types';
const NumbersInputContainer = styled.div`
	${(props) =>
		props.modalInput
			? css`
					margin-left: auto;
					& > * {
						background-color: var(--color-white-darker);
						padding: 0.7rem 1.1rem;
						display: inline-block;
					}
					.input__number {
						border: none;
						color: var(--color-black);
						text-align: center;
						width: 3rem;
						padding-left: 0.5rem;
						padding-right: 0;
						display: inline-block;
					}
			  `
			: css`
					& > * {
						background-color: var(--color-white-darker);
						padding: 1.5rem;
						display: inline-block;
					}
					.input__number {
						border: none;
						padding-left: 3rem;
						color: var(--color-black);
						text-align: center;
						width: 10rem;
						display: inline-block;
					}
			  `}
`;
function NumbersInput({
	modalInput,
	quantity,
	onCounter,
	counter,
	onChangeItem,
	product,
}) {
	console.log(quantity);
	const handleClick = (flag, product) => {
		if (onCounter) {
			onCounter(flag);
		} else {
			onChangeItem(product, flag, counter);
		}
	};
	return (
		<NumbersInputContainer modalInput={modalInput}>
			<button
				className="btn__number"
				onClick={() => handleClick(false, product)}
			>
				-
			</button>
			<input
				type="number"
				disabled
				className="input__number"
				placeholder={counter ? counter : counter}
			/>
			<button
				className="btn__number"
				onClick={() => handleClick(true, product)}
			>
				+
			</button>
		</NumbersInputContainer>
	);
}
NumbersInput.propTypes = {
	modalInput: PropTypes.string,
	quantity: PropTypes.number,
	counter: PropTypes.number,
	onCounter: PropTypes.func,
	onChangeItem: PropTypes.func,
	product: PropTypes.object,
};
export default NumbersInput;
