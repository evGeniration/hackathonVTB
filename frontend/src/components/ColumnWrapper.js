import React from 'react';
import {ColumnTitle} from "./ColumnTile";
import {ColumnPicker} from "./ColumnPicker";
import {Card} from "@mui/material";

export const ColumnWrapper = ({tableInfo}) => {
    console.log(tableInfo)
    return (
        <div>
            <Card >
                <ColumnTitle tableTitle={tableInfo.tableTitle}/>
                <Card style={{display:"flex"}}>
                    {tableInfo.types.map((field, index) => <ColumnPicker key={index} info={field}/>)}
                </Card>
            </Card>
        </div>
    );
};

