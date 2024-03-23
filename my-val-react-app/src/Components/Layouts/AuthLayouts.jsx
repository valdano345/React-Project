import { useContext } from "react"
import { Link } from "react-router-dom"
import { DarkMode } from "../../context/DarkMode";
const AuthLayouts = ({children, title, type}) => {

    const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
    const handleClick = () => {
        setIsDarkMode(!isDarkMode);
    }
    
    return (
        <main className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-900"}`} >
            <div className="w-full max-w-xs">
            <button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded" onClick={handleClick} >
                {isDarkMode ? "Light" : "dark"} 
            </button>
            <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
            <p className="font-medium text-slate-500 mb-5">Welcome, Please enter your details</p>
            {children}
            <p className="text-sm mt-5 text-center">
                {type === "login" ? "Don't have an accounnt ?" : "Already have an account "}
                {type === "login" && (
                    <Link className="font-bold text-blue-600" to="/register">Register</Link>
                )}
                {type === "register" && (
                    <Link className="font-bold text-blue-600" to="/login">Login</Link>
                )}
            </p>
            </div>
        </main>
    )
}

export default AuthLayouts