import InputForm from "../Elements/Input/index"
import Button from '../Elements/Button'
import { useEffect, useRef, useState } from "react";
import { Login } from "../../services/auth.service.js";


const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState("");

    const handleLogin = async (e) =>{
        e.preventDefault();
        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        try{
            const token = await Login(data);
            localStorage.setItem("token", token);
            window.location.href= "/products";
        }catch(err){
            if (err.response) {
                // Tangani kesalahan respons dari server
                setLoginFailed(err.response.data);
            } else {
                // Tangani kesalahan lainnya
                console.err(err);
            }
        }
    }

    const usernameRef = useRef(null);

    useEffect(() => {
        usernameRef.current.focus();
    }, [])

    return (
        <form onSubmit={handleLogin}>
            
            <InputForm label="Username" type="text" placeholder="Jhon Doe" name="username" ref={usernameRef} /> 
            <InputForm label="Password" type="password" placeholder="*****" name="password"  /> 
            <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
            {loginFailed && <p className="text-red-500 text-center mt-5 font-bold">{loginFailed}</p>}
        </form>
    )
}

export default FormLogin