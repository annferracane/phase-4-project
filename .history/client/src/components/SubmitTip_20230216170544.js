import * as React from 'react';
import { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { UserContext } from "../context/user";
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Hero from './Hero';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';


import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function SubmitTip({ schools }) {
    const { user, setUser } = useContext(UserContext);
    const [errors, setErrors] = useState([]);
    const theme = createTheme();
    const history = useHistory();

    const ctaFirst = ['See Schools','/schools'];

    const categories = ['Educational', 'Social/Fun', 'Other'];
    const categoryArray = categories.map(category => <MenuItem key={category} value={category}>{category}</MenuItem>)

    const [formData, setFormData] = useState({
        title: '',
        on_or_off_campus: true,
        category: '',
        content: '',
        school_id: null
      });
      

    const { title, on_or_off_campus, category, content, school_id } = formData;

    const handleSchoolChange = (value) => {
        console.log(value);
        fetch(`/school-lookup/${value}`)
          .then(res => {
              if(res.ok){
                  res.json().then(school_id => {
                    setFormData({ ...formData, ["school_id"]: school_id });
                  })
              } else {
                  res.json().then(json => setErrors(Object.entries(json.errors)));
              }
          })
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    
    const handleCheckboxChange = (e) => {
        console.log(checked);
        const { name, checked } = e.target;
        console.log(checked);
        setFormData({ ...formData, [name]: checked });
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
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                    { errors ? errors.map (error =><div key={error}>{ error[1] }</div>) : null }
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                            <Autocomplete
                                onChange={(event, value) => handleSchoolChange(value)}
                                id="schoolName"
                                freeSolo
                                name="schoolName"
                                options={schools.map((school) => school.name )}
                                renderInput={(params) => <TextField {...params} label="School" />}
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
                        <FormControlLabel
                            control={<Checkbox checked={ on_or_off_campus } color="primary" />}
                            label="On-campus tip? (uncheck if off-campus tip)"
                            onChange={ handleCheckboxChange }
                            name="on_or_off_campus"
                        />
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
                        <Grid item xs={12}>
                            <TextField
                            autoComplete="content"
                            name="content"
                            required
                            fullWidth
                            multiline
                            rows={4}
                            id="content"
                            label="What is your tip?"
                            value={ content }
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
                        Submit
                        </Button>
                    </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>

    )

}

export default SubmitTip;