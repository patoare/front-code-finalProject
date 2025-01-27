import { useContext } from "react"
import AuthFormLogin from "../components/AuthFormLogin"
import { AuthContext } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"


const Login = () => {
const {setToken} = useContext(AuthContext)
const navigate = useNavigate();

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
                const data = await response.json();
                console.log("User ID:", data.user._id); 
                setToken(data.authToken);
                navigate(`/profile/${data.user._id}`);
              }
            } catch(error) {
            console.log(error)
            }
            }
    return (
    <>
    <h1 className="titlePage"> Login Page</h1>
    <AuthFormLogin submitFunction={handleLogin}></AuthFormLogin>
    </>

    )
    }
    export default Login
    
    