// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Navigation from './Navigation';
import Hero from './Hero';
import SchoolCard from './SchoolCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
        <div className="App">
          <Switch>
            <Route path="/schools">
              <Schools
              <Hero title="Schools" summary="Check out our collection of schools below, and click to see their associated college tips submitted by current students and alumni!"/>
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Box>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={3} lg={4}>
                      <SchoolCard />
                    </Grid>
                  </Grid>
                </Box>
              </Container>
            </Route>
            <Route path="/">
              <h1>Page Count: {count}</h1>
            </Route>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;