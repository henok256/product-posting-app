import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [products1, setProduct] = useState({});
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) =>{
        console.log(res.data);
        setProduct(res.data);
      })       
      .catch(err => console.log(err));
  }, []);
  const products = products1.products || [];
  return (
    <div className="App">
      <div className='header'>
            <h1>Products List</h1>
      </div>
      
      <div className="product-container">
        { products.map((item, index) => (
          <div className="product-box" key={item.id}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
