import * as React from 'react';
import { useState, useEffect, useContext } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Hero from './Hero';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function SubmitTip({ schools }) {
    const { user, setUser } = useContext(UserContext);
    const theme = createTheme();

    const ctaFirst = ['See Schools','/schools'];
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 }
    ]


    return (
        <>
        
            <Hero title="Submit a Tip" summary="Submit a tip for this school below." ctaFirst={ ctaFirst }/>
            <Container maxWidth="sm" align-items="center">
            <Stack spacing={2} sx={{ width: 300 }}>
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={schools.map((school) => school.name)}
                    renderInput={(params) => <TextField {...params} label="School" />}
                />
            </Stack>
            </Container>

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
          { errors ? errors.map (error =><div key={error}>{ error[1] }</div>) : null }
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
        </>

    )

}

export default SubmitTip;