import React, {useEffect} from 'react';
import {NavBar} from "./NavBar";
import {Main} from "./Main";
import {useDispatch} from "react-redux";
import {logIn} from "../redux/actions/authAction";

const Layout = ({children}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        if(localStorage.getItem('auth')) {
            dispatch(logIn)
        }
    }, [])

    return (
        <>
            <NavBar/>
            <Main>
                {children}
            </Main>
        </>
    );
};

export default Layout;
