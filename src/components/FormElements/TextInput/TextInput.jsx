import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './TextInput.css';
const Input = styled.input`
	padding: 1.8rem 2.4rem;
	border-radius: 8px;
	border: 1px solid var(--color-text-input);
	width: ${(props) => (props.width ? '100%' : '31rem')};
`;
function TextInput({ type, placeholder, width }) {
	return <Input type={type} placeholder={placeholder} width={width} />;
}
TextInput.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string,
	width: PropTypes.string,
};
export default TextInput;
