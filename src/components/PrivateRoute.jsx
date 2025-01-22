import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

const PrivateRoute = ({children}) => {

    const { isAuthenticated, isLoading } = useContext(AuthContext)

    if(isLoading) {
        return <h3>Loading..</h3>
    }
    
    if (!isAuthenticated) {
        return <Navigate to='/login' />
    }
return children
}
export default PrivateRoute