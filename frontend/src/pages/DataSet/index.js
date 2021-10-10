import React, {useState} from 'react'
import classes from './index.module.css'
import Table from "../../components/Table";
import {useLocation} from "react-router";
import ds from '../../dataset.json'
import PieChart from "../../components/Charts/PieChart";
import BarChart from "../../components/Charts/BarChart";
import ChartConfig from "../../components/Charts/ChartConfig";

const DataSet = props => {

    const [chartConfig, setChartConfig] = useState({argument:'', value: '', chart:''})
    const chartRender = {
        'pie': (data, value, argument) => <PieChart data={data} valueField={value} argumentField={argument}/>,
        'bar': (data, value, argument) => <BarChart data={data} valueField={value} argumentField={argument}/>
    }
    const location = useLocation()

    return (
        <div className={classes.dataset}>
            <h1>{location.state.dataset.name}</h1>
            <Table rows={ds} />
            <ChartConfig data={ds} chartConfig={chartConfig} setChartConfig={setChartConfig}/>
            {chartConfig.argument && chartConfig.value && chartConfig.chart && chartRender[chartConfig.chart](ds, chartConfig.value, chartConfig.argument)}
        </div>
    )
}

export default DataSet