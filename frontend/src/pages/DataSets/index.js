import React from 'react'
import classes from './index.module.css'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import {ColumnWrapper} from "../../components/ColumnWrapper";

const DataSets = () => {
    const dataSet =
        [
            {
                tableTitle: "People",
                types: [{
                    name: "name",
                    type: 'string'
                },
                    {
                        name: "age",
                        type: 'number'
                    },
                    {
                        name: "date",
                        type: 'time Date'
                    },
                    {
                        name: "salary",
                        type: 'number'
                    }]
            },
            {
                tableTitle: "Animal",
                types: [
                    {
                        name: "name",
                        type: 'string'
                    },
                    {
                        name: "age",
                        type: 'number'
                    },
                    {
                        name: "legs",
                        type: 'number'
                    },
                    {
                        name: "eat",
                        type: 'string'
                    }]
            }
        ]

    return (
        <div className={classes.container}>
            {dataSet.map((tableEl, index) =>
                <ColumnWrapper tableInfo={tableEl} key={index}/>)}
        </div>
    )
}

export default DataSets
