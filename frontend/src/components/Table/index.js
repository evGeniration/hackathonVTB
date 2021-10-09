import React, {useState} from 'react'
import classes from './index.module.css'
import {TableRow} from "@mui/material";
import MainTableCells from "./TableComponents/MainTableCells";
import TableWrapper from "./TableComponents/TableWrapper";

const Table = ({rows}) => {

    const [sortValue, setSortValue] = useState(null)
    const columnNames = Object.keys(rows[0])
    sortValue && rows.sort((row1, row2) => row1[sortValue] > row2[sortValue] ? 1 : -1)

    return (
        <div className={classes.table}>
            <TableWrapper columnNames={columnNames} setSortValue={setSortValue}>
                {rows.map((row, index) => (
                    <TableRow
                        key={row + index}
                        hover={true}
                    >
                        <MainTableCells row={row} cellNames={columnNames}/>
                    </TableRow>
                ))}
            </TableWrapper>
        </div>
    )
}

export default Table