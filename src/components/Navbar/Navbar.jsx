import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

import logo from '../../../public/assets/logo.png';
import menuIcon from '../../../public/assets/menu-icon.png';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 120);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenu((prevState) => !prevState);
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="logo" className="logo" />
            <ul className={menu ? '' : 'hide-menu'}>
                <li>
                    <Link to="hero" smooth={true} duration={500} offset={0}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="programs" smooth={true} duration={500} offset={-260}>
                        Program
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} offset={-150}>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="campus" smooth={true} duration={500} offset={-230}>
                        Campus
                    </Link>
                </li>
                <li>
                    <Link to="testimonials" smooth={true} duration={500} offset={-260}>
                        Testimonials
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} offset={-230} className="btn">
                        Contact Us
                    </Link>
                </li>
            </ul>
            <img
                src={menuIcon}
                alt="menu-icon"
                className="menu-icon"
                onClick={toggleMenu}
            />
        </nav>
    );
};

export default Navbar;
