import { Link } from "react-router-dom"
import '../style/App.css'
import logo from '../assets/logo_transparent.png'

const Footer = () => {


return (
    <nav className="Footer">
        <>
        <ul className="footerMenu">
            <li>
               <Link to="/">Home</Link>
            </li>
            <img  className="logoFooter" src={logo} alt="Description of image" />
        </ul>
        </>
    </nav>
)
}
export default Footer