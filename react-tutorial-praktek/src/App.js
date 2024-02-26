import './App.css';
import ProductList from './Component/ProductList';
import {useState, useEffect, useContext} from 'react';
import ProcutCreate from './Component/ProductCreate';
import ProductContext from './context/products';


function App() {
  const {fetchProducts} = useContext(ProductContext)
  useEffect(() => {
      fetchProducts()
  }, [])
  
  return(
    <>
      <div className="app-title">Belanja Mobil</div> 
      <ProcutCreate />
      <ProductList />
    </>
  )
}

export default App;
