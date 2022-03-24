import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Headphones from './pages/Headphones/Headphones';
import Earphones from './pages/Earphones/Earphones';
import Speakers from './pages/Speakers/Speakers';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Checkout from './pages/Checkout/Checkout';
import Header from './components/Header/Header';
import useFetch from './hooks/useFetch';
import Footer from './components/Footer/Footer';
import CartModal from './components/CartModal/CartModal';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const { data: navbar } = useFetch('navbar');
	const { data: products } = useFetch('products');
	const { data: gridItems } = useFetch('grid-items');
	const filteredHeadphones = products.filter((element) => {
		if (element.id > 1 && element.id <= 4) {
			return element;
		}
	});

	const filteredEarphones = products.filter((element) => element.id === 1);
	const filteredHeroProduct = products.filter((element) => element.id === 4);
	const filteredSpeakers = products.filter((element) => {
		if (element.id > 4) {
			return element;
		}
	});

	const handleCartBtn = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Header navbar={navbar} handleCartBtn={handleCartBtn} />
			<CartModal open={isOpen} />
			<Routes>
				<Route
					path="/home"
					element={
						<Home
							filteredHeroProduct={filteredHeroProduct}
							gridItems={gridItems}
						/>
					}
				/>
				<Route path="/checkout" element={<Checkout />} />
				<Route
					path="/earphones"
					element={<Earphones filteredEarphones={filteredEarphones} />}
				/>
				<Route
					path="/headphones"
					element={<Headphones filteredHeadphones={filteredHeadphones} />}
				/>
				<Route
					path="/product-detail/:productId"
					element={<ProductDetail products={products} />}
				/>
				<Route
					path="/speakers"
					element={<Speakers filteredSpeakers={filteredSpeakers} />}
				/>
			</Routes>
			<Footer navbar={navbar} />
		</>
	);
}

export default App;
