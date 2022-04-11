import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../../application/cart';
const store = configureStore({
	reducer: cartSlice.reducer,
});
export default store;
