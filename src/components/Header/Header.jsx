import React from 'react';
import Icons from '../Icons/Icons';
import NavBar from '../NavBar/NavBar';
import './Header.css';
import PropTypes from 'prop-types';

function Header({ navbar }) {
	return (
		<header className="header">
			<Icons name="logo" color="#fff" width="140px" height="30px" />
			<NavBar navbar={navbar} />
			<Icons name="shopping-cart" color="#fff" width="20px" />
		</header>
	);
}

Header.propTypes = {
	navbar: PropTypes.array,
};

export default Header;
