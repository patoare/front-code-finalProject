import { useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react"
import { Link } from "react-router-dom";

const TherapistsPage = () => {
    const {token} = useContext(AuthContext)
    const [users, setUsers] = useState([]);
    const fetchAllUsers = async() => {
        try {
            const response = await fetch (`${import.meta.env.VITE_API_URL}/api/therapists`)
            if(response.ok) {
                const userData = await response.json()
                setUsers(userData)
            }
        }catch(error) {
         console.log(error)
        }
    }
    useEffect(() => {
        fetchAllUsers()
    }, [])

    const handleId = async (currentTherapistId) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/therapists/${currentTherapistId}`, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            })
            
        } catch (error) {
            console.log(error)
        }
        }

    return (
    <>
    <h1 className="titlePage"> LIST OF THERAPIST</h1>
    <ul className="cardsContainer">
    {users.map(user => (
                    <li className="cardsOfTreatment" key={user._id}>
                        <p><strong>{user.username} {user.surname}</strong></p>
                        <p><strong>{user.country}</strong></p>
                        <Link to={`/therapist/${user._id}`}>
  <button className="button" type="button">View More</button>
</Link> 
                        </li>
                ))}
    </ul>
    <div className="button-container">
    <Link to={`/trends`}>
              <button className="button" type="button">Trends</button>
            </Link>
            </div>
    </> 

    )
    }
    export default TherapistsPage
    
    