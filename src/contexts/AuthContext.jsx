import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()


const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect (() => {
        if(token) {
            setIsAuthenticated(true)
            localStorage.setItem('authToken', token)
        }
    }, [token])

    useEffect(() => {
        const storageToken = localStorage.getItem('authToken')
        if(storageToken) {
            setToken(storageToken)
        }
    })

    return (<AuthContext.Provider value={{setToken, isAuthenticated}}>{children}</AuthContext.Provider>);

}
export default AuthContextProvider