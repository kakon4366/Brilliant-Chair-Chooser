import React, { useState } from 'react';
import CartProduct from '../CartProduct/CartProduct';
import './Cart.css';

const Cart = ({cart, chooseAgainHandler}) => {
    const [chooseProduct, setChooseProduct] = useState([]);
    const {name, img} = chooseProduct;

    const chooseSingleProductHandler = () => {
        const index = Math.round(Math.random() * (cart.length - 1));
        const product = cart[index];
        setChooseProduct(product);
    }

    return (
        <div className='cart'>
            <h3>Selected Chair</h3>
            <br />
            <div className='product-details'>
               {
                   cart.map(product => <CartProduct key={product.id} product={product}></CartProduct>)
               }
            </div>

            <div className='choose-product'>
                <img src={img ? img : ''} alt="" />
                <h3>{name ? name : ''}</h3>
            </div>
            <button onClick={cart.length === 0 ? undefined : chooseSingleProductHandler} className='choose-button choose-1'>Choose 1 For Me</button>
            <button onClick={ () => chooseAgainHandler(setChooseProduct)} className='choose-button choose-again'>Choose Again</button>

        </div>
    );
};

export default Cart;