import { createSlice } from '@reduxjs/toolkit';
import cloneDeep from 'lodash.clonedeep';
const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addProduct(state, action) {
			if (state.length === 0) {
				const product = cloneDeep(action.payload.product);
				product.quantity = action.payload.quantity;
				return [product];
			} else {
				const findProduct = state.find(
					(product) => product.id === action.payload.product.id
				);
				if (findProduct) {
					state.map((product) => {
						if (product.id === findProduct.id) {
							product.quantity += action.payload.quantity;
							return product;
						}
						return product;
					});
				} else {
					const product = cloneDeep(action.payload.product);
					product.quantity = action.payload.quantity;
					return [...state, product];
				}
			}
		},
		removeProduct(state, action) {
			if (action.payload.quantity === 1) {
				const newState = state.filter(
					(product) => product.id !== action.payload.product.id
				);
				return newState;
			} else {
				state.map((product) => {
					if (product.id === action.payload.product.id) {
						product.quantity -= 1;
						return product;
					}
					return product;
				});
			}
		},
		removeAll(state) {
			state = [];
			return state;
		},
	},
});
export const cartActions = cartSlice.actions;
export default cartSlice;
