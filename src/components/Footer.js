import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../assets/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>Copyright © Laszlo Kis 2023</p>
            <a
                className="reflink"
                href="https://github.com/ev0clu"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub />
            </a>
        </footer>
    );
};

export default Footer;
