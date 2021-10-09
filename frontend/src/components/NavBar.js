import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../redux/actions/authAction";
import {Link} from "react-router-dom";

export const NavBar = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()
    console.log(isAuth)
    const handleClose = () => {
        dispatch(logOut)
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    {!isAuth && (<Link to={"/login"}>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Enter
                        </Typography>
                    </Link>)}
                    {isAuth && (
                        <div>
                            <IconButton
                                onClick={handleClose}
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                            {isAuth &&  <Menu
                                id="menu-appbar"
                                anchorEl={false}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(false)}

                            >
                            </Menu>}

                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
