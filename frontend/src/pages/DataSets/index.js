import React from 'react'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const DataSets = props => {

    const data = [
        '123', 'dfs', '234td', 'wq1rt4'
    ]

    return (
        <>
            {data.map(id => (
                <Link key={id} to={`/datasets/${id}`}>
                    <Button size='large' variant='contained'>
                        DataSet {id}
                    </Button>
                </Link>
            ) )}
        </>
    )
}

export default DataSets