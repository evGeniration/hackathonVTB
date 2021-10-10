import React from 'react'
import classes from './index.module.css'
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
        <div className={classes.chartConfig}>
            <RadioGroup>
                <p>Argument</p>
                {Object.keys(data[0]).map((itemName, index) => (
                    <FormControlLabel key={index} value={itemName} control={<Radio onChange={(event)=>setChartArgument(event.target.value)}/>} label={itemName}/>
                ))}
            </RadioGroup>

            <RadioGroup>
                <p>Value</p>
                {Object.keys(data[0]).map((itemName,index) => {
                    if(typeof data[0][itemName]==='number' ) return <FormControlLabel key={index} value={itemName} control={<Radio onChange={(event)=>setChartValue(event.target.value)}/>} label={itemName}/>
                    }
                )}
            </RadioGroup>

            <RadioGroup>
                <p>Chart</p>
                {chartTypes.map((chartType,index) => (
                    <FormControlLabel key={index} value={chartType} control={<Radio onChange={(event)=>setChartType(event.target.value)}/>} label={chartType}/>
                ))}
            </RadioGroup>
        </div>
    )
}

export default ChartConfig
