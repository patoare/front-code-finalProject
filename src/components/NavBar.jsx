import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"
import '../style/App.css'
import logo from '../assets/logo_transparent.png'

const NavBar = () => {
const {isAuthenticated, logout} = useContext(AuthContext)

return (
    <nav className="NavBar">
       <img  className="logoStyle" src={logo} alt="Description of image" />
        <ul className="menuNavbar">
       
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
               <Link to="/profile/:id">Profile</Link>
            </li>
            <li>
               <button className="button" type="button" onClick={logout}>Logout</button>
            </li>
             </>
             )}
        </ul>
    </nav>
)
}
export default NavBar