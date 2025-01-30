import { useContext } from "react"
import AuthFormLogin from "../components/AuthFormLogin"
import { AuthContext } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import  Swal  from "sweetalert2"


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
                Swal.fire({
                        title: "You're successfully logged in!",
                        icon: "success",
                      });
                navigate(`/trends`);
              }
              else {
                Swal.fire({
                  title: "Error",
                  text: "Incorrect user or password",
                  icon: "error",
                  confirmButtonText: "Try again!",
                });
              }
            } catch(error) {
            console.log(error)
            Swal.fire({
                title: "Error",
                text: "Something went wrong",
                icon: "error",
                confirmButtonText: "Try again!",
              });
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
    
    