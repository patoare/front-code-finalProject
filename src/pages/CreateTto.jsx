import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";

const CreateTto = () => {
    const navigate = useNavigate()
const {token} = useContext(AuthContext)

    const [description, setDescription] = useState('')
    const [exercises, setExercises] = useState('')
    const [therapeuticTech, setTherapeuticTech] = useState('')
    const [date, setDate] = useState('')
    const [visitNumber, setVisitNumber] = useState('')
    const [hashtag, setHashtag] = useState('')

const handleSubmit = async event => {
    event.preventDefault()
    try{
const response = await fetch(`${import.meta.env.VITE_API_URL}/api/treatments`, {
   method: "POST",
   headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
   },
   body: JSON.stringify({description, exercises, therapeuticTech, date, visitNumber, hashtag}),
})
if(response.status === 201) {
navigate('/trends')
}
    } catch(error) {
        console.log(error)
    }
}

const handleHashtagClick = async () => {
    // Llamar a SweetAlert2 para seleccionar una parte del cuerpo
    const { value: bodyPart } = await Swal.fire({
      title: "Select the body part",
      input: "select",
      inputOptions: {
        "Body Parts": {
          neck: "Neck",
          shoulder: "Shoulder",
          elbow: "Elbow",
          wrist: "Wrist",
          lowBack: "Low Back",
          hip: "Hip",
          knee: "Knee",
          ankle: "Ankle"
        }
      },
      inputPlaceholder: "Select a body part",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value) {
            resolve();
          } else {
            resolve("You need to select a body part :)");
          }
        });
      }
    });

    if (bodyPart) {
      setHashtag(bodyPart); // Asignar la opción seleccionada al campo hashtag
    }
  };

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
    <label className="labelForm" >Date
        <input className="textCreate" required value={date} onChange={event => setDate(event.target.value)}/>
    </label>
    <label className="labelForm" >Visit Number
        <input className="textCreate" required value={visitNumber} onChange={event => setVisitNumber(event.target.value)}/>
    </label>
    <label className="labelForm" >Hashtag
        <input className="textCreate"
            placeholder="Click to select a body part"
            value={hashtag}
            onClick={handleHashtagClick} // Abre el popup al hacer clic
            readOnly/>
    </label>
    <button className="button" type="submit">Add new treatment</button>
</form>
</>
    )
}
export default CreateTto

