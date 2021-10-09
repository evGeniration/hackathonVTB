import React, {useState} from 'react'
import Table from "../../components/Table";
import {useHistory, useLocation} from "react-router";
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
    // const history = useHistory()
    const location = useLocation()

    const columnNames = Object.keys(ds[0])

    return (
        <div>
            <h1>{location.state.dataset.name}</h1>
            <Table columnNames={columnNames} rows={ds} />
            <ChartConfig data={ds} chartConfig={chartConfig} setChartConfig={setChartConfig}/>
            {chartConfig.argument && chartConfig.value && chartConfig.chart && chartRender[chartConfig.chart](ds, chartConfig.value, chartConfig.argument)}
        </div>
    )
}

export default DataSet