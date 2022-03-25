import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect( () => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const addToCartHandler = (addProduct) => {
        const exists = cart.find(product => product.id === addProduct.id);
        if(!exists){
            const newCart = [...cart, addProduct];
            setCart(newCart);
        }
    }

    const chooseAgainHandler = () => {
        setCart([]);
    }


    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product addToCartHandler={addToCartHandler} key={product.id} product={product}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart chooseAgainHandler={chooseAgainHandler} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;