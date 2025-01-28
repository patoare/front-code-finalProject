import { Link } from "react-router-dom"
import '../style/App.css'
import logo from '../assets/logo_transparent.png'
import gitLogo from '../assets/gitLogo.png'
import linkedIn from '../assets/linkedIn.png'

const Footer = () => {


return (
    <nav className="Footer">
        <>
        <ul className="footerMenu">
            <li>
               <Link to="/">
               <img  className="logoFooter" src={logo} alt="logo" />
               </Link>
            </li>
           
            <li className="socialLinks">
               <Link to="https://github.com/patoare" target="_blank" rel="noopener noreferrer">
               <img  className="gitLogo" src={gitLogo} alt="logo of github" />
               </Link>
            
               <Link to="https://www.linkedin.com/in/patricio-webdeveloper/" target="_blank" rel="noopener noreferrer">
               <img  className="linkedinLogo" src={linkedIn} alt="logo of linkedin" />
               </Link>
            </li>
            
           <h6>Designed by Patricio Arellano</h6>
        </ul>
        </>
    </nav>
)
}
export default Footer