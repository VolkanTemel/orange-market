import React from 'react';
import Product from './product/Product';

import './Products.css';

const Products = (props) => {
    return (
        <div className={ 'Products' }>
            <Product addToCart={ props.addToCart } />
        </div>
    )
}

export default Products;
