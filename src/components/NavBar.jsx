import { Link } from "react-router-dom"

const NavBar = () => {
return (
    <nav>
        <ul>
            <li>
<Link to="/">Home</Link>
            </li>
            <li>
<Link to="/signup">Signup</Link>
            </li>
            <li>
<Link to="/trends">Trends</Link>
            </li>
            <li>
<Link to="/therapists">All therapists</Link>
            </li>
           
        </ul>
    </nav>
)
}
export default NavBar