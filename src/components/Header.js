import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='contain'>
            <div className='logo-product'>
                <h1>Logo Page</h1>
            </div>
            <div className='menu'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/products">Products</Link></li>

                </ul>
            </div>
        </div>
    );
}

export default Header;