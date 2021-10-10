import React, {useContext, useEffect, useReducer, useState} from 'react';

const AuthContext = React.createContext()
export const AuthContextProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState({});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user')) || {}
        Object.keys(user).length ? setIsAuth(user) : setIsAuth({})
    }, [])
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(isAuth)) //: localStorage.setItem('user', 'false')
    }, [isAuth])
    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            {children}
        </AuthContext.Provider>
    );
};


export const useIsAuth = () => useContext(AuthContext)
