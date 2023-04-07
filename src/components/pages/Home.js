import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../elements/Button';

import '../../assets/styles/Home.css';

import home_1_Img from '../../assets/images/home_1.jpg';
import home_2_Img from '../../assets/images/home_2.jpg';
import home_3_Img from '../../assets/images/home_3.jpg';

const Home = () => {
    return (
        <div className="home">
            <section className="section-1">
                <img src={home_1_Img} alt="home-1-img" />
                <div className="sec1-wrapper">
                    <p className="p-1">
                        Where Fashion Meets Individuality!
                        <br />
                        Check out the store.
                    </p>
                    <Link to="/store">
                        <Button className="btn-store" text="Shop" />
                    </Link>
                </div>
            </section>
            <h1>2023 collections are here</h1>
            <section className="section-2">
                <div className="img-wrapper">
                    <img src={home_2_Img} alt="home-2-img" />
                </div>
                <p className="p-2">
                    From casual wear to formal attire, our fashion experts will
                    help you create a look that's all your own. With a wide
                    selection of sizes, colors, and styles, there's something
                    for everyone{' '}
                </p>
            </section>
            <section className="section-3">
                <div className="img-wrapper">
                    <img src={home_3_Img} alt="home-3-img" />
                </div>
                <p className="p-3">
                    Get ready to stand out from the crowd with our trendy
                    clothing, shoes, and accessories. Whether you're looking for
                    a statement piece or a complete wardrobe overhaul, we have
                    everything you need to express your unique style.
                </p>
            </section>
        </div>
    );
};

export default Home;
