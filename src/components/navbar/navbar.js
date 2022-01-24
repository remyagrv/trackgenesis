import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './lost-loch-spirits-logo.jpeg';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
return (
	<nav className='navbar'>
        <img
src={logo}
            alt="Sample Brand Logo"
            width="120px"
            className="align-top d-inline-block"
            height="35"
          />
        <ul className={ isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={()=> setIsMobile(false)}
        >
            <Link to='/' className='home'>
                <li>Home</li>
            </Link>
            <Link to='/table' className='tablee'>
                <li>Table</li>
            </Link>
            <Link to='/productdetails' className='productd'>
                <li>Products</li>
            </Link>
           
        </ul>
<button className='mobile-menu-icons'
onClick={() => setIsMobile(!isMobile)}
>
    {isMobile ? <i className='fas fa-times'></i> :<i className='fas fa-bars'></i>}
</button>
    </nav>
);
};

export default Navbar;