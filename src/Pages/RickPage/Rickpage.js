import React, { useEffect } from "react";
import Characters from "../../Components/Characters/Characters";
import Search from "../../Components/Search";
import Filter from "../../Components/Filter";
import { CssBaseline, Grid } from "@mui/material";
import Paginate from "../../Components/Paginate/Paginate";
import useRickAndMorty from "../../hooks/useRickAndMorty";
import { Box } from "@mui/system";
export default function Rickpage() {
    const {
        getCharacters,
        characters,
        ENDPOINT,
        info,
        handleSearch,
        updatePage,
        handleChangeGender,
        handleChangeStatus,
    } = useRickAndMorty();

    useEffect(() => {
        getCharacters();
    }, [ENDPOINT,getCharacters]);

    return (
        <Grid container sx={{margin:1}}>
        <CssBaseline />
            <Grid container>
                <Grid item xs={12} sm={8} md={9} lg={9} >
                    <Characters characters={characters}/>
                </Grid>
            </Grid>
        </Grid>
    );
}