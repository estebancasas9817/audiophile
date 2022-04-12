import { useEffect, useState } from 'react';
import URL from '../utils/apis';
import { productsAdapter } from '../../application/adapters/productsAdapter';
import { navBarAdapter } from '../../application/adapters/navbarAdapter';
import { gridAdapter } from '../../application/adapters/gridAdapter';
import { NAVBAR, PRODUCTS, GRID } from '../utils/constants/types';
const useFetch = (type) => {
	const [data, setData] = useState([]);
	const finalUrl = URL + type;
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(finalUrl);
				const finalData = await res.json();
				switch (type) {
					case NAVBAR:
						setData(
							finalData.map((element) => {
								return navBarAdapter(element);
							})
						);
						break;
					case PRODUCTS:
						setData(
							finalData.map((element) => {
								return productsAdapter(element);
							})
						);
						break;
					case GRID:
						setData(
							finalData.map((element) => {
								return gridAdapter(element);
							})
						);
						break;
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [finalUrl, type]);
	return data;
};
export default useFetch;
