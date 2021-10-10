import React from 'react'
import {TableCell} from "@mui/material";

const MainTableCells = ({cellNames, row}) => {

    return (
        <>
            {cellNames.map((cellName, index) => {
                console.log(row[cellName] instanceof Boolean)
                return (
                    <TableCell key={cellName+index} align='center' padding='none'>
                        {/*{ typeof((row[cellName])==='boolean') ? Number(row[cellName]):row[cellName] }*/}
                        {row[cellName] || '-'}
                    </TableCell>
                )
            })}
        </>
    )
}

export default MainTableCells
