import { useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react"

const Trends = () => {
    const {token} = useContext(AuthContext)
    const [treatments, setTreatments] = useState([]);
    const fetchAllTreatments = async() => {
        try {
            const response = await fetch (`${import.meta.env.VITE_API_URL}/api/treatments`)
            if(response.ok) {
                const treatmensData = await response.json()
                setTreatments(treatmensData)
            }
        }catch(error) {
         console.log(error)
        }
    }

    useEffect(() => {
        fetchAllTreatments()
    }, [])

const handleDelete = async (currentTreatmentId) => {
try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/treatments/${currentTreatmentId}`, {
        method: 'DELETE', 
        headers: {
            Authorization: `Bearer ${token}`, 
        },
    })
    if(response.status === 204) {
        fetchAllTreatments()
    }
} catch (error) {
    console.log(error)
}
}

    return (
    <>
    <h1> Trends </h1>
    <ul>
    {treatments.map(currentTreatment => (
        <li key={currentTreatment._id}>
            <p>{currentTreatment.description}</p>
            <button type="button" onClick={() => handleDelete(currentTreatment._id)}>Delete</button></li>
    ))}
    </ul>
    </>
    
    )
    }
    export default Trends
    
    