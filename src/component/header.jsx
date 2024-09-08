import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Header() {
    return (
        <header className="header">
            {/* <h1>Agriculture Website</h1> */}
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/signin" ><AccountCircleIcon sx={{fontSize:25 }}/></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
