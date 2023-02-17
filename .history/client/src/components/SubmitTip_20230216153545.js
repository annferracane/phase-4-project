import * as React from 'react';
import { useState, useEffect, useContext } from "react";
import Hero from './Hero';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Container from '@mui/material/Container';


function SubmitTip() {

    const ctaFirst = ['See Schools','/schools'];
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 }
    ]

    useEffect(() => {
    fetch("/schools")
      .then((r) => r.json())
      .then((data) => setSchools(data));
    }, []);

    return (
        <>
        
            <Hero title="Submit a Tip" summary="Submit a tip for this school below." ctaFirst={ ctaFirst }/>
            <Container maxWidth="sm" align-items="center">
            <Stack spacing={2} sx={{ width: 300 }}>
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => <TextField {...params} label="freeSolo" />}
                />
            </Stack>
            </Container>
        </>

    )

}

export default SubmitTip;