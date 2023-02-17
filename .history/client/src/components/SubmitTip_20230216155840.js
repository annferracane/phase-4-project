import * as React from 'react';
import { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { UserContext } from "../context/user";
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Hero from './Hero';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function SubmitTip({ schools }) {
    const { user, setUser } = useContext(UserContext);
    const [errors, setErrors] = useState([]);
    const theme = createTheme();
    const history = useHistory();

    const ctaFirst = ['See Schools','/schools'];

    const cate = ["Female", "Male", "Non-binary", "Agender", "Genderfluid", "Genderqueer", "Bigender", "Polygender"];
    const genderArray = genders.map(gender => <MenuItem key={gender} value={gender}>{gender}</MenuItem>)

    const [formData, setFormData] = useState({
        title: '',
        on_or_off_campus: '',
        category: '',
        content: '',
        school_id: ''
      });

    const { title, on_or_off_campus, category, content, school_id } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const tip = {
          title: title,
          on_or_off_campus: on_or_off_campus,
          category: category,
          content: content,
          user_id: user.id
      };
    
      fetch(`/schools/${school_id}/tips`,{
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(tip)
      })
      .then(res => {
          if(res.ok){
              res.json().then(user => {
                  history.push(`/schools/${school_id}`);
              })
          }else {
              res.json().then(json => setErrors(Object.entries(json.errors)));
          }
      })
      };


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
          { errors ? errors.map (error =><div key={error}>{ error[1] }</div>) : null }
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={schools.map((school) => school.name)}
                    renderInput={(params) => <TextField {...params} label="School" />}
                    value={ last_name }
                />
              </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  autoComplete="title"
                  value={ title }
                  onChange={ handleChange }
                />
              </Grid>
              <Grid item xs={12}>
                {/* On Campus */}
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                        labelId="category-label"
                        id="category"
                        name="category"
                        label="Tip Category"
                        value={ category }
                        onChange={ handleChange }
                    >   
                        { categoryArray }
                    </Select>
                </FormControl>
              </Grid>
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