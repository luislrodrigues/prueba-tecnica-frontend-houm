import { TextField } from "@mui/material";
import React from "react";
export default function Search({ handleSearch }) {
    return (
        <form onSubmit={handleSearch}>
            <TextField
                name="search"
                id="outlined-basic"
                label="Search"
                variant="outlined"
                sx={{
                    width:'100%',
                }}
            />
        </form>
    );
}
