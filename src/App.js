import './App.css';
import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

import ProductDetail from './pages/ProductDetail/ProductDetail';
import Checkout from './pages/Checkout/Checkout';
import Header from './components/Header/Header';
import useFetch from './hooks/useFetch';
import Footer from './components/Footer/Footer';
import CartModal from './components/CartModal/CartModal';
import CheckoutModal from './components/CheckoutModal/CheckoutModal';
import ProductCategory from './pages/ProductCategory/ProductCategory';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenCheckModal, setIsOpenCheckModal] = useState(false);
	const { data: navbar } = useFetch('navbar');
	const { data: products } = useFetch('products');
	const { data: gridItems } = useFetch('grid-items');

	const filteredHeroProduct = products.filter((element) => element.id === 4);

	const handleCartBtn = () => {
		setIsOpen(!isOpen);
	};
	const handleCheckModal = () => {
		setIsOpenCheckModal(!isOpenCheckModal);
	};
	return (
		<>
			<Header navbar={navbar} handleCartBtn={handleCartBtn} />
			<CartModal open={isOpen} handleCartBtn={handleCartBtn} />
			<CheckoutModal
				handleCheckModal={handleCheckModal}
				open={isOpenCheckModal}
			/>
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
				<Route path="/" element={<Navigate to="/home" replace />} />
				<Route
					path="/checkout"
					element={<Checkout handleCheckModal={handleCheckModal} />}
				/>

				<Route
					path="/product-detail/:productId"
					element={<ProductDetail products={products} />}
				/>

				<Route
					path="/category/:category"
					element={<ProductCategory products={products} />}
				/>
			</Routes>

			<Footer navbar={navbar} />
		</>
	);
}

export default App;
