import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar({ navbar }) {
	return (
		<nav className="nav">
			<ul className="nav__list">
				{navbar.map((element) => (
					<li className="nav__item" key={element.id}>
						<NavLink className="nav__link" to={element.path}>
							{element.title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default NavBar;
