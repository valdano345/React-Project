import { createContext, useState } from "react";
import { fetchProductsAPI, onEditProductAPI, onCreateProductAPI, onDeleteProductAPI } from '../api/productsAPI';

const ProductContext = createContext();

function Provider({children}) {
    const[products, setProducts] = useState([]);
    const fetchProducts = async() => {
        const response = await fetchProductsAPI();
        setProducts(response.data)
    }

    const onEditProduct = async (id, data) => {
        const response = await onEditProductAPI(id, data);
        const updatedProduct = products.map(prod => {
            if(prod.id === id){
                return {...prod, ...response.data}
            }
            return prod
        });
        setProducts(updatedProduct);
        };
    
        const onCreateProduct = async (product) => {
        const response = await onCreateProductAPI(product);
            setProducts([...products, response.data])
        }
    
        const onDeleteProduct = async (id) => {
            await onDeleteProductAPI(id);
            const updatedProduct = products.filter((prod) => {
            return prod.id !== id
            })
            setProducts(updatedProduct);
        }

        const valueToShare = {
            products,
            onCreateProduct,
            onDeleteProduct,
            onEditProduct,
            fetchProducts
        }

        return(
            <ProductContext.Provider value={valueToShare}>
                {children}
            </ProductContext.Provider>
        )

}

export {Provider}
export default ProductContext