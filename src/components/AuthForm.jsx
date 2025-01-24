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
<form className="form" onSubmit={handleSubmit}>
    <label className="label" >Username
        <input className="input" required value={username} onChange={event => setUsername(event.target.value)}/>
    </label>
    <label className="label">Surname
        <input className="input" required value={surname} onChange={event => setSurname(event.target.value)}/>
    </label>
    <label className="label">Email
        <input className="input" required value={email} onChange={event => setEmail(event.target.value)} />
    </label>
    <label className="label">Password
        <input className="input" type='password' required value={password} onChange={event => setPassord(event.target.value)}/>
    </label>
<button className="buttonLogin" type="submit">SignUp</button>
</form>
)
}

export default AuthForm