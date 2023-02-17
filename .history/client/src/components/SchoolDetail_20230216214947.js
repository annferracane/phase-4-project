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
              <Grid item xs={12} md={2} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 115,
                  }}
                >
                <img
                    src={ `https://logo.clearbit.com/${ school.domain }` }
                    srcSet={ `https://logo.clearbit.com/${ school.domain}` }
                    alt={ school.name }
                    loading="lazy"
                    width={ 115 } 
                    height={ 115}
                />
                </Paper>
              </Grid>
              <Grid item xs={12} md={10} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 115,
                  }}
                >
                    <Typography
                    component="h4"
                    variant="h4"
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