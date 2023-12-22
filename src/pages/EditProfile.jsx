import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography, Paper, Grid, } from "@mui/material";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Divider from '@mui/material/Divider';
const PostJob = () => {
    const center = { lat: 37.7749, lng: -122.4194 }; // San Francisco, CA
    const zoom = 12;
    const markerPosition = { lat: 37.7749, lng: -122.4194 }; // Marker position
    const [setProfileImage] = useState(null);
    const [setCoverImage] = useState(null);
    const [profileFileName, setProfileFileName] = useState('Browse Logo');
    const [coverFileName, setCoverFileName] = useState('Browse Cover');

    const handleProfileImageChange = (event) => {
        const file = event.target.files[0];
        setProfileImage(file);
        setProfileFileName(file.name);
        // Add validation for size and dimensions here
    };

    const handleCoverImageChange = (event) => {
        const file = event.target.files[0];
        setCoverImage(file);
        setCoverFileName(file.name);
        // Add validation for size and dimensions here
    };

    const inputStyle = {
        display: 'none', // Hide the original input element
    };

    const labelStyle = {
        border: '2px dashed #ced4e1',
        padding: '1rem', // Reduce the padding to make the box smaller
        height: '120px', // Increase the height of the box
        width: '200px', // Reduce the width of the box
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center', // Add this to space out the text and input
        alignItems: 'center',

    };

    const drawerWidth = 540;
    return (

        <Grid container>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 6, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >

                <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: ' sans-serif' }} >
                    Company Profile!
                </Typography>
                <Typography sx={{ marginTop: '10px', color: 'gray' }}>
                    Ready to jump back in?
                </Typography>

                <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '20px' }}>
                    <Paper elevation={3} sx={{ height: '100%', width: '95vw' }}>
                        <Grid container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <Box sx={{ p: 3 }}>
                                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>My Profile</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex', flexDirection: 'row', justifyContent: 'space-between', p: 3,
                            }}>
                                <Grid container spacing={2} >
                                    <Grid item xs={12} >
                                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}>
                                            <Box>
                                                <label style={labelStyle}>
                                                    <Input
                                                        type="file"
                                                        accept=".jpg, .png"
                                                        onChange={handleProfileImageChange}
                                                        style={inputStyle}
                                                    />
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                            <ArrowUpwardIcon sx={{ fontSize: '40px', color: 'gray' }} />
                                                        </Box>
                                                        {profileFileName}
                                                    </Box>

                                                </label>
                                            </Box>
                                            <Box>
                                                <Typography variant="subtitle1" sx={{ marginLeft: '30px', justifyContent: 'center', alignItems: 'center' }}>
                                                    Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Box sx={{ width: '100%', marginTop: '10px', p: 2 }}><Divider /></Box>
                                    <Grid item xs={12} >
                                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', }}>

                                            <label style={labelStyle}>
                                                <Input
                                                    type="file"
                                                    accept=".jpg, .png"
                                                    onChange={handleCoverImageChange}
                                                    style={inputStyle}
                                                />
                                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                        <ArrowUpwardIcon sx={{ fontSize: '40px', color: 'gray' }} />
                                                    </Box>
                                                    {coverFileName}
                                                </Box>

                                            </label>
                                            <Box>
                                                <Typography variant="subtitle1" sx={{ marginLeft: '30px', justifyContent: 'center', alignItems: 'center' }}>
                                                    Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                </Grid>

                            </Box>
                            <Box sx={{ width: '93%', p: 2 }}><Divider /></Box>

                            {/******* Company and Email *********/}
                            <Box sx={{ p: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Company</Typography>
                                            <TextField fullWidth id="Company" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Email</Typography>
                                            <TextField fullWidth placeholder="www.smartjob.com" id="job" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            {/******* Phone and Job Website *********/}
                            <Box sx={{ p: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Phone</Typography>
                                            <TextField fullWidth id="0 123 456 789" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Job Website</Typography>
                                            <TextField fullWidth placeholder="Job Website" id="job" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            {/******* Est. Since and Team Size *********/}
                            <Box sx={{ p: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>06.03.2023</Typography>
                                            <TextField fullWidth id="06.03.2023" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Team Size</Typography>
                                            <TextField fullWidth placeholder="Title" id="Team Size" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            {/************ Multiple Select boxes and Allow In Search & Listing ************/}
                            <Box sx={{ p: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Multiple Select boxes</Typography>
                                            <TextField fullWidth id="Facebook" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Allow In Search & Listinga</Typography>
                                            <TextField fullWidth placeholder="Title" id="Allow In Search & Listinga" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            {/******* About Company *********/}
                            <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column', p: 3 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                                    <Typography variant='h6'>About Company</Typography>
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

                            <Box sx={{ p: 3 }}>
                                <Button sx={{ minWidth: '160px', p: 2, borderRadius: '6px' }} variant="contained" size="large">
                                    Save
                                </Button>
                            </Box>
                        </Grid>
                    </Paper>
                    <Paper elevation={3} sx={{ height: '100%', width: '95vw', marginTop: '30px' }}>
                        <Grid container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <Box sx={{ p: 3 }}>
                                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Social Network</Typography>
                            </Box>
                            {/******* Facebook and Twitter *********/}
                            <Box sx={{ p: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Facebook</Typography>
                                            <TextField fullWidth id="Facebook" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Twitter</Typography>
                                            <TextField fullWidth placeholder="Title" id="Twitter" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            {/******* LinkedIn and Google Plus *********/}
                            <Box sx={{ p: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>LinkedIn</Typography>
                                            <TextField fullWidth id="linkedIn" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box sx={{ height: '70px', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>Google Plus</Typography>
                                            <TextField fullWidth placeholder="Title" id="googlePlus" sx={{ backgroundColor: '#f0f5f7', '&:hover': { backgroundColor: 'white' } }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>



                            <Box sx={{ p: 3 }}>
                                <Button sx={{ minWidth: '160px', p: 2, borderRadius: '6px' }} variant="contained" size="large">
                                    Save
                                </Button>
                            </Box>
                        </Grid>
                    </Paper>
                    <Paper elevation={3} sx={{ height: '100%', width: '95vw', marginTop: '30px' }}>
                        <Grid container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <Box sx={{ p: 3 }}>
                                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Contact Information</Typography>
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
    );
};


export default PostJob;

