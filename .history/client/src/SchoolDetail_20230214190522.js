import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';


function SchoolDetail({ school }) {

    useEffect(() => {
    fetch(`/schools/${school.id}`)
      .then((r) => r.json())
      .then((data) => setSchools(data));
    }, []);
  
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                <img
                    src={`https://www.akc.org/wp-content/themes/akc/component-library/assets/img/welcome.jpg?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`https://www.akc.org/wp-content/themes/akc/component-library/assets/img/welcome.jpg?w=164&h=164&fit=crop&auto=format?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={"Test"}
                    loading="lazy"
                />
                  {/* <Deposits /> */}
                </Paper>
              </Grid>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  {/* <Chart /> */}
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  {/* <Orders /> */}
                </Paper>
              </Grid>
            </Grid>
        </Container>
    )
}

export default SchoolDetail;