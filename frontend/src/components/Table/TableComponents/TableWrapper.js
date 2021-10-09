import React from 'react'
import {Paper, Table, TableBody, TableContainer} from "@mui/material";
import TableHeadRow from "./TableHeadRow";


const TableWrapper = ({children, columnNames, setSortValue}) => {
    return (
        <Paper>
            <TableContainer>
                <Table stickyHeader aria-label='sticky table'>
                    <TableHeadRow columnNames={columnNames} setSortValue={setSortValue}/>
                    <TableBody>{children}</TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default TableWrapper