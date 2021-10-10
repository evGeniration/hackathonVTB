import React, {useEffect, useState} from 'react'
import classes from './index.module.css'
import Table from "../../components/Table";
import {useLocation} from "react-router";
import PieChart from "../../components/Charts/PieChart";
import BarChart from "../../components/Charts/BarChart";
import ChartConfig from "../../components/Charts/ChartConfig";
import {postData} from "../../API";

const DataSet = props => {
    const [data, setData] = useState(null)
    const [chartConfig, setChartConfig] = useState({argument:'', value: '', chart:''})
    const chartRender = {
        'pie': (data, value, argument) => <PieChart data={data} valueField={value} argumentField={argument}/>,
        'bar': (data, value, argument) => <BarChart data={data} valueField={value} argumentField={argument}/>
    }
    const location = useLocation()
    useEffect(()=>{
        (async ()=>{
            await postData(location.state.dataQuery).then(res=>setData(res.data.table))
        })()
    },[])
    console.log(data)
    return (
        <div className={classes.dataset}>

            {data && <><Table rows={data} />
                <ChartConfig data={data} chartConfig={chartConfig} setChartConfig={setChartConfig} />
                {chartConfig.argument && chartConfig.value && chartConfig.chart && chartRender[chartConfig.chart](data, chartConfig.value, chartConfig.argument)}</>
            }
        </div>
    )
}

export default DataSet
