import React from 'react';
import { Routes, Route } from 'react-router-dom';

import '../assets/styles/Main.css';

import Home from './pages/Home';
import Store from './pages/Store';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </main>
    );
};

export default Main;
