import React from 'react'
import useHome from '../data/useHome'
import HTMLReactParser from 'html-react-parser';

var itemLength = '';
const Home = () => {
    const home = useHome();
    home.map(item => (
        itemLength = item.length
    ))
    if (itemLength !== 0) {
        return (
            home.map(item => (
                <div key={item}>
                    <h1>{item.title}</h1>
                    {HTMLReactParser(item.content)}
                </div>
            ))
        )
    }
}

export default Home