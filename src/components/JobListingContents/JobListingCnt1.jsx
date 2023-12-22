// import React from 'react';
// import { Grid, Box, TextField, Button, Paper } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import InputAdornment from '@mui/material/InputAdornment';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// function MyComponent() {
//     const selectStyle = {
//         width: '20%',
//         height: '50px',
//         borderRadius: '5px',
//         margin: '10px',
//         color: 'blue',
//         display: 'inline-block', // Set display to inline-block
//     };

//     const containerStyle = {
//         textAlign: 'center', // Center the select boxes horizontally
//         minHeight: '100vh', // Set the height as needed
//     };
//     return (
//         <Paper elevation={4} sx={{ height: '250px' }}>
//             <Grid container spacing={2} justifyContent="center" sx={{ marginTop: '3%', marginInline: '3%' }}>
//                 <Grid item xs={12} md={3}>
//                     <Box
//                         display="flex"
//                         alignItems="center"
//                         justifyContent="center"
//                         height={100}
//                     >
//                         <TextField
//                             placeholder="Job title, keywords, or company"
//                             style={{ width: '100%', fontSize: '1.5rem', padding: '1rem' }}
//                             InputProps={{
//                                 startAdornment: (
//                                     <InputAdornment position="start">
//                                         <SearchIcon />
//                                     </InputAdornment>
//                                 ),
//                             }}
//                         />
//                     </Box>
//                 </Grid>
//                 <Grid item xs={12} md={3}>
//                     <Box
//                         display="flex"
//                         alignItems="center"
//                         justifyContent="center"
//                         height={100}
//                     >
//                         <TextField
//                             placeholder="City or postcode"
//                             style={{ textAlign: 'center', width: '100%', fontSize: '1.5rem', padding: '1rem' }}
//                             InputProps={{
//                                 startAdornment: (
//                                     <InputAdornment position="start">
//                                         <LocationOnIcon />
//                                     </InputAdornment>
//                                 ),
//                             }}
//                         />
//                     </Box>


//                 </Grid>
//                 <Grid item xs={12} md={3}>
//                     <Box
//                         display="flex"
//                         alignItems="center"
//                         justifyContent="center"
//                         height={100}
//                     >
//                         <TextField
//                             placeholder="Choose a category"
//                             style={{ textAlign: 'center', width: '100%', fontSize: '1.5rem', padding: '1rem' }}
//                             InputProps={{
//                                 startAdornment: (
//                                     <InputAdornment position="start">
//                                         <LocationOnIcon />
//                                     </InputAdornment>
//                                 ),
//                             }}
//                         />
//                     </Box>


//                 </Grid>
//                 <Grid item xs={12} md={3}>
//                     <Box display="flex" alignItems="center" justifyContent="center" height={100}>
//                         <Button variant="contained" color="primary" sx={{ height: '60px', width: '200px' }}>
//                             Search
//                         </Button>
//                     </Box>
//                 </Grid>
//                 <Grid style={containerStyle}>
//                     <select name='profession' id='profession' style={selectStyle}>
//                         <option value='' disabled>Job Type</option>
//                         <option value='student'>Freelancer</option>
//                         <option value='job44'>Full Time</option>
//                         <option value='job44'>Part Time</option>
//                         <option value='student'>Temporary</option>
//                     </select>
//                     <select name='profession' id='profession' style={selectStyle}>
//                         <option value='' disabled>All</option>
//                         <option value='student'>Last Hour</option>
//                         <option value='job44'>Last 24 Hour</option>
//                         <option value='job44'>Last 7 Days</option>
//                         <option value='student'>Last 30 Days</option>
//                     </select>
//                     <select name='profession' id='profession' style={selectStyle}>
//                         <option value='' disabled>Experience Level</option>
//                         <option value='student'>Fresh</option>
//                         <option value='job44'>1 Year</option>
//                         <option value='job44'>2 Years</option>
//                         <option value='student'>3 Years</option>
//                         <option value='student'>4 Years</option>
//                     </select>
//                     <select name='profession' id='profession' style={selectStyle}>
//                         <option value='' disabled>Salary Estimate</option>
//                         <option value='student'>0-5000</option>
//                         <option value='job44'>5000-10000</option>
//                         <option value='job44'>10000-15000</option>
//                         <option value='student'>15000-20000</option>
//                     </select>
//                 </Grid>
//             </Grid>
//         </Paper>
//     );
// }

// export default MyComponent;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Box, TextField, Button, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Featurejob from './Featurejob';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    const selectStyle = {
                width: '20%',
                height: '50px',
                borderRadius: '5px',
                margin: '10px',
                color: 'blue',
                display: 'inline-block', 
                backgroundColor:'#1967D212'
            };
        
            const containerStyle = {
                textAlign: 'center', 
                minHeight: '100vh', 
            };
  return (
    <Box sx={{ flexGrow: 1,marginInline:'5%' }}>
     
      <Grid container   justifyContent="center" sx={{ marginTop: '3%', marginTop: '7%' }}>
        <Grid item xs={12} md={4}>
          <Item>

          <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        height={100}
                    >
                        <TextField
                            placeholder="Job title, keywords, or company"
                            style={{ fontSize: '1.5rem', padding: '1rem' }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
          <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        height={100}
                    >
                        <TextField
                            placeholder="City or postcode"
                            style={{ textAlign: 'center',  fontSize: '1.5rem', padding: '1rem' }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationOnIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
          
          
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
          
           <Box
                        
                        alignItems="center"
                        justifyContent="center"
                        height={100}
                        display='flex'
                    >
                        <TextField
                            placeholder="Choose a category"
                            style={{ textAlign: 'center', fontSize: '1.5rem', padding: '1rem' }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationOnIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button variant="contained" color="primary" sx={{ height: '60px', width: '200px', marginInline:'10%' }}>
                             Find Jobs
                         </Button>
                    </Box> 
                </Item>
            </Grid>
            <Grid style={containerStyle} sx={{marginTop:'20px'}}>
                     <select name='profession' id='profession' style={selectStyle}>
                         <option value='' disabled>Job Type</option>
                         <option value='student'>Freelancer</option>
                         <option value='job44'>Full Time</option>
                         <option value='job44'>Part Time</option>
                         <option value='student'>Temporary</option>

                     </select>
                     <select name='profession' id='profession' style={selectStyle}>
                         <option value='' disabled>All</option>
                         <option value='student'>Last Hour</option>
                         <option value='job44'>Last 24 Hour</option>
                         <option value='job44'>Last 7 Days</option>
                         <option value='student'>Last 30 Days</option>
                     </select>
                     <select name='profession' id='profession' style={selectStyle}>
                         <option value='' disabled>Experience Level</option>
                         <option value='student'>Fresh</option>
                         <option value='job44'>1 Year</option>
                         <option value='job44'>2 Years</option>
                         <option value='student'>3 Years</option>
                         <option value='student'>4 Years</option>
                     </select>
                     <select name='profession' id='profession' style={selectStyle}>
                         <option value='' disabled>Salary Estimate</option>
                         <option value='student'>0-5000</option>
                         <option value='job44'>5000-10000</option>
                         <option value='job44'>10000-15000</option>
                         <option value='student'>15000-20000</option>
                    </select>
                 </Grid>

            
        
      </Grid>
      
     <Box sx={{marginTop:'-45%'}}>
        <Featurejob/>
     </Box>
      

    </Box>
  );
}

