import React from 'react'
import {TableCell} from "@mui/material";

const MainTableCells = ({cellNames, row}) => {
    return (
        <>
            {cellNames.map((cellName, index) => {
                return (
                    <TableCell key={cellName+index} align='center' padding='none'>
                        {row[cellName] || '-'}
                    </TableCell>
                )
            })}
        </>
    )
}

export default MainTableCells