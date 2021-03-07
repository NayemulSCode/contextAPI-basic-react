import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Category from '../Category/Category';

const Home = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h1>Home component</h1>
            <button onClick={()=> setCategory(category + 1)}>Increment from home</button>
            <button onClick={()=> setCategory('phone')}>Phone</button>
            <button onClick={()=> setCategory('laptop')}>Laptop</button>
            <button onClick={()=> setCategory("camera")}>Camera</button>

            <Category />
        </div>
    );
};

export default Home;