import FormRegister from "../Components/Fragments/FormRegister"
import AuthLayouts from "../Components/Layouts/AuthLayouts"

const register = () => {
    return (
        <AuthLayouts title="Register" type="register">
            <FormRegister />
        </AuthLayouts>
    )
}

export default register