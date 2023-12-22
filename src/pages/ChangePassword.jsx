import React, { Component } from 'react';
import Box from '@mui/material/Box';
import { Typography, Paper, Grid, } from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export class ChangePassword extends Component {


    render() {
        const drawerWidth = 240;
        return (
            <Grid container>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 4, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >

                    <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: ' sans-serif' }} >
                        Change Password!
                    </Typography>
                    <Typography sx={{ marginTop: '10px', color: 'gray' }}>
                        Ready to jump back in?
                    </Typography>

                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '20px' }}>
                        <Paper elevation={3} sx={{ height: '80%', width: '95vw' }}>
                            <Grid container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <Box sx={{ p: 3 }}>
                                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Change Password</Typography>
                                </Box>

                                {/******* Old Password *********/}
                                <Box sx={{ p: 3, }}>
                                    <Grid container spacing={0} >
                                        <Grid item xs={12} sm={6} md={6} lg={6}>
                                            <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column', }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                                                    <Typography variant='h6'>Old Password</Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        width: '95%',
                                                        maxWidth: '100%',
                                                        marginTop: '10px',
                                                    }}
                                                >
                                                    <TextField
                                                        fullWidth
                                                        placeholder="Old Password"
                                                        id="fullWidth"
                                                        sx={{
                                                            backgroundColor: '#f0f5f7',
                                                            '&:hover': { backgroundColor: 'white' },

                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                        </Grid>

                                    </Grid>
                                </Box>
                                {/******* New Password *********/}
                                <Box sx={{ p: 3 }}>
                                    <Grid container spacing={0} >
                                        <Grid item xs={12} sm={6} md={6} lg={6}>
                                            <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column', }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                                                    <Typography variant='h6'>New Password</Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        width: '95%',
                                                        maxWidth: '100%',
                                                        marginTop: '10px'
                                                    }}
                                                >
                                                    <TextField fullWidth placeholder='New Password' id="fullWidth" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                                </Box>
                                            </Box>
                                        </Grid>

                                    </Grid>
                                </Box>
                                {/******* Confirm Password *********/}
                                <Box sx={{ p: 3 }}>
                                    <Grid container spacing={0} >
                                        <Grid item xs={12} sm={6} md={6} lg={6}>
                                            <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column', }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                                                    <Typography variant='h6'>Confirm Password</Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        width: '95%',
                                                        maxWidth: '100%',
                                                        marginTop: '10px'
                                                    }}
                                                >
                                                    <TextField fullWidth placeholder="Confirm Password" id="fullWidth" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                                </Box>
                                            </Box>
                                        </Grid>

                                    </Grid>
                                </Box>



                                <Box sx={{ p: 3, marginTop: '10px' }}>
                                    <Button sx={{ minWidth: '160px', p: 2, borderRadius: '6px' }} variant="contained" size="medium">
                                        Update
                                    </Button>
                                </Box>
                            </Grid>
                        </Paper>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography sx={{ p: 5 }}>
                                © 2023 Superio by <span style={{ color: 'blue' }}>ib-themes.</span> All Right Reserved.
                            </Typography>

                        </Box>


                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'right' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f5f7', borderRadius: '50px', width: '40px', height: '40px', '&:hover': { backgroundColor: 'blue', color: 'white' } }}>
                            <KeyboardArrowUpIcon />
                        </Box>
                    </Box>
                </Box>

            </Grid>
        )
    }
}

export default ChangePassword

