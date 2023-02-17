import * as React from 'react';
import Hero from './Hero';

function SubmitTip() {

    const ctaFirst = ['See Schools','/schools'];
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 }
    ]

    return (
        <>
            <Hero title="Submit a Tip" summary="Submit a tip for this school below." ctaFirst={ ctaFirst }/>
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} label="freeSolo" />}
            />
        </>
    )

}

export default SubmitTip;