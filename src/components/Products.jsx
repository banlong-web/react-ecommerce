// import React, { Component } from 'react'
// import HTMLReactParser from 'html-react-parser';
// import StarRatings from 'react-star-ratings';

// import { Link } from "react-router-dom"

// import { connect } from 'react-redux'
// import { addToCart, subtract, add } from '../redux/actions/action';

// class Products extends Component {
//     addToCart = (e, itemname) => {
//         this.props.dispatch(addToCart(itemname));
//     };
    
//     add = (e, itemname) => {
//         this.props.dispatch(add(itemname));
//     };
    
//     subtract = (e, itemname) => {
//         this.props.dispatch(subtract(itemname));
//     };

//     render() {
//         const { item } = this.props;
//         const itemList = item.sort((a,b)=>a.databaseId > b.databaseId ? 1 : -1).map((i, j) => {
//           return (
//             <div className="product-card col-sm-12 col-md-6 col-xl-4" data-cart-product key={j}>
//                 <div className='product-card-img'>
//                     <Link to={`/shop/${i.slug}`}>
//                         <img src={i.image.sourceUrl !== null ? i.image.sourceUrl : ''} alt="" />
//                     </Link>
//                 </div>
//                 <div className='product-card-content'>
//                     <h3>
//                         <Link to={`/shop/${i.slug}`}>{i.name}</Link>
//                     </h3>
//                     <p>{i.description}</p>
//                 </div>
//                 <div className='product-card-bootom'>
//                     <div className='price-and-rate'>
//                         <div className='price'>
//                             {HTMLReactParser(String(i.price))}
//                         </div>
//                         <div className='rate'>
//                             {
//                                 <StarRatings 
//                                 rating={i.reviews.averageRating}
//                                 starRatedColor="yellow"
//                                 starDimension = "15px"
//                                     name = 'rating'
//                                     starSpacing = "5px"
//                                 />
//                             }
//                         </div>
//                     </div>
//                     <div className='add-to-cart'>
//                         {!i.cartCount ? (
//                             <button onClick={e => this.addToCart(e, i.itemname)}>
//                                 <Link to='/cart'>Add To Cart</Link>
//                                 {/* <a href="/cart">Add To Cart</a> */}
//                             </button>
//                         ) : (
//                             <div className="number">
//                             <button onClick={e => this.subtract(e, i.itemname)}>-</button>
//                             <button>{i.cartCount}</button>
//                             <button onClick={e => this.add(e, i.itemname)}>+</button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//              </div>
//           );
//         });
//         return <div className='row'>{itemList}</div>;
//       }
// }
// // const Products = () => {
// //     // const addToCart = (e, itemname) => {
// //     //     return dispatch(addToCart(itemname));
// //     // }
// //     // const products = useProducts()
// //     // products.map(item => (
// //     //     productsNotNull = item
// //     // ))
// //     // if (productsNotNull !== null) {
// //     //     return (
// //     //         <div className="row">
// //     //             {
// //     //                 productsNotNull.map(item => (
// //     //                     <div className='product-card col-sm-12 col-md-6 col-xl-4' key={item.id}>
// //     //                         <div className='product-card-img'>
// //     //                             <Link to={`/shop/${item.slug}`}><img src={item.image.sourceUrl !== null ? item.image.sourceUrl : ''} alt="" /></Link>
// //     //                         </div>
// //     //                         <div className='product-card-content'>
// //     //                             <h3>
// //     //                             <Link to={`/shop/${item.slug}`}>{item.name}</Link>
// //     //                             </h3>
// //     //                             <p>{item.description}</p>
// //     //                         </div>
// //     //                         <div className='product-card-bootom'>
// //     //                             <div className='price-and-rate'>
// //     //                                 <div className='price'>
// //     //                                     {HTMLReactParser(item.price)}
// //     //                                 </div>
// //     //                                 <div className='rate'>
// //     //                                     {
// //     //                                         <StarRatings 
// //     //                                         rating={item.reviews.averageRating}
// //     //                                         starRatedColor="yellow"
// //     //                                         starDimension = "15px"
// //     //                                         name = 'rating'
// //     //                                         starSpacing = "5px"
// //     //                                         />
// //     //                                     }
// //     //                                 </div>
// //     //                             </div>
// //     //                             <div className='add-to-cart'>
// //     //                                 <a href="#" className='button'>Add To Cart</a>
// //     //                             </div>
// //     //                         </div>
// //     //                     </div>
// //     //                 ))
// //     //             }
// //     //         </div>
// //     //     );
// //     // }
// // }

// const mapStateToProps = state => ({
//     item: state.products.item,
//     cart: state.products.cart,
//     total: state.products.total
// });

// export default connect(mapStateToProps)(Products);