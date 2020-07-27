import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';
import { addItem, updateItem, removeItem } from './cartHelpers';

import '../styles.css';

const Card = ({
    product,
    showViewProductButton = true,
    showAddToCartButton = true,
    cartUpdate = false,
    showRemoveProductButton = false,
    setRun = f => f,
    run = undefined
    // changeCartSize
    }) => {
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);
    
    const showViewButton = showViewProductButton => {
        return (
        showViewProductButton && (
            <Link to={`/product/${product._id}`} className="">
                <ShowImage item={product} url="product" />
            </Link>
        )
        );
    };
    
    const addToCart = () => {
        // console.log('added');
        addItem(product, setRedirect(true));
    };
    
    const shouldRedirect = redirect => {
        if (redirect) {
        return <Redirect to="/cart" />;
        }
    };
    
    const showAddToCartBtn = showAddToCartButton => {
        return (
        showAddToCartButton && (
            <span onClick={addToCart} className=" btn badge badge-secondary">
                Add to cart
            </span>
        )
        );
    };
    
    const showSold = quantity => {
        return quantity > 0 ? (
            showAddToCartBtn(showAddToCartButton)
        ) : (
            <span className="badge badge-secondary">Sold</span>
        );
    };
    
    const handleChange = productId => event => {
        setRun(!run); // run useEffect in parent Cart
        setCount(event.target.value < 1 ? 1 : event.target.value);
        if (event.target.value >= 1) {
        updateItem(productId, event.target.value);
        }
    };
    
    const showCartUpdateOptions = cartUpdate => {
        return (
            cartUpdate 
        );
    };

    const showRemoveButton = showRemoveProductButton => {
        return (
        showRemoveProductButton && (
            <button
                onClick={() => {
                    removeItem(product._id);
                    setRun(!run); // run useEffect in parent Cart
                }}
                className="btn btn-outline-danger mt-2 mb-2"
            >
                Remove Product
            </button>
        )
        );
    };
    
    return (
        <div className="card">
            {showViewButton(showViewProductButton)}
            <div className="card-body">
                {shouldRedirect(redirect)}
                <p className="card-text card-p">{product.name}</p>
                <p className="card-text card-p">${product.price}</p>
                <div className='showSold'>
                    {showSold(product.quantity)}
                </div>
                <br />
                {showRemoveButton(showRemoveProductButton)}
                
                {showCartUpdateOptions(cartUpdate)}
            </div>
        </div>
    );
};
    
export default Card;


        // <div className="card ">
        //     <div className="card-header card-header-1 name">{product.name}</div>
        //     <div className="card-body">
        //         {shouldRedirect(redirect)}
        //         <ShowImage item={product} url="product" />
        //         <p className="card-p  mt-2">{product.description.substring(0, 100)} </p>
        //         <p className="card-p black-10">$ {product.price}</p>
        //         {/* <p className="card-p black-9">Category: {product.category && product.category.name}</p> */}
        //         {/* <p className="card-p black-8">Added {moment(product.createdAt).fromNow()}</p> */}
        //         {showSold(product.quantity)}
        //         <br />
        
        //         {showViewButton(showViewProductButton)}
        
        //         {showAddToCartBtn(showAddToCartButton)}
        
        //         {showRemoveButton(showRemoveProductButton)}
        
        //         {showCartUpdateOptions(cartUpdate)}
        //     </div>
        // </div>

