import React from 'react';
import Product from './product/Product';
let products = [
    { name: 'Tata Taj Tea', category: 'Tea', price: 550, qty:"1", unit: "kg", discount: 10 },
    { name: 'Tata Taj Gold Tea', category: 'Tea', price: 650, qty: "1", unit:"kg", discount:10},
    { name: 'Nescafe Coffee', category: 'Tea', price: 500, qty: "250", unit:"grm", discount:10},
    { name: 'Utam Suger', category: 'Suger', price: 50, qty:"1", unit: "kg", discount: 5 },
]
function Index(props) {
    
    return (
        <div>
            {
                products.map(product=> <Product data={product}></Product>)
            } 
           
        </div>
    );
}

export default Index;