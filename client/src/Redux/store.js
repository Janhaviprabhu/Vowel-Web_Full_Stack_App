
import {
    legacy_createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import { cartReducer } from './cart/cartreducer';
import { productReducer } from './product/productreducer';
import { authReducer } from './auth/authreducer';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({

    cart: cartReducer,
    product: productReducer,
    auth: authReducer,
    // labcart: labcartReducer,
});


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));