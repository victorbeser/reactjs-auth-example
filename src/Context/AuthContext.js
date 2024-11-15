import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    const isAuthenticated = () => {
        return user !== null;
    };

    return (
        <AuthContext.Provider value={{user, login, logout, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );

};


export const useAuth = () => {
    return useContext(AuthContext);
};