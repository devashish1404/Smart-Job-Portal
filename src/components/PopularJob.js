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
import MoneyIcon from '@mui/icons-material/Money';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PolylineIcon from '@mui/icons-material/Polyline';
import WebIcon from '@mui/icons-material/Web';
import FeedIcon from '@mui/icons-material/Feed';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';


const PopularJob = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
   
    <Box sx={{ marginLeft:{} , marginInline: "5%",marginBlock:'5%' }}>
      <Box sx={{  marginTop: "2%" }}>
        <Typography
          color="#202124"
          fontSize="20px"
          fontWeight="600"
          marginBottom="1%"
          textTransform="capitalize"
          letterSpacing="1.5px"
          
        >
          Recent Application
        </Typography>
    </Box>
    <container >
        <Grid container spacing={2} sx={{marginTop:'3%'}}>
          <Grid item xs={12} sm={6} md={4} >
            <Item >
              <Box sx={{ display:'flex',marginInline:'4%' }}>
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor:'gray',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "20%",
                  }}
                >
                  <MoneyIcon sx={{color:"green",height:'45px',width:'45px'}}/>
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black'}} >
                            <strong>Accounting / Finance</strong>
                        </Typography>
                        <Typography sx={{marginTop:'2%', fontSize:'14px'}}>
                            (Two Open Position)
                        </Typography>

                        
                </Box>
              </Box>
            </Item>
          </Grid>



          <Grid item xs={12} sm={6} md={4} >
            <Item >
              <Box sx={{ display:'flex',marginInline:'4%' }}>
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor:'gray',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "20%",
                  }}
                >
                  <VolumeUpIcon sx={{color:"blue",height:'45px',width:'45px'}}/>
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black'}} >
                            <strong>Marketing</strong>
                        </Typography>
                        <Typography sx={{marginTop:'2%', fontSize:'14px'}}>
                            (Two Open Position)
                        </Typography>

                        
                </Box>
              </Box>
            </Item>
          </Grid>



          <Grid item xs={12} sm={6} md={4} >
            <Item >
              <Box sx={{ display:'flex',marginInline:'4%' }}>
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor:'gray',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "20%",
                  }}
                >
                  <PolylineIcon sx={{color:"green",height:'45px',width:'45px'}}/>
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black'}} >
                            <strong>Design</strong>
                        </Typography>
                        <Typography sx={{marginTop:'2%', fontSize:'14px'}}>
                            (Two Open Position)
                        </Typography>

                        
                </Box>
              </Box>
            </Item>
          </Grid>



          <Grid item xs={12} sm={6} md={4} >
            <Item >
              <Box sx={{ display:'flex',marginInline:'4%' }}>
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor:'gray',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "20%",
                  }}
                >
                  <WebIcon sx={{color:"voilet",height:'45px',width:'45px'}}/>
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black'}} >
                            <strong>Development</strong>
                        </Typography>
                        <Typography sx={{marginTop:'2%', fontSize:'14px'}}>
                            (Two Open Position)
                        </Typography>

                        
                </Box>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={4} >
            <Item >
              <Box sx={{ display:'flex',marginInline:'4%' }}>
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor:'gray',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "20%",
                  }}
                >
                  <FeedIcon sx={{color:"yellow",height:'45px',width:'45px'}}/>
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black'}} >
                            <strong>Human Resource</strong>
                        </Typography>
                        <Typography sx={{marginTop:'2%', fontSize:'14px'}}>
                            (Two Open Position)
                        </Typography>

                        
                </Box>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={4} >
            <Item >
              <Box sx={{ display:'flex',marginInline:'4%' }}>
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor:'gray',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "20%",
                  }}
                >
                  <MoneyIcon sx={{color:"green",height:'45px',width:'45px'}}/>
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black'}} >
                            <strong>Customer Service</strong>
                        </Typography>
                        <Typography sx={{marginTop:'2%', fontSize:'14px'}}>
                            (Two Open Position)
                        </Typography>

                        
                </Box>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={4} >
            <Item >
              <Box sx={{ display:'flex',marginInline:'4%' }}>
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor:'gray',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "20%",
                  }}
                >
                  <MoneyIcon sx={{color:"green",height:'45px',width:'45px'}}/>
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black'}} >
                            <strong>Health & Care</strong>
                        </Typography>
                        <Typography sx={{marginTop:'2%', fontSize:'14px'}}>
                            (Two Open Position)
                        </Typography>

                        
                </Box>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={4} >
            <Item >
              <Box sx={{ display:'flex',marginInline:'4%' }}>
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor:'gray',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "20%",
                  }}
                >
                  <HealthAndSafetyIcon sx={{color:"blue",height:'45px',width:'45px'}}/>
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black'}} >
                            <strong>Project Management</strong>
                        </Typography>
                        <Typography sx={{marginTop:'2%', fontSize:'14px'}}>
                            (Two Open Position)
                        </Typography>

                        
                </Box>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={4} >
            <Item >
              <Box sx={{ display:'flex',marginInline:'4%' }}>
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor:'gray',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "20%",
                  }}
                >
                  <MoneyIcon sx={{color:"green",height:'45px',width:'45px'}}/>
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black'}} >
                            <strong>Automotive Jobs</strong>
                        </Typography>
                        <Typography sx={{marginTop:'2%', fontSize:'14px'}}>
                            (Two Open Position)
                        </Typography>

                        
                </Box>
              </Box>
            </Item>
          </Grid>

          
                


          


          
        </Grid>



        </container> 
      </Box>
      
 
  );
};

export default PopularJob;
