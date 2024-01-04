import { createContext, useState, useEffect } from "react";

const AuthContext = createContext()

export default AuthContext


export const AuthProvider = ({children}) => {

    let [authToken, setAuthToken] = useState(null)
    let [user, setUser] = useState(null)

    // let loginUser = async () => {
    //     let response = 
    // }

    // let contextData = {
    //     user:
    // }

    return (


        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}