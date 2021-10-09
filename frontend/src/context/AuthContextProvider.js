import React, {useContext, useEffect, useReducer, useState} from 'react';
const AuthContext=React.createContext()
export const AuthContextProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState({});
    useEffect(()=>{
        localStorage.getItem('auth')?setIsAuth(true):setIsAuth(false)
    },[])
    useEffect(()=>{
        isAuth?localStorage.setItem('auth', isAuth):localStorage.setItem('auth','false')
    },[isAuth])
    return (
        <AuthContext.Provider value={{isAuth,setIsAuth}}>
            {children}
        </AuthContext.Provider>
    );
};



export const useIsAuth=() => useContext(AuthContext)
