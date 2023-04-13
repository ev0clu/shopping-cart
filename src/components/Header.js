import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import { FaShoppingCart } from 'react-icons/fa';

const Header = ({ cartItems }) => {
    const [cartCounter, setCartCounter] = useState(0);

    useEffect(() => {
        const cartSumQuantity = cartItems.reduce(
            (total, item) => total + item.quantity,
            0
        );

        setCartCounter(cartSumQuantity);
    }, [cartItems]);

    return (
        <header>
            <h1 className="logo">
                <Link to="/">T-store</Link>
            </h1>
            <ul className="nav-links">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/store">Store</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="cart-icon">
                    <Link to="/cart">
                        {cartCounter > 0 && (
                            <div className="cart-icon-counter">{cartCounter}</div>
                        )}

                        <FaShoppingCart />
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
