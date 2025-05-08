import React from 'react';

function Product(props) {
    return (
        <div>
            this is single product {props.data.name}
        </div>
    );
}

export default Product;