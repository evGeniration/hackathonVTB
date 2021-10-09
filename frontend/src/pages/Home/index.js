import React from 'react'
import classes from './index.module.css'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const Home = props => {
    return (
        <div className={classes.main}>
            <Link to={'/datasets'}>
                <Button className={classes.main_button} size='large' variant='contained'>
                    DataSets
                </Button>
            </Link>
        </div>
    )
}

export default Home