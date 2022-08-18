import {useState, useEffect} from 'react'

const PRODUCTS_API = `
{
  products {
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
        salePrice(format: RAW)
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
        galleryImages {
          nodes {
            id
            link
            uri
          }
        }
        featuredImageDatabaseId
        featured
        description(format: RAW)
        date
        dateOnSaleTo
        dateOnSaleFrom
        averageRating
        manageStock
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}
`
// const url_api = "http://localhost/wordpress/graphql/";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch("http://localhost/wordpress/graphql/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: PRODUCTS_API })
          }).then(response => response.json())
            .then(products => setProducts(products.data.products.nodes))
        }, []);
    return [products];
}

export default useProducts