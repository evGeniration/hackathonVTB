import React, {useState} from 'react'
import Table from "../../components/Table";
import {useHistory, useLocation} from "react-router";
import ds from '../../dataset.json'
import PieChart from "../../components/Charts/PieChart";
import BarChart from "../../components/Charts/BarChart";

const DataSet = props => {

    const [chartConfig, setChartConfig] = useState({argument:'', value: '', chart:''})
    const history = useHistory()
    const location = useLocation()

    const columnNames = Object.keys(ds[0])

    return (
        <div>
            <h1>{location.state.dataset.name}</h1>
            <Table columnNames={columnNames} rows={ds} />
            <PieChart data={ds} valueField={'salary'} argumentField={'name'}/>
            <BarChart data={ds} valueField={'salary'} argumentField={'name'}/>
        </div>
    )
}

export default DataSet