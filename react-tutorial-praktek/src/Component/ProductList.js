import React from 'react'
import { Products } from '../data/Product'
import Mobil from './Mobil'

const ProductList = () => {
    


    return (
        <div className="cards">
            {Products.map((product) => {
                return (
                <Mobil key={product.id} gambar={product.imageURL} tipe={product.nama} deskripsi={product.deskripsi} />
                )
            })}
        </div>
    )
}

export default ProductList
