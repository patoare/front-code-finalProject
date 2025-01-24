import { useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react"
import { Link } from "react-router-dom";

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
    <h1 className="titlePage"> TRENDS </h1>
    <ul className="cardsContainer">
    {treatments.map(currentTreatment => (
        <li className="cardsOfTreatment" key={currentTreatment._id}>
            <p className="description">{currentTreatment.description}</p>
            <p># {currentTreatment.therapeuticTech}</p>
            <p> {currentTreatment.exercises}</p>
            <button className="button" type="button" onClick={() => handleDelete(currentTreatment._id)}>Delete</button>
            <Link to={`/treatment/${currentTreatment._id}`}><button className="button" type="button">View More</button></Link> 
            </li>
    ))}
    </ul>
    </>
    )
    }
    export default Trends
    
    