import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetails = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h4>category details child of category</h4>
            <h6>Selected category: {category}</h6>
        </div>
    );
};

export default CategoryDetails;