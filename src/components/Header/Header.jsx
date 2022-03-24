import React from 'react';
import Icons from '../Icons/Icons';
import NavBar from '../NavBar/NavBar';
import './Header.css';
import PropTypes from 'prop-types';
import CartButton from '../Buttons/CartButton/CartButton';

function Header({ navbar, handleCartBtn }) {
	return (
		<header className="header">
			<Icons name="logo" color="#fff" width="140px" height="30px" />
			<NavBar navbar={navbar} />
			<CartButton handleCartBtn={handleCartBtn} />
		</header>
	);
}

Header.propTypes = {
	navbar: PropTypes.array,
	handleCartBtn: PropTypes.func,
};

export default Header;
