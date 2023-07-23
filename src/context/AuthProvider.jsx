import { createContext, useState } from "react";

export const AuthContext  = createContext();
export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState('test');
    const [userName, setUserName] = useState('');

    return (
    <AuthContext.Provider value={{ isAuth, userName}}>
        {children}
    </AuthContext.Provider>
    );
};
