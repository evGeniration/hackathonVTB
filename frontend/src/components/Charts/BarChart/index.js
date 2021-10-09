import React from 'react'
import {Paper} from "@mui/material";
import {ArgumentAxis, BarSeries, Chart, Title, ValueAxis} from "@devexpress/dx-react-chart-material-ui";

const BarChart = ({data, valueField, argumentField}) => {
    return (
        <Paper>
            <Chart
                data={data}
                >
                <ArgumentAxis />
                <ValueAxis max={data.length}/>
                <BarSeries argumentField={argumentField} valueField={valueField}/>
                <Title text={valueField}/>
            </Chart>
        </Paper>
    )
}

export default BarChart