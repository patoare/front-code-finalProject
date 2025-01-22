import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

const CreateTto = () => {
    const navigate = useNavigate()
const {token} = useContext(AuthContext)

    const [description, setDescription] = useState('')
    const [exercises, setExercises] = useState('')
    const [therapeuticTech, setTherapeuticTech] = useState('')

const handleSubmit = async event => {
    event.preventDefault()
    try{
const response = await fetch(`${import.meta.env.VITE_API_URL}/api/treatments`, {
   method: "POST",
   headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
   },
   body: JSON.stringify({description, exercises, therapeuticTech}),
})
if(response.status === 201) {
navigate('/trends')
}
    } catch(error) {
        console.log(error)
    }
}

    return(
        <>
<h1>Form to post a new treatment</h1>
<form onSubmit={handleSubmit}>
    <label>Description
        <input required value={description} onChange={event => setDescription(event.target.value)} />
    </label>
    <label>Exercises
        <input required value={exercises} onChange={event => setExercises(event.target.value)}/>
    </label>
    <label>TherapeuticTech
        <input required value={therapeuticTech} onChange={event => setTherapeuticTech(event.target.value)}/>
    </label>
    <button type="submit">Add new treatment</button>
</form>
</>
    )
}
export default CreateTto

