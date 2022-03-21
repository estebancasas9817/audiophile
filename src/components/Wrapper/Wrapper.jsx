import React from 'react';
import './Wrapper.css';

function Wrapper({ children }) {
	return <main className="wrapper">{children}</main>;
}

export default Wrapper;
