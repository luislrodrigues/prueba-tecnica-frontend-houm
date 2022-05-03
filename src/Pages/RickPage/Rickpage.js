import React, { useEffect } from "react";
import Characters from "../../Components/Characters";
import Search from "../../Components/Search";
import Paginate from "../../Components/Paginate";
import Filter from "../../Components/Filter";
import { CssBaseline, Grid } from "@mui/material";
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
                <Grid item xs={12} sm={4} md={3} lg={3} sx={{mb:2}} >
                    <Box sx={{mx:4,mb:2}}>
                        <Search handleSearch={handleSearch} />
                    </Box>
                    <Box sx={{mx:4}}>
                        <Filter
                            handleChangeGender={handleChangeGender}
                            handleChangeStatus={handleChangeStatus}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9} lg={9} >
                    <Characters characters={characters}/>
                </Grid>
            </Grid>
            <Grid item xs={12} >
                <Paginate
                    info={info}
                    characters={characters}
                    updatePage={updatePage}
                />
            </Grid>
        </Grid>
    );
}
