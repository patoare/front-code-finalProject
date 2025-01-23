import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

const CreateTto = () => {
    const navigate = useNavigate()
const {token} = useContext(AuthContext)

    const [description, setDescription] = useState('')
    const [exercises, setExercises] = useState('')
    const [therapeuticTech, setTherapeuticTech] = useState('')
    const [frecuency, setFrecuency] = useState('')
    const [duration, setDuration] = useState('')
    const [comments, setComments] = useState('')

const handleSubmit = async event => {
    event.preventDefault()
    try{
const response = await fetch(`${import.meta.env.VITE_API_URL}/api/treatments`, {
   method: "POST",
   headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
   },
   body: JSON.stringify({description, exercises, therapeuticTech, frecuency, duration, comments}),
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
        <textarea required value={description} onChange={event => setDescription(event.target.value)} />
    </label>
    <label>Exercises
        <textarea required value={exercises} onChange={event => setExercises(event.target.value)}/>
    </label>
    <label>Therapeutic Technique
        <input required value={therapeuticTech} onChange={event => setTherapeuticTech(event.target.value)}/>
    </label>
    <label>Frecuency
        <input required value={frecuency} onChange={event => setFrecuency(event.target.value)}/>
    </label>
    <label>Duration
        <input required value={duration} onChange={event => setDuration(event.target.value)}/>
    </label>
    <label>Comments
        <input required value={comments} onChange={event => setComments(event.target.value)}/>
    </label>
    <button type="submit">Add new treatment</button>
</form>
</>
    )
}
export default CreateTto

