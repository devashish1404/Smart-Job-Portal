import { Visibility, VisibilityOff } from "@mui/icons-material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LockIcon from "@mui/icons-material/Lock";
import { Box, Button, Grid, IconButton, InputAdornment, Paper, TextField, Typography, } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Logo from '../../../assets/images/SJ Blue.png';


// import { Outlet } from 'react-router-dom';
const Login = () => {
    const navigate= useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Paper elevation={3} sx={{ backgroundColor: 'white', padding: 2 }}>
                        
                        <Box sx={{display:'flex',flexDirection:'row'}}>
                        <Button
                    sx={{
                      color: 'black',
                      justifyContent: "flex-start",
                      marginInline:'40px'
                    }}
                    onClick={() => navigate("/")}
                  >
                    <ArrowBackIosIcon />
                  </Button>
                            <img src={Logo} alt="" width={150} height={40} />
                            </Box>
                            {/* <Typography variant="h5" sx={{ mb: 3 }}>  Login to Smartjob</Typography> */}
                            <form style={{ width: '100%', paddingTop:'30px' }}>
                                <TextField
                                    placeholder="Username"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    placeholder="Password"
                                    variant="outlined"
                                    fullWidth
                                    type={showPassword ? "text" : "passWord"}
                                    sx={{ mb: 2 }}
                                    InputProps={{
                                        endAdornment: (
                                          <InputAdornment position="end">
                                            <IconButton
                                              onClick={() => setShowPassword(!showPassword)}
                                            >
                                              {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                          </InputAdornment>
                                        ),
                                      }}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Typography
                    sx={{
                      color: "black",
                      display: "flex",
                      mt: "1.2rem",
                      cursor: "pointer",
                    }}
                    // onClick={() => navigate(`/email`)}
                  >
                    <LockIcon sx={{ mr: "1rem" }} />
                    Forgot password?
                  </Typography>
                                    <Button variant="contained" color="primary" fullWidth sx={{ height: '50px',borderRadius:'10px' }}>
                                        Log in
                                    </Button>
                                </Box>
                                <Box align="center">
                                <Typography variant="body2" sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}  onClick={() => navigate(`/signup`)}>
                                Don't have an account?&nbsp;&nbsp; <span style={{color:'blue',fontWeight:'bold'}}>Register here </span>
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                                    or
                                </Typography>
                                </Box>
                                <Grid container spacing={1} justifyContent="center">
                                    <Grid item xs={12} sm={6}>
                                        <Paper elevation={2} variant="contained" color="primary" fullWidth style={{ borderColor: 'blue', color: 'blue', backgroundColor: 'white',display:'flex',flexDirection:'row',justifyContent:'center' }}>
                                            <FacebookIcon />
                                            <Typography>Log in via Facebook</Typography> 
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Paper elevation={2} variant="contained" color="primary" fullWidth style={{ borderColor: 'red', color: 'red', backgroundColor: 'white',display:'flex',flexDirection:'row',justifyContent:'center' }}>
                                            <GoogleIcon />
                                            <Typography>Log in via Gmail</Typography> 
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </form>
                        
                    </Paper>
                </Grid>
            </Grid>
            
        </>
    );
};

export default Login;