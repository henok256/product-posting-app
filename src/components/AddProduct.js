import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import App from './App';
import {v4 as uuidv4} from 'uuid';

 const AddProduct = (props) => {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState(0);
const [brand, setBrand]= useState("");
const [category, setCategory]= useState("");
const [discountPercentage, setDiscountPercentage]= useState('');
const[images, setImage]= useState(
    "https://i.dummyjson.com/data/products/2/1.jpg",
  );
  const [rating, setRating]= useState(0);
  const [stock, setStock]= useState(0);
  const [thumbnail, setThumbnail]= useState('https://i.dummyjson.com/data/products/2/thumbnail.jpg')

const previousData= props.products;
console.log(previousData);
const navigate=useNavigate();
const newProduct={
    id:uuidv4(),
    title:title,
    description:description,
    price:price,
    images:images,
    stock:stock,
    thumbnail:thumbnail,
    brand:brand,
    discountPercentage:discountPercentage,
    category:category
}

const handleSubmit = (e) => {
    e.preventDefault();
    props.setProduct([...props.products, newProduct]);
    setTitle('');
    setDescription('');
    setPrice(0);
    setBrand('');
    setStock(0);
    setCategory('');
    setRating(0);
    setThumbnail('');
    setImage('')
    setDiscountPercentage(0);
    //props.products.push(newProduct) props.setProduct([...props.products, newProduct]);
    navigate('/add');
  }
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
    <label>Title:</label>
    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
    <br />
    <label>Description:</label>
    <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
    <br />
    <label>Price:</label>
    <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
    <br />
    <label>Brand:</label>
    <input type="text" value={brand} onChange={e => setBrand(e.target.value)} />
    <br />
    <label>Stock:</label>
    <input type="number" value={stock} onChange={e => setStock(e.target.value)} />
    <br />
    <label>Rating:</label>
    <input type="number" value={rating} onChange={e => setRating(e.target.value)} />
    <br />
    <label>Thumbanail:</label>
    <input type="text" value={thumbnail} onChange={e => setThumbnail(e.target.value)} />
    <br />
    <label>Image</label>
    <input type="text" value={images} onChange={e => setImage(e.target.value)} />
    <br></br>
    <label>discount Percentage:</label>
    <input type="number" value={discountPercentage} onChange={e => setDiscountPercentage(e.target.value)} />
    <br />
    <label>Category:</label>
    <input type="text" value={category} onChange={e => setCategory(e.target.value)} />
    <br />
    
    <button type="submit">Add Product</button>
  </form>
  <div>
   
      {props.products.map((product, index) => (
        <div key={product.id}>
          <p>Title: {product.title}</p>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          {console.log(props.products.length)}
        </div>
      ))}
    </div>

    </div>
    
  )
}
export default AddProduct;
