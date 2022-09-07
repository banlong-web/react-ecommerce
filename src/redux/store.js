import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productDetailReducer, productListReducer } from "./Reducers/ProductReducers";

const reducer = combineReducers({
    productlist: productListReducer,
    productdetail: productDetailReducer,
});

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;