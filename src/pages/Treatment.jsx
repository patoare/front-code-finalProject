import { useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react"



const Treatment = ({ currentTreatmentId }) => {

    const {token} = useContext(AuthContext)
    const [oneTreat, setOneTreat] = useState([]);
   
    const fetchOneTreat = async() => {
       
        try {
            const response = await fetch (`${import.meta.env.VITE_API_URL}/api/treatments/${currentTreatmentId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            if(response.ok) {
                const oneTreatData = await response.json()
                setOneTreat(oneTreatData)
            }

        }catch(error) {
         console.log(error)
        }
    }
    useEffect(() => {
        fetchOneTreat()
    }, [currentTreatmentId])



    return(
        <>
    <h2>You're seeing a single treatment because you're interested on it</h2>
    <ul>
    
            <p>{oneTreat.description}</p>
            <p>{oneTreat.therapeuticTech}</p>
            <button type="button">corazon</button>
            <button type="button">comment</button>
            

    </ul>
    </>

    )
}
export default Treatment