import React, { Component } from 'react';
import Box from '@mui/material/Box';
import { Typography, Paper, Grid, } from "@mui/material";
import Button from '@mui/material/Button';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import TextField from '@mui/material/TextField';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
const center = { lat: 37.7749, lng: -122.4194 }; // San Francisco, CA
const zoom = 12;
const markerPosition = { lat: 37.7749, lng: -122.4194 }; // Marker position
export class PostJob extends Component {


    render() {
        const drawerWidth = 240;
        return (
            <Grid container>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 4, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >

                    <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: ' sans-serif' }} >
                        Post a New Job
                    </Typography>
                    <Typography sx={{ marginTop: '10px', color: 'gray' }}>
                        Ready to jump back in?
                    </Typography>

                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '20px' }}>
                        <Paper elevation={3} sx={{ height: '100%', width: '95vw' }}>
                            <Grid container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <Box sx={{ p: 3 }}>
                                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Post Job</Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex', flexDirection: 'row', justifyContent: 'space-between', p: 3,
                                }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={4} md={4} lg={4}>
                                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center', // Align items in a row
                                                        backgroundColor: 'rgba(25, 103, 210, 0.15)',
                                                        borderRadius: '50%',
                                                        padding: '10px',
                                                        color: 'blue',
                                                        width: '80px', // Set the width and height to create a circle
                                                        height: '80px',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <BusinessCenterOutlinedIcon sx={{ fontSize: 40, color: 'blue' }} />


                                                </Box>
                                                <Box>
                                                    <Typography variant='h6' sx={{ marginLeft: '20px' }}>Job Detail</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={4} md={4} lg={4}>
                                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <Box
                                                    sx={{
                                                        backgroundColor: 'rgba(25, 103, 210, 0.15)',
                                                        borderRadius: '50%',
                                                        padding: '10px',
                                                        color: 'blue',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        width: '80px', // Set the width and height to create a circle
                                                        height: '80px',
                                                    }}
                                                >
                                                    <PaymentsOutlinedIcon sx={{ fontSize: 40, color: 'blue' }} />

                                                </Box>
                                                <Box>
                                                    <Typography variant='h6' sx={{ marginLeft: '20px' }}>Job Detail</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={4} md={4} lg={4}>
                                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <Box
                                                    sx={{
                                                        backgroundColor: 'rgba(25, 103, 210, 0.15)',
                                                        borderRadius: '50%',
                                                        padding: '10px',
                                                        color: 'blue',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        width: '80px', // Set the width and height to create a circle
                                                        height: '80px',
                                                    }}
                                                >
                                                    <TaskAltOutlinedIcon sx={{ fontSize: 40, color: 'blue' }} />

                                                </Box>
                                                <Box>
                                                    <Typography variant='h6' sx={{ marginLeft: '20px' }}>Confirmation</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>

                                </Box>
                                <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column', p: 3 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                                        <Typography variant='h6'>Job Title</Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: '98%',
                                            maxWidth: '100%',
                                            marginTop: '10px'
                                        }}
                                    >
                                        <TextField fullWidth placeholder="Title" id="fullWidth" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                    </Box>
                                </Box>
                                {/******* Job Description *********/}
                                <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column', p: 3 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                                        <Typography variant='h6'>Job Description</Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: '98%',
                                            maxWidth: '100%',
                                            marginTop: '10px'
                                        }}
                                    >
                                        <TextField
                                            fullWidth
                                            id="fullWidth"
                                            placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL. In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"
                                            // multiline
                                            sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' }, }}
                                        />
                                    </Box>
                                </Box>
                                {/******* Email and username *********/}
                                <Box sx={{ p: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Email</Typography>
                                            <TextField fullWidth id="www.smartjob.com" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>username</Typography>
                                            <TextField fullWidth placeholder="Username" id="job" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                                {/******* Specialisms and Job Types *********/}
                                <Box sx={{ p: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Specialisms</Typography>
                                            <TextField fullWidth id="Specialisms" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Job Types</Typography>
                                            <TextField fullWidth placeholder="Job Types" id="job" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                                {/******* Offered Salary and career Level *********/}
                                <Box sx={{ p: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Offered Salary </Typography>
                                            <TextField fullWidth id="Offered Salary " sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Career Level</Typography>
                                            <TextField fullWidth placeholder="career Level" id="job" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                                {/************ Experience and Gender ************/}
                                <Box sx={{ p: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Experience</Typography>
                                            <TextField fullWidth id="Experience" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Gender</Typography>
                                            <TextField fullWidth placeholder="Gender" id="job" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                                {/*********  Industry and Qualification **********/}
                                <Box sx={{ p: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Industry </Typography>
                                            <TextField fullWidth id="Industry " sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Qualification</Typography>
                                            <TextField fullWidth placeholder="Qualification" id="job" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                                {/*********  Applicatio Deadline date **********/}

                                <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column', p: 3 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                                        <Typography variant='h6'>Applicatio Deadline date</Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: '98%',
                                            maxWidth: '100%',
                                            marginTop: '10px'
                                        }}
                                    >
                                        <TextField fullWidth placeholder="06.12.2023" id="fullWidth" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                    </Box>
                                </Box>
                                {/*********  Country and City **********/}
                                <Box sx={{ p: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Country</Typography>
                                            <TextField fullWidth id="Country" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>City</Typography>
                                            <TextField fullWidth placeholder="City" id="City" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                                {/* Complete Address */}
                                <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column', p: 3 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                                        <Typography variant='h6'>Complete Address</Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: '98%',
                                            maxWidth: '100%',
                                            marginTop: '10px'
                                        }}
                                    >
                                        <TextField fullWidth placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia" id="fullWidth" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                    </Box>
                                </Box>
                                {/* Find On Map ,Latitude and Longitude */}
                                <Box sx={{ p: 3 }}>
                                    <Grid container spacing={0} >
                                        <Grid item xs={12} sm={6} md={6} lg={6}>
                                            <Box sx={{ height: '100px', display: 'flex', flexDirection: 'column', }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                                                    <Typography variant='h6'>Find On Map</Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        width: '95%',
                                                        maxWidth: '100%',
                                                        marginTop: '10px'
                                                    }}
                                                >
                                                    <TextField fullWidth placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia" id="fullWidth" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                                </Box>
                                            </Box>
                                        </Grid>


                                        <Grid xs={12} md={3} sm={3} lg={3}><Box sx={{ height: '100px', display: 'flex', flexDirection: 'column', }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                                                <Typography variant='h6'>Latitude</Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    width: '92%',
                                                    maxWidth: '100%',
                                                    marginTop: '10px'
                                                }}
                                            >
                                                <TextField fullWidth placeholder="Melbourne" id="fullWidth" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                            </Box>
                                        </Box>
                                        </Grid>
                                        <Grid xs={12} md={3} sm={3} lg={3}>
                                            <Box sx={{ height: '100px', display: 'flex', flexDirection: 'column', }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                                                    <Typography variant='h6'>Longitude</Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        width: '92%',
                                                        maxWidth: '100%',
                                                        marginTop: '10px'
                                                    }}
                                                >
                                                    <TextField fullWidth placeholder="Melbourne" id="fullWidth" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>


                                </Box>
                                <Box sx={{ p: 3 }}>
                                    <Button sx={{ backgroundColor: '#f0f5f7', color: 'blue', minWidth: '160px', p: 2 }} variant="contained" size="large">
                                        Search Location
                                    </Button>
                                </Box>
                                <Box sx={{ p: 3 }}>
                                    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                                        <GoogleMap
                                            mapContainerStyle={{ width: '100%', height: '400px' }}
                                            center={center}
                                            zoom={zoom}
                                        >
                                            {markerPosition && <Marker position={markerPosition} />}
                                        </GoogleMap>
                                    </LoadScript>

                                </Box>
                                <Box sx={{ p: 3 }}>
                                    <Button sx={{ minWidth: '160px', p: 2, borderRadius: '6px' }} variant="contained" size="large">
                                        Next
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

export default PostJob

