import axios from "axios";

export const fetchProductsAPI = async () => {
    const response = await axios.get('http://127.0.0.1:3003/products');
    return response;
}

export const onEditProductAPI = async (id, data) => {
    const response = await axios.put(`http://127.0.0.1:3003/products/${id}`, data);
    return response;
}

export const onCreateProductAPI = async (product) => {
    const response = await axios.post('http://127.0.0.1:3003/products', product);
    return response;
}

export const onDeleteProductAPI = async (id) => {
    const response = await axios.delete(`http://127.0.0.1:3003/products/${id}`);
}