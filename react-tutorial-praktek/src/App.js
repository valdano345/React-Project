import './App.css';
import ProductList from './Component/ProductList';
import {useState, useEffect} from 'react';
import ProcutCreate from './Component/ProductCreate';
import axios from 'axios';

function App() {
  const[products, setProducts] = useState([]);
  const fetchProducts = async() => {
    const response = await axios.get('http://127.0.0.1:3003/products');
    setProducts(response.data)
  }
  useEffect(() => {
    fetchProducts()
  }, [])
  const onEditProduct = (id, data) => {
    const updatedProduct = products.map(prod => {
        if(prod.id === id){
          return {...prod, ...data}
        }
        return prod
    });
    setProducts(updatedProduct);
  };
  const onCreateProduct = async (product) => {
  const response = await axios.post('http://127.0.0.1:3003/products', product);
    setProducts([...products, response.data])
  }
  const onDeleteProduct = (id) => {
    const updatedProduct = products.filter((prod) => {
      return prod.id !== id
    })
    setProducts(updatedProduct);
  }
  return(
    <>
      <div className="app-title">Belanja Mobil</div> 
      <ProcutCreate onCreateProduct={onCreateProduct}/>
      <ProductList products={products} onDeleteProduct={onDeleteProduct} onEditProduct={onEditProduct} />
    </>
  )
}

export default App;
