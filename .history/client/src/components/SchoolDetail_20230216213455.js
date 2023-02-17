import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TipsAccordion from './TipsAccordion';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


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
                    src={`https://logo.clearbit.com/${ school.domain }?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`https://logo.clearbit.com/${ school.domain}?w=164&h=164&fit=crop&auto=format?w=164&h=164&fit=crop&auto=format&dpr=2`}
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
                    component="h3"
                    variant="h3"
                    align="left"
                    color="text.primary"
                    gutterBottom
                    >
                    { school.name }
                    </Typography>
                    <Typography
                    component="h6"
                    variant="h6"
                    align="left"
                    color="text.primary"
                    gutterBottom
                    >
                    <b>Website:</b> { school.domain }
                    </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    component="h4"
                    variant="h4"
                    align="left"
                    color="text.primary"
                    gutterBottom
                    >
                    Tips
                  </Typography>
                  <TipsAccordion tips={ school.tips }/>
                </Paper>
              </Grid>
            </Grid>
        </Container>
    )
}

export default SchoolDetail;