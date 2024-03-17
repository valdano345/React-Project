import InputForm from "../Elements/Input/index"
import Button from '../Elements/Button'
const FormRegister = () => {
    return (
        <form action="">
            <InputForm label="Fullname" type="text" placeholder="insert your neme here..." name="fullname" /> 
            <InputForm label="email" type="text" placeholder="example@mail.com" name="email" /> 
            <InputForm label="Password" type="password" placeholder="*****" name="password" /> 
            <InputForm label="Confirm Password" type="password" placeholder="*****" name="confirmPassword" /> 
            <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    )
}

export default FormRegister