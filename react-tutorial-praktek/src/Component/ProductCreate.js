import {React, useState, useContext} from 'react';
import ProductContext from '../context/products'

export const ProductCreate = () => {
    const {onCreateProduct} = useContext(ProductContext);
    const initialState = {
        nama: '',
        deskripsi: '',
        imageURL: '',
    };

    const[showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const {nama, deskripsi, imageURL} = formData
    const handleShow = () => {
        setShowForm(!showForm)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onCreateProduct(formData);
        setFormData(initialState);
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    return (
        <div className="product-create">
            <div className="toggle-add">
                <button onClick={handleShow} className="edit-input-submit add-toggle">
                    {showForm ? "Close Form" : "Add Product"}
                </button>
            </div>
            {showForm && (<form onSubmit={handleSubmit} className="form" action="">
                <div className="form-add-title">Add Product</div>
                <div className="form-group">
                    <input type="text" onChange={handleChange}value={nama} className="add-input-text" placeholder="Nama Product" name="nama"/>
                </div>
                <div className="form-group">
                    <input type="text" onChange={handleChange}value={deskripsi} className="add-input-text" placeholder="Deskripsi" name="deskripsi"/>
                </div>
                <div className="form-group">
                    <input type="text" onChange={handleChange}value={imageURL} className="add-input-text" placeholder="Image Product" name="imageURL"/>
                </div>
                <input type="submit" className="edit-input-submit add"/>
            </form>)}
        </div>
    )
}

export default ProductCreate;