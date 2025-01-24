import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"


const NavBar = () => {
const {isAuthenticated, logout} = useContext(AuthContext)

return (
    <nav>
        <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            {!isAuthenticated && (
             <>
            <li>
               <Link to="/signup">Signup</Link>
            </li>
            <li>
               <Link to="/login">Login</Link>
            </li>
            
             </>
              )}
               
              {isAuthenticated && (
                <>
               
            <li>
               <Link to="/trends">Trends</Link>
            </li>
            <li>
               <Link to="/therapists">All therapists</Link>
            </li>
            <li>
               <Link to="/treatments/new">Create treatment</Link>
            </li>
            <li>
               <Link to="/profile/">Profile</Link>
            </li>
            <li>
               <button type="button" onClick={logout}>Logout</button>
            </li>
             </>
             )}
        </ul>
    </nav>
)
}
export default NavBar