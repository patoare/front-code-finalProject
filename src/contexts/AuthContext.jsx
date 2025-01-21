import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState();
    useEffect (() => {
        console.log(token)
    }, [token])
    return (<AuthContext.Provider value={{setToken}}>{children}</AuthContext.Provider>);

}
export default AuthContextProvider