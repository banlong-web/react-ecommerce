import { useEffect, useState } from 'react'

const CATEGORIES_PRODUCT = `
{
    productCategories {
      nodes {
        id
        link
        slug
        taxonomyName
        description
        image {
          sourceUrl
          sizes
          link
        }
        name
        termTaxonomyId
        count
        uri
      }
    }
}
`
const useCategoriesProduct = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetch("http://localhost/wordpress/graphql/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: CATEGORIES_PRODUCT })
    }).then(response => response.json())
    .then(categories => setCategories(categories.data.productCategories.nodes))
  }, []);
  return [categories];
}

export default useCategoriesProduct