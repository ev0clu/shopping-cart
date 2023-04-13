import React, { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';

import './assets/styles/App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const App = () => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartCounter, setCartCounter] = useState(0);
    const [quantity, setQuantity] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products', {
                mode: 'cors'
            });
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            const filteredData = data.filter(
                (element) =>
                    element.category === `men's clothing` ||
                    element.category === `women's clothing`
            );

            setItems(filteredData);
        } catch (err) {
            return console.log(err);
        }
    };

    const handleAddToCartClick = (e) => {
        const index = Number(e.target.parentNode.getAttribute('data-index'));

        const cart = [...cartItems];

        cart.push({
            image: items[index].image,
            title: items[index].title,
            price: items[index].price,
            quantity: quantity[index]
        });
        setCartItems(cart);

        const cartCount = cart.reduce((sum, { quantity }) => sum + quantity, 0);
        setCartCounter(cartCount);
    };

    const handleRemoveFromCartClick = (e) => {
        const index = Number(
            e.target.parentNode.parentNode.getAttribute('data-index')
        );

        const cart = [...cartItems];

        cart.splice(index, 1);
        setCartItems(cart);

        const cartCount = cart.reduce((sum, { quantity }) => sum + quantity, 0);
        setCartCounter(cartCount);
    };

    const handleIncrementStoreClick = (e) => {
        const index = Number(
            e.target.parentNode.parentNode.getAttribute('data-index')
        );

        if (quantity[index] < 10) {
            const newQuantity = [...quantity];
            newQuantity[index] = newQuantity[index] + 1;
            setQuantity(newQuantity);
        }
    };

    const handleDecrementStoreClick = (e) => {
        const index = Number(
            e.target.parentNode.parentNode.getAttribute('data-index')
        );

        if (quantity[index] > 1) {
            const newQuantity = [...quantity];
            newQuantity[index] = newQuantity[index] - 1;
            setQuantity(newQuantity);
        }
    };

    const handleIncrementCartClick = (e) => {
        const index = Number(
            e.target.parentNode.parentNode.getAttribute('data-index')
        );

        if (cartItems[index].quantity < 10) {
            const newQuantity = [...cartItems];
            newQuantity[index].quantity = newQuantity[index].quantity + 1;
            setCartItems(newQuantity);

            const cartCount = cartItems.reduce(
                (sum, { quantity }) => sum + quantity,
                0
            );
            setCartCounter(cartCount);
        }
    };

    const handleDecrementCartClick = (e) => {
        const index = Number(
            e.target.parentNode.parentNode.getAttribute('data-index')
        );

        if (cartItems[index].quantity > 1) {
            const newQuantity = [...cartItems];
            newQuantity[index].quantity = newQuantity[index].quantity - 1;
            setCartItems(newQuantity);

            const cartCount = newQuantity.reduce(
                (sum, { quantity }) => sum + quantity,
                0
            );
            setCartCounter(cartCount);
        }
    };

    const handleCheckoutClick = () => {
        alert('Thank you for purchasing');
    };

    return (
        <HashRouter>
            <div className="App">
                <Header cartCounter={cartCounter} />
                <Main
                    items={items}
                    cartItems={cartItems}
                    quantity={quantity}
                    handleIncrementStoreClick={handleIncrementStoreClick}
                    handleDecrementStoreClick={handleDecrementStoreClick}
                    handleAddToCartClick={handleAddToCartClick}
                    handleIncrementCartClick={handleIncrementCartClick}
                    handleDecrementCartClick={handleDecrementCartClick}
                    handleRemoveFromCartClick={handleRemoveFromCartClick}
                    handleCheckoutClick={handleCheckoutClick}
                />
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;
