import { Link } from "react-router-dom"
import '../style/App.css'

const Footer = () => {


return (
    <nav className="Footer">
        <>
        <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
        </ul>
        </>
    </nav>
)
}
export default Footer