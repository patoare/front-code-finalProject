import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

const AnonymusRoute = ({children}) => {

    const { isAuthenticated } = useContext(AuthContext)
    
    if (isAuthenticated) {
        return <Navigate to='/profile' />
    }
return children
}
export default AnonymusRoute