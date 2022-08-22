import {actionTypes} from '../contanst/actionTypes'

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        playload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        playload: product
    }
}

export const removeSelectedProduct = (product) => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT,
        playload: product
    }
}