import AuthForm from "../components/AuthForm"
import { useNavigate } from "react-router-dom"

const SignupPage = () => {
    const navigate = useNavigate()

const handleSignup = async(credentials) => {
try{
const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
})
if(response.status === 201) {
    navigate('/login')
}
} catch(error) {
//aca poner un distintivo si el user esta en uso
}
}

return (
<>
<h1 className="titlePage">SINGUP !</h1>
<h3 className="titlePage">Become a new member</h3>
<AuthForm submitFunction={handleSignup}></AuthForm>

</>

)
}
export default SignupPage


