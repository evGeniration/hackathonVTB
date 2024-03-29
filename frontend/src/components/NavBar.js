import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../redux/actions/authAction";
import {Link} from "react-router-dom";
import {useIsAuth} from "../context/AuthContextProvider";
import styles from "./navBar.module.css"

export const NavBar = () => {


    const {isAuth, setIsAuth}=useIsAuth()


    return (
        <Box  sx={{flexGrow: 1, }}>
            <AppBar position="static">
                <Toolbar className={styles.navBarBox}>
                   <Typography className={styles.containerText}><Link to="/" className={styles.text}>Home</Link></Typography>
                    {Object.keys(isAuth).length ? (<Typography className={styles.containerText}  onClick={()=>setIsAuth({})}>Logout</Typography>):(<Typography><Link className={styles.text} to={'/login'}>Login</Link></Typography>)}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
