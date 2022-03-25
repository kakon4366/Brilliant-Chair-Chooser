import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    console.log(cart);
    return (
        <div className='cart'>
            <h3>Selected Chair</h3>
            <br />
            <div className='product-details'>
               
            </div>
            <button className='choose-button choose-1'>Choose 1 For Me</button>
            <button className='choose-button choose-again'>Choose Again</button>

        </div>
    );
};

export default Cart;