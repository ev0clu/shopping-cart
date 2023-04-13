import React from 'react';
import { Routes, Route } from 'react-router-dom';

import '../assets/styles/Main.css';

import Home from './pages/Home';
import Store from './pages/Store';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

const Main = ({
    items,
    cartItems,
    quantity,
    handleIncrementStoreClick,
    handleDecrementStoreClick,
    handleAddToCartClick,
    handleIncrementCartClick,
    handleDecrementCartClick,
    handleRemoveFromCartClick,
    handleCheckoutClick
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
                            handleIncrementStoreClick={handleIncrementStoreClick}
                            handleDecrementStoreClick={handleDecrementStoreClick}
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
                            handleCheckoutClick={handleCheckoutClick}
                        />
                    }
                />
            </Routes>
        </main>
    );
};

export default Main;
