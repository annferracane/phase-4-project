import * as React from 'react';
import Hero from './Hero';
import SchoolCard from './SchoolCard';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function Schools() {

    return (
        <>
        <Hero title="Schools" summary="Check out our collection of schools below, and click to see their associated college tips submitted by current students and alumni!"/>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                {/* <Box> */}
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={3} lg={4}>
                            <SchoolCard />
                        </Grid>
                    </Grid>
                {/* </Box> */}
            </Container>
        </>
    )

}

export default Schools;