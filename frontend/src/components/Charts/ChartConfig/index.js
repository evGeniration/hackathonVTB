import React from 'react'
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";

const ChartConfig = ({data, setChartConfig, chartConfig}) => {

    const chartTypes = ['pie','bar']

    const setChartArgument = (argument) => {
        setChartConfig({...chartConfig, argument})
    }

    const setChartValue = (value) => {
        setChartConfig({...chartConfig, value})
    }

    const setChartType = (chart) => {
        setChartConfig({...chartConfig, chart})
    }

    return (
        <div>
            <p>Argument</p>
            <RadioGroup>
                {Object.keys(data[0]).map(itemName => (
                    <FormControlLabel value={itemName} control={<Radio onChange={(event)=>setChartArgument(event.target.value)}/>} label={itemName}/>
                ))}
            </RadioGroup>
            <p>Value</p>
            <RadioGroup>
                {Object.keys(data[0]).map(itemName => {
                    if(typeof data[0][itemName]==='number') return <FormControlLabel value={itemName} control={<Radio onChange={(event)=>setChartValue(event.target.value)}/>} label={itemName}/>
                    }
                )}
            </RadioGroup>
            <p>Chart</p>
            <RadioGroup>
                {chartTypes.map(chartType => (
                    <FormControlLabel value={chartType} control={<Radio onChange={(event)=>setChartType(event.target.value)}/>} label={chartType}/>
                ))}
            </RadioGroup>
        </div>
    )
}

export default ChartConfig