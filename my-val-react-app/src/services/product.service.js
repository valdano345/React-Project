import axios from "axios";

export const getProducts = async () => {
    try {
        const res = await axios.get("https://fakestoreapi.com/products");
        return res.data;
    } catch (err) {
        throw err;
    }
};


export const getDetailProduct = async (id) => {
    try{
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return res.data
    }catch(err){
        throw(err);
    }
};