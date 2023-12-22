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
import m1 from "../../assets/images/m1.png";
import React from "react";
import RelatedJob from "./RelatedJob";

const Content1 = () => {
  return (
    <div>
      {/* <Grid width={{ xs: "100%" }}> */}
        <Grid
          container
          sx={{
            backgroundColor: "#1967D212",
            marginTop:'5%',
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
              <img src={m1} />
            </Grid>
            <Grid sx={{ marginLeft: { xs: "5%", sm: "0%" } }}>
              <Grid sx={{ color: "#202124" }}>
                <strong>Software Engineer (Android), Libraries</strong>
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
                <Grid display="flex" flexDirection="row">
                  <PlaceIcon />
                  <Typography>London,UK</Typography>
                </Grid>
                <Grid display="flex" flexDirection="row">
                  <PlaceIcon />
                  <Typography>London,UK</Typography>
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
                    Freelancer
                  </Button>
                </Grid>
                &nbsp;&nbsp;
                <Grid>
                  <Button
                    sx={{
                      color: "#F9AB00",
                      backgroundColor: "#F9AB0026",
                      borderRadius: "24px",
                    }}
                  >
                    Freelancer
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid marginTop="5%" sx={{ marginLeft: { xs: "5%" } }}>
            <Button variant="contained">Apply for Job</Button>
          </Grid>
        </Grid>




        <Box sx={{marginBlock: "5%",width: "100%",display:{xs:'block',md:'flex'}}}>
          <Box sx={{width:{xs:'80%',md:'50%'},marginInline:'7%',display:{xs:'block'}}}>
            
            <Box>
            <Typography variant="h6">Job Description</Typography>
              <p>
                As a Product Designer, you will work within a Product Delivery
                Team fused with UX, engineering, product and data talent. You
                <br />
                will help the team design beautiful interfaces that solve
                business challenges for our clients. We work with a number of
                Tier 1<br />
                banks on building web-based applications for AML, KYC and
                Sanctions List management workflows. This role is ideal if you
                are
                <br />
                looking to segue your career into the FinTech or Big Data
                arenas.
              </p>
            </Box>
            <Box>
            <Typography variant="h6">Key Responsibilities</Typography>
              <ul>
                <li>
                  <Typography variant="body1">
                    Be involved in every step of the product design cycle from
                    discovery to developer handoff and user acceptance testing.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Work with BAs, product managers and tech teams to lead the
                    Product Design.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Maintain quality of the design process and ensure that when
                    designs are translated into code they accurately reflect the
                    design specifications.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Accurately estimate design tickets during planning sessions.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Contribute to sketching sessions involving
                    non-designersCreate, iterate and maintain UI deliverables
                    including sketch files, style guides, high fidelity
                    prototypes, micro interaction specifications and pattern
                    libraries.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Ensure design choices are data led by identifying
                    assumptions to test each sprint, and work with the analysts
                    in your team to plan moderated usability test sessions.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Design pixel perfect responsive UI’s and understand that
                    adopting common interface patterns is better for UX than
                    reinventing the wheel.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Present your work to the wider business at Show & Tell
                    sessions.
                  </Typography>
                </li>
              </ul>
            </Box> 

            <Box>
                    <Typography variant='h6'>
                        Skill & Experience
                    </Typography>
                    <Box>
                        <ul>
                            <li>
                                <Typography variant="body1">
                                    You have at least 3 years’ experience working as a Product Designer.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1">
                                    You have experience using Sketch and InVision or Framer X.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1">
                                    You have some previous experience working in an agile environment – Think two-week sprints.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1">
                                    You are familiar using Jira and Confluence in your workflow.
                                </Typography>
                            </li>
                        </ul>
                    </Box>
                </Box>

                <Box sx={{ display: {xs:'block',md:'flex'}, flexDirection: 'row' }}>
                    <Typography variant='h5'>Share this Job:</Typography>
                    <Button variant='contained'>Facebook</Button>&nbsp;&nbsp;
                    <Button variant='contained'>Twitter</Button>&nbsp;&nbsp;
                    <Button variant='contained'>LinkedIn</Button>&nbsp;&nbsp;
                </Box>

                <Box>
                    <RelatedJob/>
                </Box>
            
            
          </Box>
        

        <Box sx={{width:{xs:'80%',md:'20%'},marginInline:'5%'}}>

         
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
        </Box>
        </Box>


        
        
      
     
    </div>
  );
};

export default Content1;
