import { actionTypes } from "../contanst/actionTypes";
import useProducts from "../../data/useProducts";

const initialState = {
    products: []
}
export const productReducer = (state = initialState, {type, payload}) => {
    // const productsAPI = useProducts();
    // if (productsAPI !== undefined) {
    //     initialState = productsAPI
    // }
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state;
    }
}