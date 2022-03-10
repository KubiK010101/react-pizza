import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './reducers/productsSlice';
import cartReducer from './reducers/cartSlice';

export default configureStore({
  reducer: {
      products: productsReducer,
      cart: cartReducer
  },
})