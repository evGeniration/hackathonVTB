import React from 'react'
import {TableCell, TableHead, TableRow} from "@mui/material";

const TableHeadRow = ({columnNames, setSortValue}) => {
    return (
        <TableHead>
            <TableRow>
                {columnNames.map((column, id) => (
                    <TableCell key={id + column} align='center' onClick={()=> {
                        setSortValue(column)
                    }}>
                        {column}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default TableHeadRow