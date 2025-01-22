import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()


const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

const verifyToken = async(tokenToVerify) => {
    try {
const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/verify`, {
    headers: {
        Authorization: `Bearer ${tokenToVerify}`
    }
})
if(response.ok) {
    setToken(tokenToVerify)
    setIsAuthenticated(true)
} else {
    localStorage.removeItem('authToken')
}
     setIsLoading(false)
    } catch(error){
console.log(error)
localStorage.removeItem('authToken')
setIsLoading(false)
    }
}
    useEffect (() => {
        if(token) {
            setIsAuthenticated(true)
            localStorage.setItem('authToken', token)
        }
    }, [token])

    useEffect(() => {
        const storageToken = localStorage.getItem('authToken')
        if(storageToken) {
            verifyToken(storageToken)
        } else {
            setIsLoading(false)
        }
    })

    const logout = () => {
        setToken()
        setIsAuthenticated(false)
        localStorage.removeItem('authToken')
    }

    return (<AuthContext.Provider value={{ token, setToken, isAuthenticated, isLoading, logout}}>{children}</AuthContext.Provider>);

}
export default AuthContextProvider