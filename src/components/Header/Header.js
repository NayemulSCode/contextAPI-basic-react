import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import './Header.css'
const Header = () => {
    const [category] = useContext(CategoryContext);
    return (
        <div className="menubar">
            <nav>
                <h1>contextAPI</h1>
                <div style={{marginLeft:'10px'}}>
                     <h3>Cart item: {category}</h3>
                </div>
            </nav>
        </div>
    );
};

export default Header;