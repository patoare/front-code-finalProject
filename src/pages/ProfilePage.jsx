import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { useNavigate, useParams } from "react-router-dom"
import  Swal  from "sweetalert2"

    const ProfilePage = () => {
    
    const navigate = useNavigate()
    const {token} = useContext(AuthContext)
   const {id} = useParams()
    const [area, setArea] = useState('')
    const [masters, setMasters] = useState('')
    const [languages, setLanguages] = useState('')
    const [country, setCountry] = useState('')
   

const handleSubmit = async event => {
    event.preventDefault()
    try{
const response = await fetch(`${import.meta.env.VITE_API_URL}/api/therapists/${id}`, {
   method: "PUT",
   headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
   },
   body: JSON.stringify({area, masters, languages, country}),
})
if(response.ok) {
    const data = await response.json()
    Swal.fire({
        title: "Profile updated!",
        icon: "success",
        confirmButtonText: "Back to Home Page"
      });
navigate(`/`)
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
        <textarea className="textCreate" required value={languages} onChange={event => setLanguages(event.target.value)}/>
    </label>
    <label className="labelForm">Country
        <textarea className="textCreate" required value={country} onChange={event => setCountry(event.target.value)}/>
    </label>
    <div className="comment-buttons">
    <button className="button" type="submit">Create Profile!</button>
    </div>
</form>
</>
    )
}



    export default ProfilePage
    
    