import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constants/ProductConstants";

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { 
                ...state,
                loading: true, 
                products: [] 
            };
        case PRODUCT_LIST_SUCCESS:
            return { 
                ...state,
                loading: false,
                products: action.playload 
            };
        case PRODUCT_LIST_FAIL:
            return { 
                ...state,
                loading: false, 
                error: action.playload 
            };
        default: return {...state};
    }
}