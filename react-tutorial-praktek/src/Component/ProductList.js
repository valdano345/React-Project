import React, { useContext } from 'react'
import Mobil from './Mobil'
import ProductContext from '../context/products'

const ProductList = ({onDeleteProduct, onEditProduct}) => {
    const {products} = useContext(ProductContext)
    return (
        <div className="cards">
            {products.map((product) => {
                return (
                <Mobil key={product.id} product={product} onDeleteProduct = {onDeleteProduct} onEditProduct= {onEditProduct}/>
                )
            })}
        </div>
    )
}

export default ProductList
