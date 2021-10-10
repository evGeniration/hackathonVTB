import React, {useEffect, useState} from 'react'
import classes from './index.module.css'
import {fetchDataSetTypes} from "../../utils/datasetUtils";
import {getUser} from "../../utils/utils";
import ColumnWrapper from "../../components/Columns/ColumnWrapper";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

export const DataSets = () => {
    const [data, setDate] = useState([])
    const [infos, setInfos] = useState([])
    console.log(infos)
    const addInfo = (info) => {
        setInfos([...infos, info])
    }

    const removeInfo = (info) => {
        setInfos(infos.filter(inf => inf.name !== info.name))
    }
    const [inputCount,setInputCount]=useState(10)

    useEffect(() => {
        dataQuery.fields = infos
        dataQuery.count=inputCount
    }, [infos,inputCount])
    const onChangeHandler = () => {

    }
    const dataQuery = {
        fields: infos,
        count: inputCount
    }

    useEffect(() => {
        (async () => {
            const user = getUser('user')
            console.log(user)
            await fetchDataSetTypes(user.role.datasetArr).then(res => setDate(res))
        })()
    }, [])
    return (
        <>
            <div className={classes.container}>
                {data.map((data, index) => <ColumnWrapper addInfo={addInfo} removeInfo={removeInfo} tableInfo={data}
                                                          key={index}/>)}
            </div>
            <input value={inputCount} type='number' onChange={(e)=>setInputCount(e.target.value)}/>
            {(inputCount<50 && inputCount>5)?<Link
                to={{
                pathname: '/datasets/charts',
                state: {
                dataQuery
            }
            }}
                >
                <Button size='large' variant={'contained'}>Send</Button>
                </Link>:<h1>Введите меньше</h1>}
        </>
    )
}
