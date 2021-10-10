import React from 'react'
import {Button, Typography} from "@mui/material";
import {useHistory} from "react-router";

export const Home = () => {
    const history = useHistory()
    return (
        <>
            <Typography variant="h1">
                Пройдите регистрацию
            </Typography>
            <Button onClick={() => history.push('/login')}>Залогинится</Button>
        </>
    )
}


