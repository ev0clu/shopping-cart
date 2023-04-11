import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import '../assets/styles/Main.css';

import Home from './pages/Home';
import Store from './pages/Store';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

const Main = ({
    items,
    quantity,
    handleIncrementClick,
    handleDecrementClick,
    handleAddToCartClick
}) => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/store"
                    element={
                        <Store
                            items={items}
                            quantity={quantity}
                            handleIncrementClick={handleIncrementClick}
                            handleDecrementClick={handleDecrementClick}
                            handleAddToCartClick={handleAddToCartClick}
                        />
                    }
                />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </main>
    );
};

export default Main;
