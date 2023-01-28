import React from 'react'
import {v4 as uuidv4} from 'uuid';
import '../App.css';

 const ProductList = (props) => {
  
  if(props.products) {
    return (
       <div className="product-container">
        
          { props.products.map((item, index) => (
            <div className="product-box" key={uuidv4()}>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>${item.price}</p>
            </div>
          ))}
        </div>
    )
}else{
    return <div className="headingTitle">Loading...</div>
}
    
  
}

export default ProductList;
