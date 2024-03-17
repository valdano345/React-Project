import FormLogin from "../Components/Fragments/FormLogin"
import AuthLayouts from "../Components/Layouts/AuthLayouts"

const login = (props) => {
    return (
        <AuthLayouts title="Login" type="login">
            <FormLogin />
        </AuthLayouts>
    )
}

export default login