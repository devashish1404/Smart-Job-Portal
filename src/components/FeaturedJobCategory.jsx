import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import m1 from '../assets/images/m1.png'
import m2 from '../assets/images/m2.png'
import m3 from '../assets/images/m3.png'
import m4 from '../assets/images/m4.png'
import m5 from '../assets/images/m5.png'
import m6 from '../assets/images/m6.png'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PlaceIcon from '@mui/icons-material/Place';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';



const FeaturedJobCategory = () => {
    return (
        <div>
            <Box sx={{ marginBlock: '5%' }} >
                <Typography
                    color='#202124'
                    fontSize='30px'
                    fontWeight='600'
                    marginBottom='1%'

                    textTransform='capitalize'
                    letterSpacing='1.5px'
                    textAlign='center'

                >
                    Featured Jobs
                </Typography>
                <Typography
                    color='#696969'
                    fontSize='15px'
                    fontWeight='300'

                    marginBottom='20px'
                    textTransform='capitalize'
                    letterSpacing='1px'
                    textAlign='center'

                >
                    Know your worth and find the job that qualify your life
                </Typography>
            </Box>
            <Grid container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
                    <Grid marginTop='15%' marginInline='5%'>
                        <img src={m1} />
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
                                <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' ,fontSize:'15px'}}>
                                <Typography sx={{fontSize:'10px'}}>Freelancer</Typography>
                                </Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>
                                <Typography sx={{fontSize:'10px'}}>Freelancer</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
                    <Grid marginTop='15%' marginInline='5%'>
                        <img src={m2} />
                    </Grid>
                    <Grid marginTop='15%'>
                        <Grid sx={{ color: '#202124' }}>
                            <strong>Recruiting Coordinator</strong>
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
                        </Grid>&nbsp;&nbsp;
                        <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Grid>
                                <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>
                                <Typography sx={{fontSize:'10px'}}>Freelancer</Typography>

                                </Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>
                                <Typography sx={{fontSize:'10px'}}>Freelancer</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
                    <Grid marginTop='15%' marginInline='5%'>
                        <img src={m3} />
                    </Grid>
                    <Grid marginTop='15%'>
                        <Grid sx={{ color: '#202124' }}>
                            <strong>Product Manager, Studio</strong>
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
                        </Grid>&nbsp;&nbsp;
                        <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Grid>
                                <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>
                                <Typography sx={{fontSize:'10px'}}>Freelancer</Typography>
                                </Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                            <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>
                            <Typography sx={{fontSize:'10px'}}>Freelancer</Typography>
                            </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default FeaturedJobCategory