import * as types from '../constants/ActionTypes';
import {CLIENT_ID} from '../constants/Config';

export function fetchProducts() {
    return dispatch => {
        return fetch(`http://localhost:8080/products.json`)
            .then(response => response.json())
            .then(json => dispatch(receiveProducts(json)));
    };
}

export function receiveProducts(json) {
    return {
      type: types.RECEIVE_PRODUCTS,
      products: json.collection,
    };
}
