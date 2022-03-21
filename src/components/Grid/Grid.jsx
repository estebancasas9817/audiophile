import React from 'react';
import styled from 'styled-components';
import Button from '../Buttons/Button/Button';
import './Grid.css';

function Grid() {
	const GridTitle = styled.h1`
		font-size: ${(props) => (props.h1 ? '5.6rem' : '2.8rem')};
		color: ${(props) => (props.h1 ? 'white' : 'black')};
		margin-bottom: 2.4rem;
	`;

	const GridSubTitle = styled.h2`
		font-size: var(--body-font-size);
		font-weight: 400;
		color: var(--color-white);
		margin: 2.4rem 0 3rem 0;
	`;
	return (
		<div className="grid">
			<div className="big">
				<div className="grid__img" />
				<div className="grid__card">
					<GridTitle h1>ZX9 SPEAKER</GridTitle>
					<GridSubTitle>
						Upgrade to premium speakers that are phenomenally built to deliver
						truly remarkable sound.
					</GridSubTitle>
					<Button
						backcolor="--color-transparent"
						hover="--color-black"
						border="1px solid black"
						color="--color-black"
					/>
				</div>
			</div>
			<header className="medium">
				<GridTitle h2>ZX7 SPEAKER</GridTitle>
				<Button
					backcolor="--color-transparent"
					hover="--color-black"
					border="1px solid black"
					color="--color-black"
				/>
			</header>
			<div className="small-1" />
			<section className="small-2">
				<GridTitle h2>YX1 EARPHONES</GridTitle>

				<Button
					backcolor="--color-transparent"
					hover="--color-black"
					border="1px solid black"
					color="--color-black"
				/>
			</section>
		</div>
	);
}

export default Grid;
