import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Header.css';
import { BsCartFill } from 'react-icons/bs';

const Header = () => {
    return (
        <header>
            <h1 className="logo">T-store</h1>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <ul className="nav-cart">
                <li>
                    <Link to="/cart" className="cart">
                        <BsCartFill />
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
