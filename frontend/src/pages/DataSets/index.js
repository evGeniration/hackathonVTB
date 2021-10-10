import React, {useEffect, useState} from 'react'
import classes from './index.module.css'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import ColumnWrapper from "../../components/Columns/ColumnWrapper";

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
    const [infos, setInfos] = useState([])

    const addInfo = (info) => {
        setInfos([...infos, info])
    }

    const removeInfo = (info) => {
        setInfos(infos.filter(inf => inf.name !== info.name))
    }

    useEffect(()=>{
        data.fields = infos
    },[infos])

    const data = {
        fields: infos,
        count: 10
    }

    return (
        <>
            <div className={classes.container}>
                {dataSet.map((tableEl, index) =>
                    <ColumnWrapper addInfo={addInfo} removeInfo={removeInfo} tableInfo={tableEl} key={index}/>)}
            </div>
            <Link
                to={{
                    pathname:'/datasets/charts',
                    state: {

                    }
                }}
            >
                <Button size='large' variant={'contained'}>Send</Button>
            </Link>
        </>
    )
}

export default DataSets
