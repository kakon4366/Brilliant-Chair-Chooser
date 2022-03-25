import React from 'react';
import './CartProduct.css';

const CartProduct = ({product}) => {
    const {name, img} = product;
    return (
        <div className='cart-product'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <span className='close-button'>X</span>
        </div>
    );
};

export default CartProduct;