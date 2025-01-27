import { useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


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
    };

    useEffect(() => {
        fetchOneTreat();
    }, [id])



    return(
        <>
    <h2 className="titlePage">THIS TREATMENT MATCHES YOUR EXPERTISE</h2>
    <ul>
    
            <p><strong>{oneTreat.description}</strong></p>
            <p><strong>Date:</strong> {oneTreat.date}</p>
            <p><strong>Visit number:</strong> {oneTreat.visitNumber}</p>
            <p><strong>Focus in:</strong> {oneTreat.therapeuticTech}</p>
            <p> <strong>#</strong> {oneTreat.hashtag}</p>
          </ul> 
          <li><Link to={`/comments/${id}`}>
              <button className="button" type="button">Comments</button>
            </Link>
            </li>
    </>
  );
};

export default Treatment