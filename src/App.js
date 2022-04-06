import './App.css';
import React, { useEffect, useState } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from './store/cart';
let isInitial = true;
function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenCheckModal, setIsOpenCheckModal] = useState(false);
	const { data: navbar } = useFetch('navbar');
	const { data: products } = useFetch('products');
	const { data: gridItems } = useFetch('grid-items');
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
		dispatch(cartActions.addProduct({ product, quantity: counter }));
	};
	const onChangeItem = (product, flag, counter = 1) => {
		if (flag) {
			dispatch(cartActions.addProduct({ product, quantity: 1 }));
		} else {
			dispatch(cartActions.removeProduct({ product, quantity: counter }));
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
		dispatch(cartActions.removeAll());
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
