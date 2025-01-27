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
<h1 className="titlePage">Form to post a new treatment</h1>
<form className="formCreate" onSubmit={handleSubmit}>
    <label className="labelForm" >Description
        <textarea className="textCreate" required value={description} onChange={event => setDescription(event.target.value)} />
    </label>
    <label className="labelForm" >Exercises
        <textarea className="textCreate" required value={exercises} onChange={event => setExercises(event.target.value)}/>
    </label>
    <label className="labelForm" >Therapeutic Technique
        <input className="textCreate" required value={therapeuticTech} onChange={event => setTherapeuticTech(event.target.value)}/>
    </label>
    <label className="labelForm" >Frecuency
        <input className="textCreate" required value={frecuency} onChange={event => setFrecuency(event.target.value)}/>
    </label>
    <label className="labelForm" >Duration
        <input className="textCreate" required value={duration} onChange={event => setDuration(event.target.value)}/>
    </label>
    <label className="labelForm" >Comments
        <input className="textCreate" required value={comments} onChange={event => setComments(event.target.value)}/>
    </label>
    <button className="button" type="submit">Add new treatment</button>
</form>
</>
    )
}
export default CreateTto

