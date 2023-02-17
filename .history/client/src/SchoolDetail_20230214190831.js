import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


function SchoolDetail() {
    const [school, setSchool] = useState();
    const params = useParams();
    const id = params.id;

    useEffect(() => {
    fetch(`/schools/${id}`)
      .then((r) => r.json())
      .then((data) => setSchool(data));
    }, [id]);

       // Show loading if school is null
       if(!cereal) { return <h2>Loading...</h2> }
  
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