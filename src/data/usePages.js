import { useState, useEffect } from "react";

const PAGES = `
{
    pages {
        nodes {
          id
          link
          slug
          uri
          title(format: RENDERED)
          date
          pageId
          content(format: RENDERED)
          isFrontPage
        }
    }
}
`

const usePages = () => {
    const [pages, setPages] = useState([])

    useEffect( () => {
        fetch("http://localhost/wordpress/graphql/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: PAGES })
          }).then(response => response.json())
            .then(pages => setPages(pages.data.pages.nodes))
        }, []);
    return [pages];
}

export default usePages