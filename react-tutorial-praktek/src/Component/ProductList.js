import React from 'react'
import Mobil from './Mobil'

const ProductList = ({products, onDeleteProduct, onEditProduct}) => {
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
