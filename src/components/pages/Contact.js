import React from 'react';

import '../../assets/styles/Contact.css';
import mapImg from '../../assets/images/map.png';
import { BsInstagram, BsTwitter, BsMessenger } from 'react-icons/bs';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-wrapper">
                <div className="contact-info">
                    <img src={mapImg} alt="map" />
                </div>
                <div className="contact-info">
                    <p>Name:</p>
                    <p>T-store Inc.</p>
                </div>
                <div className="contact-info">
                    <p>Email:</p>
                    <p>support@t-store.com</p>
                </div>
                <div className="contact-info">
                    <p>Phone:</p>
                    <p>+1 (555) 555-1234 </p>
                </div>
                <div className="contact-info">
                    <p>Role:</p>
                    <p>Customer Support</p>
                </div>
                <br />
                <p>
                    1234 Maple Avenue <br />
                    Lakeview, CA 90210
                </p>
                <div className="contact-links">
                    <a href="https://www.instagram.com">
                        <BsInstagram />
                    </a>
                    <a href="https://www.twitter.com">
                        <BsTwitter />
                    </a>
                    <a href="https://www.messenger.com">
                        <BsMessenger />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
