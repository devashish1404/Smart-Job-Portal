import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import { Button, Container, Grid, InputAdornment, MenuItem, Paper, Select, TextField, } from '@mui/material';
import React from 'react';

const MiddleCont = () => {
  return (
    <Container maxWidth="lg">
      <Paper sx={{ backgroundColor: 'white', padding: 1, display: 'flex', width: '100%'}}> {/* Set the width here */}
        <Grid container spacing={1}>
          <Grid item xs={12} md={3} >
           

            <TextField
              placeholder="Job title keyword or company"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ width: '100%', backgroundColor: 'white' }}
            />
          </Grid>
          <Grid item xs={12} md={3} >
            
            <TextField
              placeholder="City or postcode"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ width: '100%', backgroundColor: 'white' }}
            />
          </Grid>
          <Grid item xs={12} md={3} >
           
            <Select
              placeholder="Categories"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <WorkIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ width: '100%', backgroundColor: 'white' }}
            >
              <MenuItem value="All Categories">All Categories</MenuItem>
              <MenuItem value="Category1">Category 1</MenuItem>
              <MenuItem value="Category2">Category 2</MenuItem>
              {/* Add more categories as needed */}
            </Select>
          </Grid>
          <Grid item xs={12} md={3} >
            <Button
              variant="contained"
              size="large"
              sx={{ width: '100%', height: '100%', backgroundColor:'orangered' }}
            >
              Find Jobs
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default MiddleCont;