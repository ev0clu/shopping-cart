import React, { useEffect, useState } from 'react';

import '../../assets/styles/Cart.css';
import Button from '../elements/Button';

const Cart = ({
    cartItems,
    handleIncrementCartClick,
    handleDecrementCartClick,
    handleRemoveFromCartClick
}) => {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const sumTotal = () => {
            const cartSumPrice = cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );

            // Fix javascript rounding issue e.g. "0.1 + 0.3"
            return Math.round(cartSumPrice * 1000) / 1000;
        };

        setTotalPrice(sumTotal());
    }, [cartItems]);

    const handleCheckoutClick = () => {
        alert('Thank you for purchasing');
    };

    return (
        <div className="cart">
            {cartItems.length === 0 && (
                <div className="cart-empty">Your cart is empty!</div>
            )}
            {cartItems.length > 0 && (
                <div className="cart-group">
                    {cartItems.map((item, index) => {
                        return (
                            <div
                                key={`cart${index}`}
                                className="cart-item-group"
                                data-index={index}
                            >
                                <img src={item.image} alt={item.title} />
                                <div className="cart-item-info">
                                    <p>{item.title}</p>
                                    <p>{item.price} EUR</p>
                                </div>
                                <div className="btn-cart-group">
                                    <Button
                                        className="btn-decrement"
                                        text="-"
                                        handleClick={handleDecrementCartClick}
                                    />
                                    <div className="quantity">{item.quantity}</div>
                                    <Button
                                        className="btn-increment"
                                        text="+"
                                        handleClick={handleIncrementCartClick}
                                    />
                                    <Button
                                        className="btn-remove-cart"
                                        text="Remove from cart"
                                        handleClick={handleRemoveFromCartClick}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
            {cartItems.length > 0 && (
                <div className="payment">
                    <h1>Payment</h1>
                    <div className="cart-sum">
                        <div>Total value:</div>
                        <div>{totalPrice} EUR</div>
                    </div>
                    <Button
                        className="btn-checkout"
                        text="Checkout"
                        handleClick={handleCheckoutClick}
                    />
                </div>
            )}
        </div>
    );
};

export default Cart;
