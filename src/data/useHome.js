import {useEffect, useState} from 'react'

const HOME_PAGE = `
{
  pageBy(uri: "/") {
    content(format: RENDERED)
    link
    title
    uri
    id
  }
}
`
const useHome = () => {
    const [home, setHome] = useState([])

    useEffect( () => {
        fetch("http://localhost/wordpress/graphql/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: HOME_PAGE })
          }).then(response => response.json())
            .then(home => setHome(home.data.pageBy))
        }, []);
    return [home];
}

export default useHome