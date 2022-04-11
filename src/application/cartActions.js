import { cartActions } from './cart';
export const handleAddProduct = (product, dispatch, counter) => {
	dispatch(cartActions.addProduct({ product, quantity: counter }));
};
export const handleDeleteProduct = (product, dispatch, counter) => {
	dispatch(cartActions.removeProduct({ product, quantity: counter }));
};

export const handleDeleteCart = (dispatch) => {
	dispatch(cartActions.removeAll());
};
