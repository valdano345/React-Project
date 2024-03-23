import CardProduct from '../Components/Fragments/CardProduct'
import React, { useEffect, useState, useContext } from 'react'
import { getProducts } from '../services/product.service'
import {useLogin} from '../hooks/useLogin.jsx'
import TableCart from '../Components/Fragments/TableCart.jsx'
import Navbar from '../Components/Layouts/Navbar.jsx'
import { DarkMode } from '../context/DarkMode.jsx'


const ProductsPage = () => {
    // const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    useLogin();
    const {isDarkMode} = useContext(DarkMode);

    // Fetching API
    useEffect(() => {
        const fetchData = async () => {
            try {   
                const data = await getProducts();
                setProducts(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    return (
        <>  
            <Navbar />
            <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
                <div className="w-4/6 flex flex-wrap">
                    {products.length > 0 && products.map((product) => {
                        return(
                            <CardProduct key={product.id}>
                                <CardProduct.Header id={product.id} image={product.image} />
                                <CardProduct.Body name={product.title}>
                                    {product.description.substring(0, 200)}...
                                </CardProduct.Body>
                                <CardProduct.Footer price={product.price} id={product.id} />
                            </CardProduct>
                        )
                    })}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                    <TableCart products={products} />
                </div>
            </div>
            {/* <div className="mttt-5 flex justify-center mb-5">
                <Counter></Counter>
            </div> */}
        </>
    )
}

export default ProductsPage