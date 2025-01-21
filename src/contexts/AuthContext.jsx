import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()


const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
const verifyToken = async(tokenToVerify) => {
    try {
const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/verify`, {
    headers: {
        Authorization: `Bearer ${tokenToVerify}`
    }
})
if(response.ok) {
    const data = await response.json()
    console.log(data)
    setToken(tokenToVerify)
} else {
    localStorage.removeItem('authToken')
}
    } catch(error){
console.log(error)
localStorage.removeItem('authToken')
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
        }
    })

    return (<AuthContext.Provider value={{setToken, isAuthenticated}}>{children}</AuthContext.Provider>);

}
export default AuthContextProvider