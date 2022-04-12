import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import PropTypes from 'prop-types';
function NavBar({ navbar }) {
	return (
		<nav className="nav">
			<ul className="nav__list">
				{navbar.map((element) => (
					<li className="nav__item" key={element.id}>
						<NavLink className="nav__link" to={element.path + element.category}>
							{element.title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}
NavBar.propTypes = {
	navbar: PropTypes.array,
};
export default NavBar;
