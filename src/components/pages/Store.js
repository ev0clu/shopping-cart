import React from 'react';

import '../../assets/styles/Store.css';

import Button from '../elements/Button';

const Store = ({
    items,
    quantity,
    handleIncrementStoreClick,
    handleDecrementStoreClick,
    handleAddToCartClick
}) => {
    return (
        <div className="store">
            <h1>2023 Sales</h1>
            <div className="product-group">
                {items.map((item, index) => {
                    return (
                        <div
                            key={`product${index}`}
                            className="product-item-group"
                            data-index={index}
                        >
                            <img src={item.image} alt={item.title} />
                            <div className="product-item-info">
                                <p>{item.title}</p>
                                <p>{item.price} EUR</p>
                            </div>
                            <div className="btn-product-group">
                                <Button
                                    className="btn-decrement"
                                    text="-"
                                    handleClick={handleDecrementStoreClick}
                                />
                                <div className="quantity">{quantity[index]}</div>
                                <Button
                                    className="btn-increment"
                                    text="+"
                                    handleClick={handleIncrementStoreClick}
                                />
                            </div>
                            <Button
                                className="btn-add-cart"
                                text="Add to cart"
                                handleClick={handleAddToCartClick}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Store;
