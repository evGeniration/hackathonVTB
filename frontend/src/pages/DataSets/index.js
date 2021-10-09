import React from 'react'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const DataSets = props => {
    return (
        <div>
            <Link to='/datasets/123'>
                <Button size='large' variant='contained'>
                    DataSet 1
                </Button>
            </Link>
        </div>
    )
}

export default DataSets