import {
    Accordion,
    AccordionSummary,
    Box,
    Button,
    Grid,
    List,
    ListItem,
    Paper,
    Typography,
} from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

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
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import udemy from "../../assets/images/udemy.png";
import abc from '../../assets/images/190167.png'
import React from "react";
import RelatedJob from "./Relatedjob";

const Component1 = () => {
    return (
        <div>
            {/* <Grid width={{ xs: "100%" }}> */}
            <Grid
                container
                sx={{
                    backgroundColor: "#1967D212",

                    height: "5%",
                    display: { xs: "block", md: "flex" },
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                }}
            >
                <Grid
                    item
                    elevation={3}
                    marginTop="5%"
                    sx={{
                        marginBlock: "3%",
                        display: { xs: "block", sm: "flex" },
                        flexDirection: "row",
                    }}
                >
                    <Grid marginInline="5%">
                        <img src={udemy} />
                    </Grid>
                    <Grid sx={{ marginLeft: { xs: "5%", sm: "0%" } }}>
                        <Grid sx={{ color: "#202124" }}>
                            <strong>Udemy</strong>
                        </Grid>
                        <Grid
                            flexDirection="row"
                            justifyContent="space-evenly"
                            sx={{ color: "#696969", display: { xs: "block", sm: "flex" } }}
                        >
                            <Grid display="flex" flexDirection="row">
                                <BusinessCenterIcon />
                                <Typography>Invasion</Typography>
                            </Grid>
                            <Grid display="flex" flexDirection="row">
                                <PlaceIcon />
                                <Typography>London,UK</Typography>
                            </Grid>
                            {/* <Grid display="flex" flexDirection="row">
                    <CallIcon />
                    <Typography>764 857 7548</Typography>
                  </Grid> */}
                            <Grid display="flex" flexDirection="row">
                                <EmailIcon />
                                <Typography>info@udemy.com</Typography>
                            </Grid>
                        </Grid>
                        &nbsp;
                        <Grid sx={{ display: "flex", flexDirection: "row" }}>
                            <Grid>
                                <Button
                                    sx={{
                                        color: "#1967D2",
                                        backgroundColor: "#1967D226",
                                        borderRadius: "24px",
                                    }}
                                >
                                    Open Jobs - 15
                                </Button>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid marginTop="5%" sx={{ marginLeft: { xs: "5%" } }}>
                    <Button variant="contained">Private Message</Button>
                </Grid>
            </Grid>




            <Box sx={{ marginBlock: "5%", width: "100%", display: { xs: 'block', md: 'flex' } }}>
                <Box sx={{ width: { xs: '80%', md: '70%' }, marginInline: '7%', display: { xs: 'block' } }}>

                    <Box>
                        <Typography variant="h6">About Company</Typography>
                        <Typography sx={{ fontSize: '14px', color: 'gray' }}>
                            Moody’s Corporation, often referred to as Moody’s, is
                            an American business and financial services company.
                            It is the holding company for Moody’s Investors Service (MIS),
                            an American credit rating agency, and Moody’s Analytics (MA),
                            an American provider of financial analysis software and
                            services.<br />
                            <br />
                            Moody’s was founded by John Moody in 1909 to produce manuals
                            of statistics related to stocks and bonds and bond ratings.
                            Moody’s was acquired by Dun & Bradstreet in 1962. In 2000,
                            Dun & Bradstreet spun off Moody’s Corporation as a separate
                            company that was listed on the NYSE under MCO. In 2007, Moody’s
                            Corporation was split into two operating divisions, Moody’s
                            Investors Service, the rating agency, and Moody’s Analytics,
                            with all of its other products.
                        </Typography>
                    </Box>
                    <Box>
                        <Grid sx={{ xs: 'block', md: 'flex', marginTop: '4%' }}>
                            <img src={abc} />&nbsp;&nbsp;&nbsp;
                            <img src={abc} />&nbsp;&nbsp;&nbsp;
                            <img src={abc} />&nbsp;&nbsp;&nbsp;
                            <img src={abc} />&nbsp;&nbsp;&nbsp;
                        </Grid>


                    </Box>

                    <Box>

                        <Typography sx={{ fontSize: '14px', color: 'gray', marginTop: '4%' }}>
                            Moody’s Corporation, often referred to as Moody’s, is an
                            American business and financial services company. It is the
                            holding company for Moody’s Investors Service (MIS),
                            an American credit rating agency, and Moody’s Analytics
                            (MA), an American provider of financial analysis software
                            and services.<br />
                            <br />

                            Moody’s was founded by John Moody in 1909 to produce
                            manuals of statistics related to stocks and bonds and
                            bond ratings. Moody’s was acquired by Dun & Bradstreet
                            in 1962. In 2000, Dun & Bradstreet spun off Moody’s Corporation
                            as a separate company that was listed on the NYSE under MCO. In
                            2007, Moody’s Corporation was split into two operating divisions,
                            Moody’s Investors Service, the rating agency, and Moody’s Analytics,
                            with all of its other products.
                        </Typography>

                    </Box>



                    <Box>
                        <RelatedJob />
                    </Box>


                </Box>


                <Box sx={{ width: { xs: '80%', md: '25%' }, marginInline: '5%' }}>


                    <Box>
                        <Paper elevation={1} sx={{ display: 'flex', marginTop: '2%', flexDirection: 'column', backgroundColor: '#E2EAF8', width: { xs: '100%', md: '100%' } }}>

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

                            {/*4th */}
                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <Box>
                                    <PaymentsOutlinedIcon sx={{ color: 'blue', marginInline: '20px' }} />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', marginInline: '20px' }}>
                                    <Typography variant='h7' fontWeight={'bold'} sx={{ color: 'black' }}>Expected Salary:</Typography>
                                    <Typography sx={{ color: 'black', marginTop: '5px' }}>26k-30k</Typography>
                                </Box>
                            </Box>

                            {/*5th * */}
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

                            {/*7th */}

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

                        {/* {/Professional skills */} 

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
                </Box>
            </Box>
        </div>
    );
};

export default Component1;