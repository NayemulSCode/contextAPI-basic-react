import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="menubar">
            <nav>
                <h1>contextAPI</h1>
                <div style={{marginLeft:'10px'}}>
                     <h3>Cart item</h3>
                </div>
            </nav>
        </div>
    );
};

export default Header;