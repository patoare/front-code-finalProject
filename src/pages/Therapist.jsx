import { useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Therapist = () => {

    const {token} = useContext(AuthContext)
    const { id } = useParams();
    const [oneTherapist, setOneTherapist] = useState([]);
    
   
    const fetchOneTherapist = async() => {
       
        try {
            const response = await fetch (`${import.meta.env.VITE_API_URL}/api/therapists/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            if(response.ok) {
                const oneTherapistData = await response.json()
                setOneTherapist(oneTherapistData)
            }

        }catch(error) {
         console.log(error)
        }
    }
    useEffect(() => {
        fetchOneTherapist()
    }, [id])



    return(
        <>
    <h2 className="titlePage">Therapist profile</h2>
    <ul className="therapist-info">
            <p>{oneTherapist.username}  {oneTherapist.surname}</p>
            <p>I'm from {oneTherapist.country}</p>
            <p>I can speak in {oneTherapist.languages}</p>
            <p>I use to work with {oneTherapist.masters}</p>
            <p>I feel confident working in {oneTherapist.area}</p>
            

    </ul>
    <div className="button-container">
    <Link to={`/therapists`}>
              <button className="button" type="button">Therapists</button>
            </Link>
            </div>
    </>

    )
}
export default Therapist