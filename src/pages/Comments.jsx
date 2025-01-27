import { Link } from "react-router-dom";


const Comments = () => {
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