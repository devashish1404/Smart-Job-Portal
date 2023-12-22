import React, { useState } from 'react';
import { Paper, Typography, Box, Button, TextField, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Logo from '../../../assets/images/Logo.png';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate=useNavigate();
    const [input, setInput]=useState({
        username:"",
        password:"",
        confirmPassword:""
    });
    console.log(input);
    //to store value in local storage
    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/navigate")
    }
  return (
   
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} sx={{ backgroundColor: 'white', padding: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={Logo} alt="" width={150} height={40}/>
            <Typography variant="h5" sx={{ mb: 3 }}>Signup</Typography>
            <form sx={{ width: '100%' }} onSubmit={handleSubmit}>
              <TextField
                name="username"
                value={input.username}
                onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
                label="Username"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                name="password"
                value={input.password}
                onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                sx={{ mb: 2 }}
              />
                <TextField
                name="confirmPassword"
                value={input.confirmPassword}
                onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
                label="Confirm password"
                variant="outlined"
                fullWidth
                type="password"
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
   
                <Button variant="contained" color="primary" fullWidth sx={{ height: '50px' }}>
                  Signup
                </Button>
              </Box>
              <Typography variant="body2" sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                 Already have an account ? <b> Login</b>
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, display: 'flex', justifyContent: 'center'}}>
                or
              </Typography>
              <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" color="primary" fullWidth style={{ borderColor: 'blue', color: 'blue', backgroundColor: 'white' }}>
                    <FacebookIcon /> Log in via Facebook
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" color="primary" fullWidth style={{ borderColor: 'red', color: 'red', backgroundColor: 'white' }}>
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

export default Signup;