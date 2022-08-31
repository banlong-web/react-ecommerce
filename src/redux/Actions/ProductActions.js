import axios from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constants/ProductConstants"

const PRODUCTS_API = `
{
  products(first: 50) {
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
`
export const listProduct = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const data  = await 
        axios("http://localhost/wordpress/graphql/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            data: JSON.stringify({query: PRODUCTS_API})
        })
        .then((response) => response.data.data.products.nodes)
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            playload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            playload:
                error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
}


export const detailProduct = (slug) => async (dispatch) => {
  const PRODUCT_API = `
    product(id: "${slug}", idType: SLUG) {
      id
      name
      slug
      ... on SimpleProduct {
        id
        name
      }
    }`
  try {
      dispatch({ type: PRODUCT_LIST_REQUEST })
      const data  = await 
      axios(`http://localhost/wordpress/graphql/`, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          data: JSON.stringify({query: PRODUCT_API})
      })
      .then((response) => console.log(response))
      dispatch({
          type: PRODUCT_LIST_SUCCESS,
          playload: data
      })
  } catch (error) {
      dispatch({
          type: PRODUCT_LIST_FAIL,
          playload:
              error.response && error.response.data.message ? error.response.data.message : error.message,
      });
  }
}