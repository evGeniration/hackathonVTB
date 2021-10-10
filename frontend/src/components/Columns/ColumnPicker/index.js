import React, {useState} from 'react';
import {Card, Checkbox, checkboxClasses, FormControlLabel} from "@mui/material";
import classes from './index.module.css'

const ColumnPicker = ({info, addInfo, removeInfo}) => {

    const [checked, setChecked] = useState(false)

    const changeHandler = () => {
        if(checked){
            removeInfo(info)
            setChecked(false)
        }
        else{
            addInfo(info)
            setChecked(true)
        }
    }
    return (
        <>
            <label className={classes.columnPicker}>
            <Card>
                <h3>
                    <FormControlLabel control={<Checkbox checked={checked} onChange={()=>{changeHandler()}}/>} label={info.fieldPath}/>
                </h3>

                <h4>
                    {info.type}
                </h4>
            </Card>

            </label>
        </>
    );
};

export default ColumnPicker
