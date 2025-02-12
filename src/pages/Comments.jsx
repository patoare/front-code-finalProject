import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Comments = () => {
    const navigate = useNavigate()
    const {token} = useContext(AuthContext)
    const{ id } = useParams()
    const [comments, setComments] = useState([]);
    const [date, setDate] = useState('');
    const [visitNumber, setVisitNumber] = useState('')
    const [commentPatient, setCommentPatient] = useState('');
    const [commentTreatment, setCommentTreatment] = useState('');

    const fetchComments = async() => {
        if (!id) {
            console.log("No treatment ID provided");
            return;
          }
        
            try {
                const response = await fetch (`${import.meta.env.VITE_API_URL}/api/comments/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                if(response.ok) {
                    const commentsData = await response.json();
                    setComments(commentsData);

                }
    
            }catch(error) {
             console.log(error)
            }
        };
    
        useEffect(() => {
            fetchComments();
        }, [id])
    
        const handleCreateComment = async (e) => {
            e.preventDefault();
        
            if (!commentPatient || !commentTreatment || !date) {
              alert("Please fill in all fields");
              return;
            }
        
            try {
              const response = await fetch(`${import.meta.env.VITE_API_URL}/api/comments`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  treatment: id,
                  date: date,
                  visitNumber: visitNumber,
                  commentPatient: commentPatient,
                  commentTreatment: commentTreatment,
                }),
              });
        
              if (response.ok) {
                const newComment = await response.json();
                setComments([...comments, newComment]); // Add the new comment to the list
                setDate('');
                setVisitNumber ('');
                setCommentPatient('');
                setCommentTreatment('');
              } else {
                console.log("Error posting comment");
              }
            } catch (error) {
              console.log(error);
            }
          };

return (
    <div>
      <h1 className="titlePage">History of treatments </h1>

      {/* Form to create a new comment */}
      <h2 className="titlePage">New session</h2>
      <form className="formCreate" onSubmit={handleCreateComment}>
      <label  className="labelForm">
          Date:
          <textarea className="textCreate"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></textarea>
        </label>
        <label  className="labelForm">
          Visit Number:
          <textarea className="textCreate"
            value={visitNumber}
            onChange={(e) => setVisitNumber(e.target.value)}
          ></textarea>
        </label>
        <label  className="labelForm">
          Comments about the patient:
          <textarea className="textCreate"
            value={commentPatient}
            onChange={(e) => setCommentPatient(e.target.value)}
          ></textarea>
        </label>
        <br />
        <label  className="labelForm">
          Comments about the treatment:
          <textarea className="textCreate"
            value={commentTreatment}
            onChange={(e) => setCommentTreatment(e.target.value)}
          ></textarea>
        </label>
        <br />
        <div className="comment-buttons">
        <button className="button" type="submit">Post Comment</button>
        <Link to={`/treatment/${id}`}>
              <button className="button" type="button">Back</button>
            </Link>
            </div>
      </form>
      {/* Show existing comments */}
      <div className="comments-container">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div className="treatment-container" key={comment._id}>
              <div className="date-visit-container">
              <p><strong>Date:</strong> {comment.date}</p>
              <p><strong>Visit Number:</strong> {comment.visitNumber}</p>
              </div>
              <p><strong>Patient Comment:</strong> {comment.commentPatient}</p>
              <p><strong>Treatment Comment:</strong> {comment.commentTreatment}</p>
            </div>
          ))
        ) : (
          <p>No comments yet</p>
        )}
      </div>
    </div>
  );
};
export default Comments;