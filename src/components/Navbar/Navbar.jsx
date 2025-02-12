import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 120 ? setSticky(true) : setSticky(false);
        })
    }, []);

    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        menu ? setMenu(false) : setMenu(true);
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ""}`}>
            <img src={"src/assets/logo.png"} alt="logo" className='logo' />
            <ul className={menu ? "" : "hide-menu"}>
                <li><Link to='hero' smooth={true} duration={500} offset={0}>Home</Link></li>
                <li>
                    <Link to='programs' smooth={true} duration={500} offset={-260}>Program</Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500} offset={-150}>About Us</Link>
                </li>
                <li>
                    <Link to='campus' smooth={true} duration={500} offset={-230}>Campus</Link>
                </li>
                <li>
                    <Link to='testimonials' smooth={true} duration={500} offset={-260}>Testimonials</Link>
                </li>
                <li><Link to='contact' smooth={true} duration={500} offset={-230} className='btn'>Contact Us</Link></li>
            </ul>
            <img src={"src/assets/menu-icon.png"} alt="menu-icon" className='menu-icon' onClick={toggleMenu} />
        </nav>
    )
}

export default Navbar