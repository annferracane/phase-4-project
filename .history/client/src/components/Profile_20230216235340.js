import * as React from 'react';
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/user";

import ActionAlerts from './ActionAlerts';
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
  const [alertMessages, setAlertMessages] = useState([]);
  const [alert, showAlert] = useState(false);
  const theme = createTheme();

  const [email, setEmail] = useState(user ? user.email : '');

  const [formData, setFormData] = useState({
    first_name: user.profile ? user.profile.first_name : '',
    last_name: user.profile ? user.profile.last_name : '',
    image: user.profile ? user.profile.image : '',
    city: user.profile ? user.profile.city : '',
    state: user.profile ? user.profile.state : '',
    gender: user.profile ? user.profile.gender : '',
    hobby: user.profile ? user.profile.hobby : ''
  });

  const { first_name, last_name, image, city, state, gender, hobby } = formData;

  const genders = ["Female", "Male", "Non-binary", "Agender", "Genderfluid", "Genderqueer", "Bigender", "Polygender"];
  const genderArray = genders.map(gender => <MenuItem key={gender} value={gender}>{gender}</MenuItem>)
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  useEffect(() => {
    fetch(`/users/${user.id}`)
      .then((r) => r.json())
      .then((data) => setUser(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let fetchMethod = 'POST';
    if(user.profile) {
      fetchMethod = 'PATCH'
    }
    const profile = {
      first_name: first_name,
      last_name: last_name,
      image: image,
      city: city,
      state: state, 
      gender: gender,
      hobby: hobby,
      user_id: user.id
  };

  fetch(`/profile`,{
    method: fetchMethod,
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(profile)
  })
  .then(res => {
      if(res.ok){
          res.json().then(user => {
              setAlertMessages([[0]["Profile Saved!"]]);
              showAlert(true);
          })
      }else {
          res.json().then(json => {
            setAlertMessages([[0]["Profile Saved!"]])
            setErrors(Object.entries(json.errors))
          });
      }
  })
  };

  // Show loading if user is null
  if(!user) { return <h2>Loading...</h2> }

  if(user) {
    if(user.profile) {

    }
  }

  // if(user) {
  //   if(!user.profile) { return <h2>Loading...</h2> }
  // }

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
          {user.profile ? <Avatar alt={user.profile.full_name} src={user.profile.image} sx={{ m: 1, width: 56, height: 56 }} /> : null}
          <Typography component="h1" variant="h5">
            { user.profile ? "Hi " + user.profile.first_name + "!" :  "Create Profile" }
          </Typography>
          {/* { alert ? <ActionAlerts messages={alertMessages}/> : null } */}
          { errors ? errors.map (error =><div key={error[0]}>{ error[1] }</div>) : null }
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="first_name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={ first_name } 
                  onChange={ handleChange }
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  autoComplete="family-name"
                  value={ last_name }
                  onChange={ handleChange }
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
                  value={ image }
                  onChange={ handleChange }
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
                  value={ email } 
                  onChange={ handleChange }
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
                  value={ city }
                  onChange={ handleChange }
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
                  value={ state }
                  onChange={ handleChange }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                        labelId="gender-label"
                        id="gender"
                        name="gender"
                        label="Gender"
                        value={ gender }
                        onChange={ handleChange }
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
                  value={ hobby }
                  onChange={ handleChange }
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