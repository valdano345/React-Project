import React, { useContext } from 'react'
import { LoginContext } from './UseContext';

const LoginButton = () => {
    const [isLogin, setIsLogin] = useContext(LoginContext)
    const handleClick = () => {
        setIsLogin((Login) => !Login);
    }
    return (
        <li>
            <a onClick={handleClick} className={`${!isLogin ? 'login' : 'logout'}`} href="#home"> {!isLogin ? 'Login' : 'Logout'} </a>
        </li>
        )
    }

export default LoginButton