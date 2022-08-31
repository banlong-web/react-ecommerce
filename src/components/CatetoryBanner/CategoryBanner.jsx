import React from 'react'
import { Link } from 'react-router-dom'
import useCategoriesProduct from '../../data/useCategoriesProduct'

let categoriesData = [];
const CategoryBanner = () => {
    const categories = useCategoriesProduct();

    categories.map(item => (
        categoriesData = item
    ))
    // console.log(categoriesData);
    if (categoriesData.length > 0) {
        return (
            <div className='category-layout'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    {
                                        categoriesData.map(item => (
                                            (item.slug === "fruits" || item.slug === "vegetables") ? (
                                                <div className={`category-wrap category-${item.slug}`} key={item.slug}
                                                    style={{ 'backgroundImage': `url(${item.image.sourceUrl})` }}
                                                >
                                                    <div className='text'>
                                                        <h2>
                                                            <Link to={`shop/category/${item.slug}`}>{item.name}</Link>
                                                        </h2>
                                                    </div>
                                                </div>
                                            ) : null
                                        ))
                                    }
                                </div>
                                {
                                    categoriesData.map(item => (
                                        item.slug === "vegetables-2" ? (
                                            <div className='col-md-6' key={item.slug}>
                                                <div className={`category-wrap category-${item.slug}`} style={{ 'backgroundImage': `url(${item.image.sourceUrl})` }}>
                                                    <div className='text-center'>
                                                        <h2>{item.name}</h2>
                                                        <p>{item.description}</p>
                                                        <Link to={`shop/category/${item.slug}`}>Shop now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null
                                    ))
                                }
                            </div>
                        </div>
                        <div className='col-md-4'>
                            {
                                categoriesData.map(item => (
                                    item.slug === "juices" ? (
                                        <div className={`category-wrap category-${item.slug}`} key={item.slug}
                                            style={{ 'backgroundImage': `url(${item.image.sourceUrl})` }}
                                        >
                                            <div className='text'>
                                                <h2>
                                                    <Link to={`shop/category/${item.slug}`}>{item.name}</Link>
                                                </h2>
                                            </div>
                                        </div>
                                    ) : null
                                ))
                            }
                            {
                                categoriesData.map(item => (
                                    item.slug === "dried" ? (
                                        <div className={`category-wrap category-${item.slug}`} key={item.slug}
                                            style={{ 'backgroundImage': `url(${item.image.sourceUrl})` }}
                                        >
                                            <div className='text'>
                                                <h2>
                                                    <Link to={`shop/category/${item.slug}`}>{item.name}</Link>
                                                </h2>
                                            </div>
                                        </div>
                                    ) : null
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryBanner