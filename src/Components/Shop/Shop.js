import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    
    useEffect( () => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    console.log(products);

    return (
        <div className='shop-container'>
            <div className='product-container'>
                
            </div>
            <div className='cart-container'>
                This is cart area
            </div>
        </div>
    );
};

export default Shop;