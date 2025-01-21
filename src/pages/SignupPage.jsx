import AuthForm from "../components/AuthForm"

const SignupPage = () => {

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
    console.log('User created on the Frontend')
    //redirect to a different page
}
} catch(error) {
//aca poner un distintivo si el user esta en uso
}
}

return (
<>
<h1>Form to register as a therapist</h1>
<AuthForm submitFunction={handleSignup}></AuthForm>

</>

)
}
export default SignupPage


