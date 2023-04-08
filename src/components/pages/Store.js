import React, { useEffect, useState } from 'react';

import '../../assets/styles/Store.css';

import Button from '../elements/Button';

const Store = () => {
    const [items, setItems] = useState([]);

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

            console.log(data);
        } catch (err) {
            return console.log(err);
        }
    };

    const handleClick = () => {};

    return (
        <div className="store">
            <h1>2023 Sales</h1>
            <div className="product-group">
                {items.map((item, index) => {
                    return (
                        <div
                            key={`product${index}`}
                            className="item-group"
                            onClick={handleClick}
                        >
                            <img src={item.image} alt={item.title} />
                            <p>{item.title}</p>
                            <Button
                                className="btn-add-cart"
                                text="Add to cart"
                                onClick={handleClick}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Store;
