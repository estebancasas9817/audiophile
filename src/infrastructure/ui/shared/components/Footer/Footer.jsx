import React from 'react';
import Icons from '../Icons/Icons';
import NavBar from '../NavBar/NavBar';
import './Footer.css';
import PropTypes from 'prop-types';
function Footer({ navbar }) {
	return (
		<footer className="footer">
			<div className="footer_flex">
				<Icons name="logo" color="#fff" width="140px" height="30px" />
				<NavBar navbar={navbar} />
			</div>
			<div className="footer__container">
				<div className="footer__left">
					<p className="footer__text">
						Audiophile is an all in one stop to fulfill your audio needs. We are
						a small team of music lovers and sound specialists who are devoted
						to helping you get the most out of personal audio. Come and visit
						our demo facility - we are open 7 days a week.
					</p>
					<p className="footer_sub-text">Copyright 2021. All Rights Reserved</p>
				</div>
				<div className="footer__right">
					<Icons name="logo" color="#fff" width="140px" height="30px" />
				</div>
			</div>
		</footer>
	);
}
Footer.propTypes = {
	navbar: PropTypes.array,
};
export default Footer;
