import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
const allProducts = [
    {id:1,name:"Apple", category:"phone"},{name:"Xiaomi", category:"phone"},{name:"Samsung", category:"phone"},
    {id:2,name:"MacBookAir", category:"laptop"},{name:"Asus", category:"laptop"},{name:"Dell Inspiron", category:"laptop"},
    {id:3,name:"Cannon", category:"camera"},{name:"Fuji fo", category:"camera"},{name:"Nikkon", category:"camera"}
]
const Category = () => {
    const [category] = useContext(CategoryContext);
    //console.log(category);
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        const matchProducts = allProducts.filter(pd => pd.category.toLowerCase() === category && category.toLowerCase());
        setProducts(matchProducts);
    },[category]) 
    return (
        <div>
            <h3>All Products of {category}</h3>
            {
                products.map(pd => 
                    <CategoryDetails key={pd.id} product = {pd} />
                )
            }
        </div>
    );
};

export default Category;