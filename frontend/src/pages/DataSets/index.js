import React from 'react'
import classes from './index.module.css'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const DataSets = props => {

    const data = [
        {id: 'qjcdlk', name: 'ds1'},
        {id: 'aslasd', name: 'ds2'},
        {id: 'amsfoq', name: 'ds3'},
        {id: 'qo12rj', name: 'ds4'},
        {id: 'q1prfo', name: 'ds5'},
    ]

    return (
        <div className={classes.datasets}>
            {data.map(dataset => (
                <Link
                    key={dataset.id}
                    to={{
                        pathname: `/datasets/${dataset.id}`,
                        state: {
                            dataset
                        }
                    }}
                >
                    <Button className={classes.datasets_button} size='large' variant='contained'>
                        {dataset.name}
                    </Button>
                </Link>
            ))}
        </div>
    )
}

export default DataSets