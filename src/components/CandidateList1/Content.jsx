import { Box, Button, Container, Grid, Slider, TextField, Typography } from '@mui/material'
import React from 'react'
// import m1 from '../../assets/m1.png'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PlaceIcon from '@mui/icons-material/Place';
import udemy from '../../assets/images/udemy.png'
import stripe from '../../assets/images/Stripe.png'
import dropbox from '../../assets/images/Dropbox.png'
import figmaimg from '../../assets/images/figma.png'
import CandidateList1 from '../../pages/CandidateList1';
import Filter from './Filter';

function valuetext(value) {
    return `${value}°C`;
}

const CandidateList1Cnt = () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Box
                sx={{
                    width: '100%',
                    height: 250,
                    backgroundColor: '#E2EAF8',
                    textAlign:'center'
                }}>
                    <Grid>
                        <Typography variant='h6'> Candidates</Typography>
                        <Typography variant='body2'> Home/Candidates</Typography>
                    </Grid>
                </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Grid width={{ xs: '100%', md: '30vw' }} sx={{ display: {xs:'none',md:'flex'}, marginInline:'5px',marginTop:'20px' }}>
                    {/* Sidebar By Sudhir */}
                    <Filter />
                    
                </Grid>&nbsp;&nbsp;&nbsp;&nbsp;
                <Grid width={{ xs: '100%', md: '70vw' }} sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'block' } }}>
                    {/* Main Content By Sudhir */}
                    <Grid border='1px solid black'>
                        <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
                            <Grid marginTop='15%' marginInline='5%'>
                                <img src={udemy} />
                            </Grid>
                            <Grid marginTop='15%' >
                                <Grid sx={{ color: '#202124' }}>
                                    <strong>Software Engineer</strong>
                                </Grid>
                                <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
                                    <Grid display='flex' flexDirection='row' >
                                        <BusinessCenterIcon />
                                        <Typography>Invasion</Typography>
                                    </Grid>
                                    <Grid display='flex' flexDirection='row' >
                                        <PlaceIcon />
                                        <Typography>London,UK</Typography>
                                    </Grid>
                                </Grid>&nbsp;
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid>
                                        <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>&nbsp;&nbsp;
                                    <Grid>
                                        <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid border='1px solid black'>
                        <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
                            <Grid marginTop='15%' marginInline='5%'>
                                <img src={stripe} />
                            </Grid>
                            <Grid marginTop='15%' >
                                <Grid sx={{ color: '#202124' }}>
                                    <strong>Software Engineer</strong>
                                </Grid>
                                <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
                                    <Grid display='flex' flexDirection='row' >
                                        <BusinessCenterIcon />
                                        <Typography>Invasion</Typography>
                                    </Grid>
                                    <Grid display='flex' flexDirection='row' >
                                        <PlaceIcon />
                                        <Typography>London,UK</Typography>
                                    </Grid>
                                </Grid>&nbsp;
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid>
                                        <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>&nbsp;&nbsp;
                                    <Grid>
                                        <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid border='1px solid black'>
                        <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
                            <Grid marginTop='15%' marginInline='5%'>
                                <img src={dropbox} />
                            </Grid>
                            <Grid marginTop='15%' >
                                <Grid sx={{ color: '#202124' }}>
                                    <strong>Software Engineer</strong>
                                </Grid>
                                <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
                                    <Grid display='flex' flexDirection='row' >
                                        <BusinessCenterIcon />
                                        <Typography>Invasion</Typography>
                                    </Grid>
                                    <Grid display='flex' flexDirection='row' >
                                        <PlaceIcon />
                                        <Typography>London,UK</Typography>
                                    </Grid>
                                </Grid>&nbsp;
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid>
                                        <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>&nbsp;&nbsp;
                                    <Grid>
                                        <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid border='1px solid black'>
                        <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
                            <Grid marginTop='15%' marginInline='5%'>
                                <img src={figmaimg} />
                            </Grid>
                            <Grid marginTop='15%' >
                                <Grid sx={{ color: '#202124' }}>
                                    <strong>Software Engineer</strong>
                                </Grid>
                                <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
                                    <Grid display='flex' flexDirection='row' >
                                        <BusinessCenterIcon />
                                        <Typography>Invasion</Typography>
                                    </Grid>
                                    <Grid display='flex' flexDirection='row' >
                                        <PlaceIcon />
                                        <Typography>London,UK</Typography>
                                    </Grid>
                                </Grid>&nbsp;
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid>
                                        <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>&nbsp;&nbsp;
                                    <Grid>
                                        <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid border='1px solid black'>
                        <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
                            <Grid marginTop='15%' marginInline='5%'>
                                <img src={udemy} />
                            </Grid>
                            <Grid marginTop='15%' >
                                <Grid sx={{ color: '#202124' }}>
                                    <strong>Software Engineer</strong>
                                </Grid>
                                <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
                                    <Grid display='flex' flexDirection='row' >
                                        <BusinessCenterIcon />
                                        <Typography>Invasion</Typography>
                                    </Grid>
                                    <Grid display='flex' flexDirection='row' >
                                        <PlaceIcon />
                                        <Typography>London,UK</Typography>
                                    </Grid>
                                </Grid>&nbsp;
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid>
                                        <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>&nbsp;&nbsp;
                                    <Grid>
                                        <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid border='1px solid black'>
                        <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
                            <Grid marginTop='15%' marginInline='5%'>
                                <img src={stripe} />
                            </Grid>
                            <Grid marginTop='15%' >
                                <Grid sx={{ color: '#202124' }}>
                                    <strong>Software Engineer</strong>
                                </Grid>
                                <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
                                    <Grid display='flex' flexDirection='row' >
                                        <BusinessCenterIcon />
                                        <Typography>Invasion</Typography>
                                    </Grid>
                                    <Grid display='flex' flexDirection='row' >
                                        <PlaceIcon />
                                        <Typography>London,UK</Typography>
                                    </Grid>
                                </Grid>&nbsp;
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid>
                                        <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>&nbsp;&nbsp;
                                    <Grid>
                                        <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid border='1px solid black'>
                        <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
                            <Grid marginTop='15%' marginInline='5%'>
                                <img src={dropbox} />
                            </Grid>
                            <Grid marginTop='15%' >
                                <Grid sx={{ color: '#202124' }}>
                                    <strong>Software Engineer</strong>
                                </Grid>
                                <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
                                    <Grid display='flex' flexDirection='row' >
                                        <BusinessCenterIcon />
                                        <Typography>Invasion</Typography>
                                    </Grid>
                                    <Grid display='flex' flexDirection='row' >
                                        <PlaceIcon />
                                        <Typography>London,UK</Typography>
                                    </Grid>
                                </Grid>&nbsp;
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid>
                                        <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>&nbsp;&nbsp;
                                    <Grid>
                                        <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid border='1px solid black'>
                        <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
                            <Grid marginTop='15%' marginInline='5%'>
                                <img src={figmaimg} />
                            </Grid>
                            <Grid marginTop='15%' >
                                <Grid sx={{ color: '#202124' }}>
                                    <strong>Software Engineer</strong>
                                </Grid>
                                <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
                                    <Grid display='flex' flexDirection='row' >
                                        <BusinessCenterIcon />
                                        <Typography>Invasion</Typography>
                                    </Grid>
                                    <Grid display='flex' flexDirection='row' >
                                        <PlaceIcon />
                                        <Typography>London,UK</Typography>
                                    </Grid>
                                </Grid>&nbsp;
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid>
                                        <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>&nbsp;&nbsp;
                                    <Grid>
                                        <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
                {/* Add things left in the page 1. ads on the bottom of the sidebar */}
        </div>
    )
}

export default CandidateList1Cnt