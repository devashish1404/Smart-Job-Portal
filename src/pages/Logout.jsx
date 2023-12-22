import React from 'react';
import { Grid, Paper, Box, Typography, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Stack from '@mui/material/Stack';
import Logo from '../assets/images/image.jpeg';

const Logout = () => {
  return (
    <Grid container spacing={2}>
      {/* 1st box */}
      <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md:'flex' } }} >
        <img style={{ width: '100%', height: '99vh' }} src={Logo} alt="Video Image" />
      </Grid>
      {/* 2nd box */}
      <Grid item xs={12} md={7} >
      <Stack justifyContent="flex-end" alignItems="flex-end" >
          
        </Stack>
        <Paper elevation={1} sx={{ backgroundColor: 'white', padding: 4,display:'flex',justifyContent:'center',alignItems:'center' ,height:'95%'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width:'70%',height:'100%',justifyContent:'center',alignItems:'center' }}>
            <Typography variant="h5" sx={{ mb: 1 ,alignItems:"flex-start",fontSize:'15px' ,paddingBottom:'10px'}}><b>Login to Smartjob</b></Typography>
            <form sx={{ width: '70%' }}>
              <b>Username</b>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
              <b>Password</b>
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                sx={{ mb: 2 }}
              />
             
              <Button variant="contained" color="primary" fullWidth sx={{ height: '50px', mt: 2 }}>Log in</Button>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Typography variant="body2">Remember me</Typography>
                <Typography variant="body2">Forgot Password</Typography>
              </Box>
              <Typography variant="body2" sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                Don't have an account? <b>Signup</b>
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
               or 
              </Typography>

              <Grid container spacing={1} justifyContent="center" >
                <Grid item xs={12} md={6}>
                  <Button variant="outlined" color="primary" fullWidth style={{ borderColor: 'blue', color: 'blue', backgroundColor: 'white' ,fontSize:'8px'}}>
                    <FacebookIcon /> Log in via Facebook
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button variant="outlined" color="primary" fullWidth style={{ borderColor: 'red', color: 'red', backgroundColor: 'white' ,fontSize:'8px'}}>
                    <GoogleIcon /> Log in via Gmail
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Logout;