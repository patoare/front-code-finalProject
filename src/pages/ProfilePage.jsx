import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { useNavigate, useParams } from "react-router-dom"


    const ProfilePage = () => {
    
    const navigate = useNavigate()
    const {token} = useContext(AuthContext)

    const [area, setArea] = useState('')
    const [masters, setMasters] = useState('')
    const [languages, setLanguages] = useState('')
   

const handleSubmit = async event => {
    event.preventDefault()
    try{
const response = await fetch(`${import.meta.env.VITE_API_URL}/api/therapist`, {
   method: "PUT",
   headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
   },
   body: JSON.stringify({area, masters, languages}),
})
if(response.status === 200) {
navigate(`/profile/${data.user._id}`)
}
    } catch(error) {
        console.log(error)
    }
}

    return(
        <>
<h1 className="titlePage">Let's update your profile</h1>
<form className="formCreate" onSubmit={handleSubmit}>
    <label className="labelForm">Area of preference
        <textarea className="textCreate" required value={area} onChange={event => setArea(event.target.value)} />
    </label>
    <label className="labelForm">Masters
        <textarea className="textCreate" required value={masters} onChange={event => setMasters(event.target.value)}/>
    </label>
    <label className="labelForm">Languages
        <input required value={languages} onChange={event => setLanguages(event.target.value)}/>
    </label>
    <button className="button" type="submit">Create Profile!</button>
</form>
</>
    )
}



    export default ProfilePage
    
    