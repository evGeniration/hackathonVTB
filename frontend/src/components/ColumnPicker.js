import React from 'react';
import {Card, checkboxClasses} from "@mui/material";
import {Input} from "@material-ui/core";

export const ColumnPicker = ({info}) => {
    console.log(info)
    return (
        <>
            <label>
            <Card>
                <h3>
                    {info.fieldPath}
                </h3>
                <h4>
                    {info.type}
                </h4>
            </Card>
               <Input type='checkbox'/>
            </label>
        </>
    );
};

