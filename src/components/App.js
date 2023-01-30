import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductList  from './ProductList';
import AddProduct  from './AddProduct';
import Header from './Header';
import '../App.css';

function App() {
const [products1, setProduct] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) =>{
        setProduct(res.data.products);
        localStorage.setItem("products", JSON.stringify(res.data.products))
        
      })       
      .catch(err => console.log(err));
  }, []);
   JSON.parse(localStorage.getItem("products"));
  const products = products1 || [];
  //const products= JSON.parse(localStorage.getItem("products"));
  
  return (
    <div>
       <BrowserRouter>
       <Header />
    <Routes>
      <Route  path="/" element={<ProductList products={products}/> } ></Route>
      <Route  path="/add" element={<AddProduct  products={products} setProduct={setProduct}/>}></Route>
    </Routes>  
    </BrowserRouter>
    </div>
    
    
  );
}

export default App;
