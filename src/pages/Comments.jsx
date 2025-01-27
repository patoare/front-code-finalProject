import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";

const Comments = () => {
    const navigate = useNavigate()
    const {token} = useContext(AuthContext)
    const{ id } = useParams()
    const [comments, setComments] = useState([]);
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
        
            if (!commentPatient || !commentTreatment) {
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
                  commentPatient: commentPatient,
                  commentTreatment: commentTreatment,
                }),
              });
        
              if (response.ok) {
                const newComment = await response.json();
                setComments([...comments, newComment]); // Add the new comment to the list
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
      <h1>Comments for Treatment</h1>

      {/* Show existing comments */}
      <div>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment._id}>
              <p><strong>Patient Comment:</strong> {comment.commentPatient}</p>
              <p><strong>Treatment Comment:</strong> {comment.commentTreatment}</p>
            </div>
          ))
        ) : (
          <p>No comments yet</p>
        )}
      </div>

      {/* Form to create a new comment */}
      <h2>Add a new comment</h2>
      <form onSubmit={handleCreateComment}>
        <label>
          Comments about the patient:
          <textarea
            value={commentPatient}
            onChange={(e) => setCommentPatient(e.target.value)}
          ></textarea>
        </label>
        <br />
        <label>
          Comments about the treatment:
          <textarea
            value={commentTreatment}
            onChange={(e) => setCommentTreatment(e.target.value)}
          ></textarea>
        </label>
        <br />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
};
export default Comments;