import * as React from 'react';
import Hero from './Hero';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

function SubmitTip() {

    const ctaFirst = ['See Schools','/schools'];
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 }
    ]

    return (
        <>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
            <Hero title="Submit a Tip" summary="Submit a tip for this school below." ctaFirst={ ctaFirst }/>
            <Stack spacing={2} sx={{ width: 300 }} justifyContent="center">
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => <TextField {...params} label="freeSolo" />}
                />
            </Stack>
</Box>
        </>

    )

}

export default SubmitTip;