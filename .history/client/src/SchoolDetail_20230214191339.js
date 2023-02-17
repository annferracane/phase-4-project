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
       if(!school) { return <h2>Loading...</h2> }
  
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4}}>
            <Grid container spacing={3}>
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
                    src={`${"https://logo.clearbit.com/" + school.domain }?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${"https://logo.clearbit.com/" + school.domain }?w=164&h=164&fit=crop&auto=format?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={school.name}
                    loading="lazy"
                />
                </Paper>
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
              { title }
            </Typography>
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