import React from 'react'
import {Paper} from "@mui/material"
import {
    Chart,
    PieSeries,
    Title,
    Legend
} from '@devexpress/dx-react-chart-material-ui'

const PieChart = ({data, argumentField, valueField}) => {
    return (
        <Paper>
            <Chart
                data={data}
            >
                <PieSeries
                    valueField={valueField}
                    argumentField={argumentField}
                />
                <Title
                    text={valueField}
                />
                <Legend/>
            </Chart>
        </Paper>
    )
}

export default PieChart