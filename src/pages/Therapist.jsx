import { useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react"
import { useParams } from "react-router-dom";


const Therapist = () => {

    const {token} = useContext(AuthContext)
    const { id } = useParams();
    const [oneTherapsit, setOneTherapist] = useState([]);
    
   
    const fetchOneTherapsit = async() => {
       
        try {
            const response = await fetch (`${import.meta.env.VITE_API_URL}/api/therapists/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            if(response.ok) {
                const oneTherapsitData = await response.json()
                setOneTherapist(oneTherapsitData)
            }

        }catch(error) {
         console.log(error)
        }
    }
    useEffect(() => {
        fetchOneTherapsit()
    }, [id])



    return(
        <>
    <h2>You're seeing a single Therapsit because you liked  the profile</h2>
    <ul>
    
            <p>{oneTherapsit.username}</p>
            <p>{oneTherapsit.surname}</p>
            <button type="button">❤️</button>
            <button type="button">💬💬</button>
            

    </ul>
    </>

    )
}
export default Therapist