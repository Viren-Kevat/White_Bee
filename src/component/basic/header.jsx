import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
             <div className="logo">
                <h1>White Bee</h1>
            </div>
            <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                    <li><Link to="/contactus" onClick={toggleMenu}>Contact Us</Link></li>
                    <li><Link to="/signin" onClick={toggleMenu}>Sign In</Link></li>
                </ul>
            </nav>
            <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
        </header>
    );
}

export default Header;
