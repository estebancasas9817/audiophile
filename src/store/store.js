import { createStore } from 'redux';
const counterReducer = (state = [], action) => {
	switch (action.type) {
		case 'addProduct':
			if (state.length === 0) {
				const product = action.payload;
				product.quantity = action.quantity;
				return [product];
			} else {
				const findProduct = state.find(
					(product) => product.id === action.payload.id
				);
				if (findProduct) {
					const newState = state.map((product) => {
						if (product.id === findProduct.id) {
							product.quantity += action.quantity;
							return product;
						}
						return product;
					});
					return newState;
				} else {
					const quantity = action.payload.quantity;
					const product = action.payload;
					product.quantity = quantity + action.quantity;
					return [...state, product];
				}
			}
		case 'deleteProduct':
			if (action.quantity === 1) {
				const newState = state.filter(
					(product) => product.id !== action.payload.id
				);
				return newState;
			} else {
				const newState = state.map((product) => {
					if (product.id === action.payload.id) {
						product.quantity -= 1;
						return product;
					}
					return product;
				});
				return newState;
			}

		case 'removeAll':
			return [];
		default:
			return state;
	}
};
const store = createStore(counterReducer);

export default store;
