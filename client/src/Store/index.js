import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './Reducers/product';

export default configureStore({
    reducer: {
        product: productsReducer
    }
})