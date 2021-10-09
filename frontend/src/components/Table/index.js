import React, {useState} from 'react'
import classes from './index.module.css'
import {TableRow} from "@mui/material";
import MainTableCells from "./TableComponents/MainTableCells";
import TableWrapper from "./TableComponents/TableWrapper";

const Table = ({rows, columnNames}) => {

    const [sortValue, setSortValue] = useState(null)


    // columnNames = [
    //     'id',
    //     'name',
    //     'surname',
    //     'birthDate',
    //     'salary'
    // ]
    //
    // rows = [
    //     {
    //         id: 'asdfda',
    //         name: 'Danya',
    //         surname: 'Alyukov',
    //         birthDate: (new Date(2002, 1, 21)).toDateString(),
    //         salary: 10
    //     },
    //     {
    //         id: 'sadamm',
    //         name: 'Ruslan',
    //         surname: 'Bochkov',
    //         birthDate: (new Date(2001, 5, 15)).toDateString(),
    //         salary: 18
    //     },
    //     {
    //         id: 'kclnlj',
    //         name: 'Evgeniy',
    //         surname: 'Zoloedov',
    //         birthDate: (new Date(2001, 1, 22)).toDateString(),
    //         salary: 5
    //     },
    //     {
    //         id: 'dfdada',
    //         name: 'Vladimir',
    //         surname: 'Mikhailov',
    //         birthDate: (new Date(2001, 5, 10)).toDateString(),
    //         salary: 30
    //     },
    //     {
    //         id: 'aklsdf',
    //         name: 'Artemiy',
    //         surname: 'Yudin',
    //         birthDate: (new Date(1999, 6, 4)).toDateString(),
    //         salary: 8
    //     },
    // ]

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