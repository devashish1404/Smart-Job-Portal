import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import bacgroundimg from '../assets/images/testimonialbckimg.png'
import img from '../assets/images/70x70.png'

const Testimonials = () => {
    return (
        <div>
            <Grid container sx={{ width: '100%', height: '719px', backgroundImage: `url(${bacgroundimg})` }}>
                <Grid item sx={{ display: 'flex', flexDirection: 'column', marginTop: '5%', marginInline: '30%' }}>
                    <Typography variant='h4' color='white' fontSize='30px'>
                        Testimonials From Our Customers
                    </Typography>
                    <Typography variant='body2' color='white'>
                        Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
                    </Typography>
                </Grid>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid item width='635px' height='325px' sx={{ backgroundColor: 'white', borderRadius:'12px'}}>
                        <Typography variant='h6' sx={{color:'#1967D2', marginInline:'5%', marginTop:'5%'}}>Great Quality!</Typography>
                        <Typography variant='body2'  sx={{margin:'0% 0% 5% 5%', color:'#696969'}}>Without JobHunt i’d be homeless, they found me a job and got me<br />
                            sorted out quickly with everything! Can’t quite… The Mitech team<br />
                            works really hard to ensure high level of quality
                        </Typography>
                        <Grid sx={{ display: 'flex', flexDirection: 'row', marginInline:'5%'}}>
                            <Grid>
                                <img src={img} />
                            </Grid>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Grid>
                                <Typography variant='h6'>Brooklyn Simmons</Typography>
                                <Typography variant='body2' sx={{ color: "#696969" }}>Web Developer</Typography>
                            </Grid>
                        </Grid>
                    </Grid>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Grid item width='635px' height='325px' sx={{ backgroundColor: 'white', borderRadius:'12px'}}>
                        <Typography variant='h6' sx={{color:'#1967D2', marginInline:'5%', marginTop:'5%'}}>Great Quality!</Typography>
                        <Typography variant='body2' sx={{ margin: '0% 0% 5% 5%', color:'#696969' }}>Without JobHunt i’d be homeless, they found me a job and got me<br />
                            sorted out quickly with everything! Can’t quite… The Mitech team<br />
                            works really hard to ensure high level of quality
                        </Typography>
                        <Grid sx={{ display: 'flex', flexDirection: 'row', marginInline:'5%' }}>
                            <Grid>
                                <img src={img} />
                            </Grid>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Grid>
                                <Typography variant='h6'>Brooklyn Simmons</Typography>
                                <Typography variant='body2' sx={{ color: "#696969" }}>Web Developer</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Testimonials