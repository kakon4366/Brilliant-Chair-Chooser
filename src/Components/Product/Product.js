import React from 'react';
import './Product.css';

const Product = ({product}) => {
    const {name, price, img} = product;
    return (
        <div className='product'>
            <img src={img} alt='' />
            <h3>{name}</h3>
            <h4>Price: $<span>{price}</span></h4>
            <button className='cart-button'>Add To Cart</button>
        </div>
    );
};

export default Product;