import Navbar from "../Components/Layouts/Navbar";
import { useLogin } from "../hooks/useLogin";


const ProfilePage = () => {
    const username= useLogin();

    return(
        <>
            {/* <Navbar /> */}
            <div> 
                <h1>Profile</h1>
                Username : {username}
            </div>
        </>
    )
}

export default ProfilePage