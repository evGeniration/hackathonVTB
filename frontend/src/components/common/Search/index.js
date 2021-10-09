import React from 'react'
import {Input, InputAdornment, TextField} from "@mui/material";
import {ReactComponent as SearchIcon} from "../../../assets/search.svg";

const Search = (
    {
        onChange, placeholder,
    }
    ) => {

    return (
        <TextField
            placeholder={placeholder}
            onChange={onChange}
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <SearchIcon/>
                    </InputAdornment>
                )
            }}

        />
    )
}

export default Search