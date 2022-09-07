import axios from "axios";
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constants/ProductConstants"

export const listProduct = (visable) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const data  = await 
        axios("http://localhost/wordpress/graphql/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            data: JSON.stringify({query:  `
            {
              products(first: ${visable}) {
                nodes {
                  ... on VariableProduct {
                    id
                    name
                  }
                  ... on ExternalProduct {
                    id
                    name
                  }
                  ... on GroupProduct {
                    id
                    name
                  }
                  ... on SimpleProduct {
                    id
                    name
                    uri
                    slug
                    sku
                    shortDescription(format: RENDERED)
                    salePrice(format: FORMATTED)
                    shippingClassId
                    shippingRequired
                    shippingTaxable
                    reviewCount
                    reviews {
                      averageRating
                      edges {
                        rating
                      }
                    }
                    regularPrice(format: FORMATTED)
                    price(format: FORMATTED)
                    onSale
                    link
                    featuredImageDatabaseId
                    description(format: RAW)
                    date
                    dateOnSaleTo
                    dateOnSaleFrom
                    averageRating
                    manageStock
                    image {
                      sourceUrl(size: MEDIUM)
                    }
                    databaseId
                    stockQuantity
                    stockStatus
                  }
                }
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
              }
            }
            `})
        })
        .then((response) => response.data.data.products.nodes)
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            playload: data
        })
        return data;
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            playload:
                error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
}


export const detailProduct = (slug) => async (dispatch) => {
  try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST })
      const data  = await 
      axios(`http://localhost/wordpress/graphql/`, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          data: JSON.stringify({query: `
          {
            product(id: "${slug}", idType: SLUG) {
              id
              name
              slug
              image {
                sourceUrl(size: LARGE)
                title(format: RENDERED)
                description(format: RENDERED)
              }
              onSale
              productCategories {
                nodes {
                  id
                  name
                }
              }
              reviews {
                averageRating
              }
              reviewCount
              reviewsAllowed
            }
          }
          `})
      })
      .then((response) => response.data.data.product)
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        playload: data
      })
      return data;
  } catch (error) {
      dispatch({
          type: PRODUCT_DETAILS_FAIL,
          playload:
              error.response && error.response.data.message ? error.response.data.message : error.message,
      });
  }
}

// export const getProducts = (numberShow) => {
//   return dispatch => {
//     dispatch
//   }
// }