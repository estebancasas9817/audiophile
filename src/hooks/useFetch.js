import { useEffect, useState } from 'react';
import URL from '../utils/APIS/apis';

const useFetch = (type) => {
	const [data, setData] = useState([]);
	const finalUrl = URL + type;
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(finalUrl);
			const finalData = await res.json();
			setData(finalData);
		};
		fetchData();
	}, [finalUrl]);
	return { data };
};
export default useFetch;
