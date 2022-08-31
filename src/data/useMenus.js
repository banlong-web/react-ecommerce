import { useState, useEffect } from "react";

const MENUS = `
{
    menus {
        nodes {
          locations
          name
          id
          menuItems {
            nodes {
              path
              label
              locations
              parentId
              databaseId
              id
              uri
            }
          }
        }
      }
}`

const useMenus = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch("http://localhost/wordpress/graphql/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: MENUS })
        }).then(response => response.json())
        .then(menus => setMenus(menus.data.menus.nodes))
    },[]);
    return [menus];
}

export default useMenus