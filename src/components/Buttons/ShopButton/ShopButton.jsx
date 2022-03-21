import React from 'react';
import './ShopButton.css';
import Icons from '../../Icons/Icons';

function ShopButton({ className }) {
	const style = `btn__show-title ${className}`;
	return (
		<button type="button" className="btn__shop">
			<span className={style}>SHOP</span>
			<span>
				<Icons
					name="chevron-right"
					color="#d87d4a"
					width="20px"
					height="20px"
				/>
			</span>
		</button>
	);
}

export default ShopButton;
