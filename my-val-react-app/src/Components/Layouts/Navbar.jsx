import { useEffect, useState, useContext } from 'react';
import { useLogin } from '../../hooks/useLogin';
import Button from '../Elements/Button'
import { useSelector } from 'react-redux';
import { DarkMode } from '../../context/DarkMode';
import { useTotalPrice } from '../../context/TotalPriceContext';

const Navbar = () => {
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
    const {total} = useTotalPrice();

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc+ item.qty;
        }, 0);
        setTotalCart(sum)
    }, [cart])

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = "/login"
    }

    const handleClick = () => {
        setIsDarkMode(!isDarkMode);
    }

    const username = useLogin()
    return(
        <>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                    {username}
                    <Button classname="ml-5 bg-black" onClick={handleLogout} >Logout</Button>
                    <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5">
                        Item :{totalCart} | Price : $ {total}
                    </div>
                    <Button className="bg-black-600 px-10 mx-5 p-2 text-white rounded" onClick={handleClick} >
                        {isDarkMode ? "Light" : "dark"} 
                    </Button>
            </div>
            
        </>
    )
}

export default Navbar;