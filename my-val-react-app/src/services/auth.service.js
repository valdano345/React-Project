import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const Login = async (data) => {
    try{
        const res = await axios.post("https://fakestoreapi.com/auth/login", data);
        return res.data.token;
    }catch(err){
        throw err;
    }
}

export const getUsername = (token) => {
    const decoded = jwtDecode(token);
    console.log(decoded);
    return decoded.user
}
