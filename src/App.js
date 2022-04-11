import './App.css';
import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './infrastructure/pages/Home/Home';
import ProductDetail from './infrastructure/pages/ProductDetail/ProductDetail';
import Checkout from './infrastructure/pages/Checkout/Checkout';
import Header from './infrastructure/shared/components/Header/Header';
import useFetch from './infrastructure/hooks/useFetch';
import Footer from './infrastructure/shared/components/Footer/Footer';
import CartModal from './infrastructure/shared/components/CartModal/CartModal';
import CheckoutModal from './infrastructure/pages/Checkout/components/CheckoutModal/CheckoutModal';
import ProductCategory from './infrastructure/pages/ProductCategory/ProductCategory';
import { useSelector, useDispatch } from 'react-redux';
import {
	handleAddProduct,
	handleDeleteProduct,
	handleDeleteCart,
} from './application/cartActions';
let isInitial = true;
function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenCheckModal, setIsOpenCheckModal] = useState(false);
	const navbar = useFetch('navbar');
	const products = useFetch('products');
	const gridItems = useFetch('grid-items');
	const dispatch = useDispatch();
	const cartProducts = useSelector((state) => state);
	const [counter, setCounter] = useState(1);
	const filteredHeroProduct = products.filter((element) => element.id === 4);
	const handlerModal = (modal) => {
		modal ? setIsOpen(!isOpen) : setIsOpenCheckModal(!isOpenCheckModal);
	};

	useEffect(() => {
		const msg = () => {
			console.log('Entra use effect');
		};
		if (isInitial) {
			console.log('acaaa');
			isInitial = false;
			return;
		}
		msg();
	}, [cartProducts]);

	const addProduct = (product, counter) => {
		handleAddProduct(product, dispatch, counter);
	};
	const onChangeItem = (product, flag, counter = 1) => {
		if (flag) {
			handleAddProduct(product, dispatch, 1);
		} else {
			handleDeleteProduct(product, dispatch, counter);
		}
	};
	const onCounter = (type) => {
		if (type) setCounter((prevState) => prevState + 1);
		else {
			if (counter === 1) return;
			else setCounter((prevState) => prevState - 1);
		}
	};
	const restartCounter = () => {
		setCounter(1);
	};

	const removeCart = () => {
		handleDeleteCart(dispatch);
	};
	let total = 0;
	if (cartProducts.length > 0) {
		total = cartProducts?.reduce(
			(prev, curr) => prev + curr.price * curr.quantity,
			0
		);
	}
	return (
		<>
			<Header navbar={navbar} handlerModal={handlerModal} />
			<CartModal
				open={isOpen}
				handlerModal={handlerModal}
				cartProducts={cartProducts}
				onCounter={onCounter}
				counter={counter}
				removeCart={removeCart}
				onChangeItem={onChangeItem}
				total={total}
			/>

			<CheckoutModal
				open={isOpenCheckModal}
				handlerModal={handlerModal}
				total={total}
				cartProducts={cartProducts}
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
					element={
						<Checkout
							handlerModal={handlerModal}
							cartProducts={cartProducts}
							total={total}
						/>
					}
				/>

				<Route
					path="/product-detail/:productId"
					element={
						<ProductDetail
							products={products}
							addProduct={addProduct}
							handlerModal={handlerModal}
							onCounter={onCounter}
							counter={counter}
							restartCounter={restartCounter}
						/>
					}
				/>

				<Route
					path="/category/:category"
					element={
						<ProductCategory
							products={products}
							addProduct={addProduct}
							restartCounter={restartCounter}
						/>
					}
				/>
			</Routes>

			<Footer navbar={navbar} />
		</>
	);
}

export default App;
