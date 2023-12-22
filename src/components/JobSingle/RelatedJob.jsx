import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  styled,
  Paper,
  Item,
} from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PlaceIcon from "@mui/icons-material/Place";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoneyIcon from '@mui/icons-material/Money';
import first from '../../assets/images/m1.png';
import second from '../../assets/images/m2.png';
import third from '../../assets/images/m3.png';
import fourth from '../../assets/images/m4.png';


const RelatedJob = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
   
    <Box sx={{ marginLeft:{} , }}>
      <Box sx={{  marginTop: "7%" }}>
        <Typography
          color="#202124"
          fontSize="20px"
          fontWeight="600"
          marginBottom="1%"
          textTransform="capitalize"
          letterSpacing="1.5px"
          
        >
          Related Jobs
        </Typography>
        <Typography sx={{color:'gray'}}>
           2020 jobs live - 293 added today.
        </Typography>
    </Box>
    <container >
        <Grid container spacing={2} sx={{marginTop:'3%'}}>
          <Grid item xs={12}  >
            <Item >
              <Box sx={{ display:{xs:'block',md:'flex'},marginInline:'4%' }}>
                <Box
                  sx={{
                    height: "50px",
                    width: "57px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10%",
                  }}
                >
                  <img src={first} alt="react logo" />
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black'}} >
                            <strong>Software Engineer (Android), Libraries</strong>
                        </Typography>
                        <Grid  sx={{display:{xs:'block',sm:'flex'},marginTop:'10px'}} >
                           <Grid  display='flex' flexDirection='row' sx={{marginLeft:{xs:"0px",md:"10px"}}}  >
                                <BusinessCenterIcon />
                                <Typography >Segment</Typography>
                            </Grid>
                            
                            <Grid display='flex' flexDirection='row'  >
                                <PlaceIcon />
                                <Typography >London,UK</Typography>
                            </Grid>
                            <Grid display='flex' flexDirection='row'   >
                                <AccessTimeIcon />
                                <Typography >11 hours ago</Typography>
                            </Grid>
                            <Grid display='flex' flexDirection='row'   >
                                <MoneyIcon />
                                <Typography>$44/ hour</Typography>
                            </Grid>
                        </Grid>

                        

                        <Grid sx={{ display: 'flex', flexDirection: 'row' ,marginTop:'10px',marginBottom:'15px'}}>
                            <Grid>
                                <Button sx={{ color: 'blue', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Full Time</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: 'green', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Private</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: 'red', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Urgent</Button>
                            </Grid>&nbsp;&nbsp;
                        </Grid>
                        

                        
                </Box>
              </Box>
            </Item>
          </Grid>



          <Grid item xs={12}  >
            <Item>
            <Box sx={{ display:{xs:'block',md:'flex'},marginInline:'4%' }}>
                <Box
                  sx={{
                    height: "50px",
                    width: "57px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10%",
                  }}
                >
                  <img src={second} alt="react logo" />
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black'}} >
                            <strong>Recruiting Coordinator</strong>
                        </Typography>
                        <Grid sx={{display:{xs:'block',sm:'flex'},marginTop:'10px'}} >
                        <Grid display='flex' flexDirection='row' sx={{marginLeft:{xs:"0px",md:"10px"}}} >
                                <BusinessCenterIcon />
                                <Typography >Segment</Typography>
                            </Grid>
                            
                            <Grid display='flex' flexDirection='row'  >
                                <PlaceIcon />
                                <Typography >London,UK</Typography>
                            </Grid>
                            <Grid display='flex' flexDirection='row'   >
                                <AccessTimeIcon />
                                <Typography >11 hours ago</Typography>
                            </Grid>
                            <Grid display='flex' flexDirection='row'   >
                                <MoneyIcon />
                                <Typography>$44/ hour</Typography>
                            </Grid>
                        </Grid>

                        

                        <Grid sx={{ display: 'flex', flexDirection: 'row' ,marginTop:'10px',marginBottom:'15px'}}>
                            <Grid>
                                <Button sx={{ color: 'blue', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Freelancer</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: 'green', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Private</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: 'red', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Urgent</Button>
                            </Grid>&nbsp;&nbsp;
                        </Grid>
                        

                        
                </Box>
              </Box>
            </Item>
          </Grid>




          <Grid item xs={12} >
            <Item>
            <Box sx={{ display:{xs:'block',md:'flex'},marginInline:'4%' }}>
                <Box
                  sx={{
                    height: "50px",
                    width: "57px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10%",
                  }}
                >
                  <img src={third} alt="react logo" />
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black'}} >
                            <strong>Product Manager, Studio</strong>
                        </Typography>
                        <Grid sx={{display:{xs:'block',sm:'flex'},marginTop:'10px'}} >
                        <Grid display='flex' flexDirection='row' sx={{marginLeft:{xs:"0px",md:"10px"}}} >
                                <BusinessCenterIcon />
                                <Typography >Segment</Typography>
                            </Grid>
                            
                            <Grid display='flex' flexDirection='row'  >
                                <PlaceIcon />
                                <Typography >London,UK</Typography>
                            </Grid>
                            <Grid display='flex' flexDirection='row'   >
                                <AccessTimeIcon />
                                <Typography >11 hours ago</Typography>
                            </Grid>
                            <Grid display='flex' flexDirection='row'   >
                                <MoneyIcon />
                                <Typography>$44/ hour</Typography>
                            </Grid>
                        </Grid>

                        

                        <Grid sx={{ display: 'flex', flexDirection: 'row' ,marginTop:'10px',marginBottom:'15px'}}>
                            <Grid>
                                <Button sx={{ color: 'blue', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Part Time</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: 'green', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Private</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: 'red', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Urgent</Button>
                            </Grid>&nbsp;&nbsp;
                        </Grid>
                        

                        
                </Box>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={12}  >
            <Item>
            <Box sx={{ display:{xs:'block',md:'flex'},marginInline:'4%' }}>
                <Box
                  sx={{
                    height: "50px",
                    width: "57px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10%",
                  }}
                >
                  <img src={fourth} alt="react logo" />
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black'}} >
                            <strong>Senior Product Designer</strong>
                        </Typography>
                        <Grid sx={{display:{xs:'block',sm:'flex'},marginTop:'10px'}} >
                        <Grid display='flex' flexDirection='row' sx={{marginLeft:{xs:"0px",md:"10px"}}} >
                                <BusinessCenterIcon />
                                <Typography >Segment</Typography>
                            </Grid>
                            
                            <Grid display='flex' flexDirection='row'  >
                                <PlaceIcon />
                                <Typography >London,UK</Typography>
                            </Grid>
                            <Grid display='flex' flexDirection='row'   >
                                <AccessTimeIcon />
                                <Typography >11 hours ago</Typography>
                            </Grid>
                            <Grid display='flex' flexDirection='row'   >
                                <MoneyIcon />
                                <Typography>$44/ hour</Typography>
                            </Grid>
                        </Grid>

                        

                        <Grid sx={{ display: 'flex', flexDirection: 'row' ,marginTop:'10px',marginBottom:'15px'}}>
                            <Grid>
                                <Button sx={{ color: 'blue', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Temporary</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: 'green', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Private</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: 'red', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Urgent</Button>
                            </Grid>&nbsp;&nbsp;
                        </Grid>
                        

                        
                </Box>
              </Box>
            </Item>
          </Grid>

          
          



          


          
        </Grid>



        </container> 
      </Box>
      
 
  );
};

export default RelatedJob;
