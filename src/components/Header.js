import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Header.css';

const Header = () => {
    return (
        <header>
            <h1>T-store</h1>
            <ul className="nav-items">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/product">
                    <li>Product</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </header>
    );
};

export default Header;
