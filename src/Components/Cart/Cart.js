import React from 'react';
import CartProduct from '../CartProduct/CartProduct';
import './Cart.css';

const Cart = ({cart}) => {

    return (
        <div className='cart'>
            <h3>Selected Chair</h3>
            <br />
            <div className='product-details'>
               {
                   cart.map(product => <CartProduct key={product.id} product={product}></CartProduct>)
               }
            </div>
            <button className='choose-button choose-1'>Choose 1 For Me</button>
            <button className='choose-button choose-again'>Choose Again</button>

        </div>
    );
};

export default Cart;