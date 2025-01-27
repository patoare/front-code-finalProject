import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react"
import { useParams } from "react-router-dom";


const Comments = () => {

const fetchOneTreat = async() => {
    const {token} = useContext(AuthContext)
    const { id } = useParams();
    const [oneTreat, setOneTreat] = useState([]);

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
        <label className="labelForm" >Possitive Feedback:
        <textarea className="textCreate" required value={description} onChange={event => setDescription(event.target.value)} />
    </label>
    <Link to={`/comments/${user._id}`}>
    <button className="button" type="button">View More</button>
  </Link> 
  </>
    )
}
export default Comments;