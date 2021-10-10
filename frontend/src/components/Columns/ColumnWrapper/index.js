import React, {useState} from 'react';
import classes from './index.module.css'
import {ColumnTitle} from "../ColumnTile";
import ColumnPicker from "../ColumnPicker";
import {Card} from "@mui/material";

const ColumnWrapper = ({tableInfo, addInfo, removeInfo}) => {


    return (
        <div className={classes.columnWrapper}>
            <ColumnTitle tableTitle={tableInfo.tableTitle}/>
            <Card className={classes.columnWrapper_card}>
                {tableInfo.types.map((field, index) => <ColumnPicker addInfo={addInfo} removeInfo={removeInfo}key={index} info={field}/>)}
            </Card>
        </div>
    );
};

export default ColumnWrapper