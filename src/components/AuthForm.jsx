import { useState } from "react"

const AuthForm = ({submitFunction}) => {
const [username, setUsername] = useState('')
const [surname, setSurname] = useState('')
const [email, setEmail] = useState('')
const [password, setPassord] = useState('')

const handleSubmit = (event) => {
    event.preventDefault()
    submitFunction ({ username, surname, email, password})
}

return ( 
<form onSubmit={handleSubmit}>
    <label>Username
        <input required value={username} onChange={event => setUsername(event.target.value)}/>
    </label>
    <label>Surname
        <input required value={surname} onChange={event => setSurname(event.target.value)}/>
    </label>
    <label>Email
        <input required value={email} onChange={event => setEmail(event.target.value)} />
    </label>
    <label>Password
        <input type='password' required value={password} onChange={event => setPassord(event.target.value)}/>
    </label>
<button type="submit">SignUp</button>
</form>
)
}

export default AuthForm