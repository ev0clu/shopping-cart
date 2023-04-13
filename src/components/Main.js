import React from 'react';
import { Routes, Route } from 'react-router-dom';

import '../assets/styles/Main.css';

import ScrollToTop from '../components/ScrollToTop';
import Home from './pages/Home';
import Store from './pages/Store';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

const Main = ({
    items,
    cartItems,
    handleAddToCartClick,
    handleIncrementCartClick,
    handleDecrementCartClick,
    handleRemoveFromCartClick
}) => {
    return (
        <main>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/store"
                    element={
                        <Store
                            items={items}
                            handleAddToCartClick={handleAddToCartClick}
                        />
                    }
                />
                <Route path="/contact" element={<Contact />} />
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cartItems={cartItems}
                            handleIncrementCartClick={handleIncrementCartClick}
                            handleDecrementCartClick={handleDecrementCartClick}
                            handleRemoveFromCartClick={handleRemoveFromCartClick}
                        />
                    }
                />
            </Routes>
        </main>
    );
};

export default Main;
