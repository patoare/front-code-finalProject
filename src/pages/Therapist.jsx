import { useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react"
import { useParams } from "react-router-dom";


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
    <h2 className="titlePage">You're seeing a single Therapist because you liked  the profile</h2>
    <ul>
    
            <p>{oneTherapist.username}  {oneTherapist.surname}</p>
            <p></p>
            <p>I'm from {oneTherapist.country}</p>
            <p>I can speak in {oneTherapist.languages}</p>
            <p>{oneTherapist.masters}</p>
            <p>{oneTherapist.area}</p>
           <button type="button">❤️</button>
            <button type="button">💬💬</button>
            

    </ul>
    </>

    )
}
export default Therapist