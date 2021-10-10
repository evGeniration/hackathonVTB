import React, {useEffect, useState} from 'react'
import classes from './index.module.css'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import {ColumnWrapper} from "../../components/ColumnWrapper";
import {fetchDataSetTypes} from "../../utils/datasetUtils";
import {getUser} from "../../utils/utils";

const DataSets = () => {
    const [data,setDate]=useState([])
    const user=getUser('user')
    useEffect(()=>{
        (async ()=>{
            await fetchDataSetTypes(user.role.datasetArr).then(res=>setDate(res))
        })()
    },[])

    return (
        <div className={classes.container}>
            {data.map((data,index)=><ColumnWrapper tableInfo={data} key={index}/>)}
        </div>
    )
}

export default DataSets
