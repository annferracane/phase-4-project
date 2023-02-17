import * as React from 'react';
import { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { UserContext } from "../context/user";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const theme = createTheme();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    image: '',
    city: '',
    state: '',
    gender: '',
    hobby: ''
  });

  const { first_name, last_name, image, city, state, gender, hobby } = formData;

  const genders = ["Female", "Male", "Non-binary", "Agender", "Genderfluid", "Genderqueer", "Bigender", "Polygender"];
  const genderArray = genders.map(gender => <MenuItem key={gender} value={gender}>{gender}</MenuItem>)
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  useEffect(() => {
    fetch("/users/1")
      .then((r) => r.json())
      .then((data) => setUser(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  // Show loading if user is null
  if(!user) { return <h2>Loading...</h2> }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {user.profile ? <Avatar alt={user.profile.full_name} src={user.profile.image} sx={{ m: 1 }} /> : null}

          <Typography component="h1" variant="h5">
            { user.profile ? "Hi " + user.profile.first_name + "!" :  "Create Profile" }
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={ user.profile ? user.profile.first_name : "" }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={ user.profile ? user.profile.last_name : "" }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="image"
                  label="Profile Image"
                  name="image"
                  autoComplete="image"
                  value={ user.profile ? user.profile.image : "" }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  disabled
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={ user.email }
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid> */}
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="city"
                  name="city"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  value={ user.profile ? user.profile.city : "" }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="state"
                  label="State Abbr"
                  name="state"
                  autoComplete="state"
                  value={ user.profile ? user.profile.state : "" }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                        labelId="gender-label"
                        id="gender"
                        value={ user.profile ? user.profile.gender : "" }
                        label="Gender"
                        onChange={handleChange}
                    >   
                        { genderArray }
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="hobby"
                  label="Hobby"
                  name="hobby"
                  autoComplete="hobby"
                  value={ user.profile ? user.profile.hobby : "" }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              { user.profile ? "Save Changes" : "Create"}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default Profile;