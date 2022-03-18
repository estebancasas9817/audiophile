import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Headphones from './pages/Headphones/Headphones';
import Earphones from './pages/Earphones/Earphones';
import Speakers from './pages/Speakers/Speakers';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Checkout from './pages/Checkout/Checkout';
import Header from './components/Header/Header';
import useFetch from './hooks/useFetch';

function App() {
	const { data: navbar } = useFetch('navbar');
	return (
		<>
			<Header navbar={navbar} />

			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/earphones" element={<Earphones />} />
				<Route path="/headphones" element={<Headphones />} />
				<Route path="/product-detail" element={<ProductDetail />} />
				<Route path="/speakers" element={<Speakers />} />
			</Routes>
		</>
	);
}

export default App;
