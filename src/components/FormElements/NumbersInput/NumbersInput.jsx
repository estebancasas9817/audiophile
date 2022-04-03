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
						width: 4rem;
						padding-left: 1.5rem;
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
function NumbersInput({ modalInput }) {
	return (
		<NumbersInputContainer modalInput={modalInput}>
			<button className="btn__number">-</button>
			<input type="number" disabled className="input__number" placeholder="0" />
			<button className="btn__number">+</button>
		</NumbersInputContainer>
	);
}
NumbersInput.propTypes = {
	modalInput: PropTypes.string,
};
export default NumbersInput;
