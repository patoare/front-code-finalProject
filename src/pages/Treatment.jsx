import { useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react"
import { useParams } from "react-router-dom";


const Treatment = () => {

    const {token} = useContext(AuthContext)
    const { id } = useParams();
    const [oneTreat, setOneTreat] = useState([]);
    
   
    const fetchOneTreat = async() => {
       
        try {
            const response = await fetch (`${import.meta.env.VITE_API_URL}/api/treatments/${id}`, {
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
    }, [id])



    return(
        <>
    <h2 className="titlePage">THIS TREATMENT MATCHES YOUR EXPERTISE</h2>
    <ul>
    
            <p>{oneTreat.description}</p>
            <p>{oneTreat.therapeuticTech}</p>
            <p>{oneTreat.frecuency}</p>
            <p>{oneTreat.duration}</p>
            <p>{oneTreat.comments}</p>
           
            <button className="button" type="button">corazon</button>
            
            
    <button className="button" type="button">Comment</button>

            

    </ul>
    </>

    )
}
export default Treatment