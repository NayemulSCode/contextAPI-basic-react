import React from 'react';

const CategoryDetails = (props) => {
    const {name} = props.product;
    //console.log(props)
    return (
        <div>
            <h6>Product Name: {name}</h6>
        </div>
    );
};

export default CategoryDetails;