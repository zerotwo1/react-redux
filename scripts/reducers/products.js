import * as types from '../constants/ActionTypes';

function products(state = {
    items: [],
}, action) {
    switch (action.type) {
    case types.RECEIVE_PRODUCTS:
        return Object.assign({}, state, {
            items: action.products,
        });
    default:
        return state;
    }
}

export default products;
