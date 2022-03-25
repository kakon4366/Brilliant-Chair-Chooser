import React from 'react';
import './CartProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClose } from '@fortawesome/free-solid-svg-icons'

const CartProduct = ({product}) => {
    const {name, img} = product;
    return (
        <div className='cart-product'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <span className='close-button'>
                <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
            </span>
        </div>
    );
};

export default CartProduct;