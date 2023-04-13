import React, { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';

import './assets/styles/App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const App = () => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);

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
        const storeIndex = Number(e.target.parentNode.getAttribute('data-index'));
        const itemName = e.target.parentNode.children[1].firstChild.textContent;
        const quantity = Number(
            e.target.parentNode.children[2].children[1].textContent
        );

        let isItem = false;
        let itemIndex = 0;

        const cart = [...cartItems];

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].title === itemName) {
                isItem = true;
                itemIndex = i;
                break;
            }
        }

        if (!isItem) {
            cart.push({
                image: items[storeIndex].image,
                title: items[storeIndex].title,
                price: items[storeIndex].price,
                quantity: quantity
            });
        } else {
            cart[itemIndex].quantity += quantity;
        }
        setCartItems(cart);
    };

    const handleRemoveFromCartClick = (e) => {
        const index = Number(
            e.target.parentNode.parentNode.getAttribute('data-index')
        );

        const cart = [...cartItems];

        cart.splice(index, 1);
        setCartItems(cart);
    };

    const handleIncrementCartClick = (e) => {
        const index = Number(
            e.target.parentNode.parentNode.getAttribute('data-index')
        );

        if (cartItems[index].quantity < 10) {
            const newQuantity = [...cartItems];
            newQuantity[index].quantity = newQuantity[index].quantity + 1;
            setCartItems(newQuantity);
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
        }
    };

    return (
        <HashRouter>
            <div className="App">
                <Header cartItems={cartItems} />
                <Main
                    items={items}
                    cartItems={cartItems}
                    handleAddToCartClick={handleAddToCartClick}
                    handleIncrementCartClick={handleIncrementCartClick}
                    handleDecrementCartClick={handleDecrementCartClick}
                    handleRemoveFromCartClick={handleRemoveFromCartClick}
                />
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;
