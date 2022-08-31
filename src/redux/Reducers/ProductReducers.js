import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constants/ProductConstants";


// LIST PRODUCT
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

// DETAIL PRODUCT
export const productDetailReducer = (state = { product: {reviews: []} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST: 
            return {
                ...state,
                loading: true,
            }
        case PRODUCT_DETAILS_SUCCESS: 
            return {
                ...state,
                loading: false,
                product: action.playload
            }
        case PRODUCT_DETAILS_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.playload
            }
        default: return {...state};
    }
}