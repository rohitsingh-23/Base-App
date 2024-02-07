import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({user: "Rohit"});

    const data = {
        user: user,
        setUserData: setUser
    }

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
