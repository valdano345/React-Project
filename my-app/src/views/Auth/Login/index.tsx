import Link from "next/link"
import { useRouter } from "next/router"
import style from './Login.module.scss'

const LoginView = () =>{
    const {push} = useRouter();
    const handleLogin = () => {
        push('/product')
    }

    return(
        <div className={style.login}>
            <h1 className="text-3xl">Login Page</h1>
            <button onClick={handleLogin}>Login</button>
            <p style={{color: "red", border: "1px solid red", borderRadius: "10px"}}>
                Belum punya akun? registrasi <Link href={"/auth/register"}>disini</Link>
            </p>
        </div>
    )
}

export default LoginView