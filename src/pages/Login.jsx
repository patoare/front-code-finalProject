import { useContext } from "react"
import AuthForm from "../components/AuthForm"
import { AuthContext } from "../contexts/AuthContext"


const Login = () => {
const {setToken} = useContext(AuthContext)

    const handleLogin = async(credentials) => {
        try{
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            })
            if(response.status === 200) {
                const data = await response.json()
                console.log(data)
                setToken(data.authToken)
            }
            } catch(error) {
            console.log(error)
            }
            }
    return (
    <>
    <h1> Login Page</h1>
    <AuthForm submitFunction={handleLogin}></AuthForm>
    </>

    )
    }
    export default Login
    
    