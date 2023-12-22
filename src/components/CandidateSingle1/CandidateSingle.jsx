import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import image from '../../assets/images/190167.png'
import videoimage from '../../assets/video-img.jpg'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import image2 from '../../assets/images/190167.png'

const CandidateSingle = () => {
    return (
        <div>

            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                    sx={{
                        width: '50%',
                        height: 250,
                        backgroundColor: '#E2EAF8',
                        textAlign: 'center'
                    }}>
                    <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Grid sx={{ display: 'flex', flexDirection: 'row', marginInline: '5%', paddingTop: '3%' }}>
                            <Grid>
                                <img style={{ borderRadius: '84px' }} src={image} />
                            </Grid>
                        </Grid>
                        <Grid sx={{ paddingTop: '5%' }}>
                            <Grid><Typography><strong>Darlene Robonson</strong></Typography></Grid>
                            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>

                                <Typography>UI Designer</Typography>
                                <Typography>London, UK</Typography>
                                <Typography>$99/ hour</Typography>
                                <Typography>Member Since, Aug 19 2019</Typography>

                            </Grid>
                        </Grid>
                        {/* <Grid sx={{display:'flex', flexDirection:'row'}}>
                            <Button variant='contained'>App</Button>
                            <Button variant='contained'>Design</Button>
                            <Button variant='contained'>Digital</Button>
                        </Grid> */}
                    </Grid>
                </Grid>
                <Grid
                    sx={{
                        width: '50%',
                        height: 250,
                        backgroundColor: '#E2EAF8',
                        textAlign: 'center'
                    }}>
                    <Grid sx={{ display: 'flex', flexDirection: 'row', paddingTop: '10%', paddingLeft: '55%' }}>
                        <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Grid>
                                <Button variant='contained'>Download CV</Button>
                            </Grid>
                            <Grid>
                                <BookmarkBorderIcon sx={{ height: '55px' }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Grid width={{ xs: '100%', md: '60vw' }}>
                    <img src={videoimage} />
                </Grid>
                <Grid width={{ xs: '100%', md: '40vw' }}>
                    <Box>
                        <Paper elevation={1} sx={{ display: 'flex',marginTop:'2%', flexDirection: 'column', backgroundColor: '#E2EAF8', width: { xs: '100%', md: '100%' } }}>

                            {/* 1st */}
                            <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                                <Box>
                                    <CalendarTodayOutlinedIcon sx={{ color: 'blue', marginInline: '20px' }} />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', marginInline: '20px' }}>
                                    <Typography variant='h7' fontWeight={'bold'} sx={{ color: 'black' }}>Experience:</Typography>
                                    <Typography sx={{ color: 'black', }}>0-2 Years</Typography>
                                </Box>
                            </Box>

                            {/*2nd ***/}
                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <Box>
                                    <PersonPinCircleOutlinedIcon sx={{ color: 'blue', marginInline: '20px' }} />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', marginInline: '20px' }}>
                                    <Typography variant='h7' fontWeight={'bold'} sx={{ color: 'black' }}>Age:</Typography>
                                    <Typography align='center' sx={{ color: 'black', marginTop: '5px' }}>28-33 Years</Typography>
                                </Box>
                            </Box>

                            {/***3rd */}

                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <Box >
                                    <AccountBalanceWalletOutlinedIcon sx={{ color: 'blue', marginInline: '20px' }} />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', marginInline: '20px' }}>
                                    <Typography variant='h7' fontWeight={'bold'} sx={{ color: 'black' }}>Current Salary:</Typography>
                                    <Typography sx={{ color: 'black', marginTop: '5px' }}>11k - 15k</Typography>
                                </Box>
                            </Box>

                            {/**4th **/}
                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <Box>
                                    <PaymentsOutlinedIcon sx={{ color: 'blue', marginInline: '20px' }} />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', marginInline: '20px' }}>
                                    <Typography variant='h7' fontWeight={'bold'} sx={{ color: 'black' }}>Expected Salary:</Typography>
                                    <Typography sx={{ color: 'black', marginTop: '5px' }}>26k-30k</Typography>
                                </Box>
                            </Box>

                            {/**5th ** */}
                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <Box>
                                    <SchoolOutlinedIcon sx={{ color: 'blue', marginInline: '20px' }} />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', marginInline: '20px' }}>
                                    <Typography variant='h7' fontWeight={'bold'} sx={{ color: 'black' }}>Gender:</Typography>
                                    <Typography sx={{ color: 'black', marginInline: '5px' }}>Female</Typography>
                                </Box>
                            </Box>

                            {/***6th */}
                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <Box>
                                    <PersonPinOutlinedIcon sx={{ color: 'blue', marginInline: '20px' }} />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', marginInline: '20px' }}>
                                    <Typography variant='h7' fontWeight={'bold'} sx={{ color: 'black', }}>Languages:</Typography>
                                    <Typography sx={{ color: 'black', marginTop: '5px' }}>English, Spanish, German</Typography>
                                </Box>
                            </Box>

                            {/**7th **/}

                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <Box>
                                    <LanguageOutlinedIcon sx={{ color: 'blue', marginInline: '20px' }} />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', marginInline: '20px' }}>
                                    <Typography variant='h7' fontWeight={'bold'} sx={{ color: 'black' }}>Education Level:</Typography>
                                    <Typography sx={{ color: 'black', marginTop: '5px' }}>Master Degree</Typography>
                                </Box>
                            </Box>

                        </Paper>


                        {/***Social media */}
                        <Paper elevation={1} sx={{ backgroundColor: '#E2EAF8', width: { xs: '100%', md: '100%' }, height: '100%', marginTop: '10px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Box sx={{ marginTop: '20px' }}>
                                    <Typography variant='h7' fontWeight={'bold'} sx={{ color: 'black' }}>Social Media </Typography>
                                </Box>
                                <Box sx={{ display: 'block', marginInline: '10px', marginTop: '20px' }}>
                                    <FacebookOutlinedIcon sx={{
                                        color: 'grey'
                                    }} />
                                    <TwitterIcon sx={{
                                        color: 'grey'
                                    }} />
                                    <InstagramIcon sx={{
                                        color: 'grey'
                                    }} />
                                    <LinkedInIcon sx={{
                                        color: 'grey'
                                    }} />

                                </Box>
                            </Box>

                        </Paper>

                        {/*Professional skills **/}

                        <Paper elevation={1} sx={{ backgroundColor: '#E2EAF8', width: { xs: '100%', md: '100%' }, height: '100%', marginTop: '10px' }}>

                            <Box>
                                <Box sx={{ marginTop: '20px' }}>
                                    <Typography variant='h7' fontWeight={'bold'} sx={{ color: 'black' }}>Professional Skills </Typography>
                                </Box>
                                <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <Paper elevation={0}>
                                        app
                                    </Paper>
                                    <Paper elevation={0} >
                                        administrative
                                    </Paper>
                                    <Paper elevation={0}>
                                        android
                                    </Paper>
                                    <Paper elevation={0}>
                                        wordpress
                                    </Paper>
                                    <Paper elevation={0}>
                                        design
                                    </Paper>
                                    <Paper elevation={0}>
                                        react
                                    </Paper>

                                </Grid>
                            </Box>

                        </Paper>
                    </Box>
                </Grid>
            </Grid>
            <Grid>
                <Typography variant='body2' color='#696969'>
                    Hello my name is Nicole Wells and web developer from Portland. In pharetra orci dignissim, blandit mi semper, ultricies diam.<br />
                    Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae<br />
                    aliquam velit. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum<br />
                    sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam
                </Typography>&nbsp;&nbsp;
                <Typography variant='body2' color='#696969'>
                    Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus<br />
                    molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam.<br />
                    Mauris nec erat ut libero vulputate pulvinar.
                </Typography>
            </Grid>
            <Grid sx={{display:'flex', flexDirection:'row'}}>
                <Grid>
                    <img src={image2}/>
                </Grid>&nbsp;&nbsp;&nbsp;&nbsp;
                <Grid>
                    <img src={image2}/>
                </Grid>&nbsp;&nbsp;&nbsp;&nbsp;
                <Grid>
                    <img src={image2}/>
                </Grid>&nbsp;&nbsp;&nbsp;&nbsp;
                <Grid>
                    <img src={image2}/>
                </Grid>&nbsp;&nbsp;&nbsp;&nbsp;
            </Grid>
            <Grid>
                <Grid>
                    <Typography>Education</Typography>
                </Grid>
            </Grid>
            <Grid>
                <Grid>
                    <Typography>Work Experience</Typography>
                </Grid>
            </Grid>
            <Grid>
                <Grid>
                    <Typography>Awards</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default CandidateSingle