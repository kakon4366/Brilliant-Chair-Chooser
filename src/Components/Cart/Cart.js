import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart'>
            <h3>Selected Chair</h3>
            <br />
            <button className='choose-button choose-1'>Choose 1 For Me</button>
            <button className='choose-button choose-again'>Choose Again</button>

        </div>
    );
};

export default Cart;