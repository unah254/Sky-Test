import { combineReducers } from 'redux';
import fetchProductsReducer from './productsReducer';

const rootReducer = combineReducers({
    fetchProducts: fetchProductsReducer
});

export default rootReducer;