// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Button from '@mui/material/Button';
import Navigation from './Navigation';
import Card from './Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

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
              <h1>Test Route</h1>
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              >
                Schools
              </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3} lg={4}>
                    <Card />
                  </Grid>
                </Grid>
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