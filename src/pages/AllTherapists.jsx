import { useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react"

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
    return (
    <>
    <h1> All Therapists Page</h1>
    <ul>
    {users.map(user => (
                    <li key={user._id}>
                        <p>{user.username}</p>
                        </li>
                ))}
    </ul>
    </> 

    )
    }
    export default TherapistsPage
    
    