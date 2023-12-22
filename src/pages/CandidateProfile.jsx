import React from 'react'
import { Box, Divider, Typography,Grid } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import Rohit from '../assets/images/WhatsApp Image 2023-10-29 at 15.45.34.jpeg';
import Up from "../assets/images/WhatsApp Image 2023-10-29 at 15.45.34 (1).jpeg";
import Low from "../assets/images/WhatsApp Image 2023-10-29 at 15.45.33 (4).jpeg";

const CandidateProfile = () => {
   const UpImage={
      width:'100%',
      height:'4%'
  }
   const Gro={
              borderRadius:'70%',
            height:'20%',width:'10%',
            
           }
  return (
    <div>
    <Box >
          <img src={Up} alt="up" style={UpImage}/>
   </Box>
    <Box sx={{marginInline:'7%',marginBlock:'1%',display:{xs:'block',sm:'flex'}}}>
      <Box sx={{width:{xs:'90%',md:'50%'}}}>
      <Typography variant="h5" gutterBottom>
        Student Information
      </Typography>
      <Typography variant="h6" gutterBottom sx={{marginTop:'3%',marginInline:'2%'}}>
        Personal Information
      </Typography>
      <Grid container spacing={2} sx={{marginInline:'3%',marginTop:'3%'}}>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Name:</strong> Sameer Mehta
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Father's Name:</strong> Vijay Prakash Mehta
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Mother's Name:</strong> Shalini Mehta
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Date of Birth:</strong> 24 Set 1999<EditIcon sx={{height:'17px'}}/>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Aadhar Number:</strong> 547414741524<EditIcon sx={{height:'17px'}}/>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Address:</strong> Sector 18, Noida <EditIcon sx={{height:'17px'}}/>
          </Typography>
        </Grid>
        
      </Grid>

      <Typography variant="h6" gutterBottom sx={{marginTop:'10%',marginInline:'2%'}}>
        Contact Information
      </Typography>
      <Grid container spacing={2} sx={{marginInline:'3%',marginTop:'3%'}}>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Email ID:</strong> abc@gmail.com<EditIcon sx={{height:'17px'}}/>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Parents Mobile:</strong> 9876854100<EditIcon sx={{height:'17px'}}/>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Student Mobile:</strong> 7845120010<EditIcon sx={{height:'17px'}}/>
          </Typography>
        </Grid>
        
        
        
      </Grid>
      </Box>
      <Box sx={{width:{xs:'90%',md:'40%'}}}>
      <Typography variant="h6" gutterBottom sx={{marginTop:'10%',marginInline:'2%'}}>
        Basic Information
      </Typography>
      <Grid container spacing={2} sx={{marginInline:'3%',marginTop:'3%'}}>
        <Grid item xs={12}>
          <Typography variant="body1" sx={{marginLeft:'6%'}}>
             <img src={Rohit} alt="up" style={Gro}/>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Username:</strong> 2022112<EditIcon sx={{height:'17px'}}/>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Password:</strong> ********<EditIcon sx={{height:'17px'}}/>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Student ID:</strong> 2022112
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Date of Registration:</strong> 27 Oct 2022
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Current School:</strong> abc group
          </Typography>
        </Grid>
        
        
        
      </Grid>
      </Box>
    </Box>
    <Box >
          <img src={Low} alt="up" style={UpImage}/>
   </Box>
    
      
    </div>
  )
}

export default CandidateProfile
