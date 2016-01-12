import {combineReducers} from 'redux';
import products from '../reducers/products';

const rootReducer = combineReducers({
    products
});

export default rootReducer;
