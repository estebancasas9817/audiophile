import React from 'react';
import Button from '../Buttons/Button/Button';
import './Hero.css';

function Hero() {
	return (
		<div className="hero">
			<div className="hero__container">
				<h2 className="hero__subtitle">New Product</h2>
				<h1 className="hero__title">XX99 Mark II Headphones</h1>
				<h3 className="hero__text">
					Experience natural, lifelike audio and exceptional build quality made
					for the passionate music enthusiast.
				</h3>
				<Button
					backcolor="--color-orange-dark"
					hover="--color-orange-light"
					color="--color-white"
				/>
			</div>
		</div>
	);
}

export default Hero;
