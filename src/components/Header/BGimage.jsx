import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Bgimg from '../../assets/images/bgimg.jpg';
import MiddleCont from './Form';

const MyComponent = () => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTransition(true);
  }, []);
  

  return (
    <Grid container spacing={0}>
      {/* First Row */}
      <Grid item xs={12} sx={{
        position:'relative',
        display:'block',
        textAlign:'center',
        minHeight:'100vh',
        backgroundImage:`url(${Bgimg})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        padding:'360px 0 75px',
        backgroundPosition:'center',
        transition: 'all 0.5s',
          transform: transition ? 'translateY(0)' : 'translateY(100vh)',
        }}
>
      
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='h3' color='white' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>15,000+ Browser Jobs</Typography>
          </Box>
          <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography sx={{ color: 'white',display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>Find Jobs, Employment & Career Opportunities</Typography>
          </Box>
        

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <MiddleCont/>
        </Box>


        <Box sx={{ display: 'flex', justifyContent: 'center',}}>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }} spacing={2}>
            {/* First Row on Medium (md) and Larger Screens */}
            <Grid item lg={3} md={6} xs={12}>
              <Typography sx={{ color: 'white', fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>97216</Typography>
              <Box>
                <Typography sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-evenly' }}>Jobs</Typography>
              </Box>
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <Typography sx={{ color: 'white', fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>4782</Typography>
              <Box>
                <Typography sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-evenly' }}>Members</Typography>
              </Box>
            </Grid>

            {/* Second Row on Medium (md) and Larger Screens */}
            <Grid item lg={3} md={6} xs={12}>
              <Typography sx={{ color: 'white', fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>5322</Typography>
              <Box>
                <Typography sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-evenly' }}>Resume</Typography>
              </Box>
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <Typography sx={{ color: 'white', fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>6329</Typography>
              <Box>
                <Typography sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-evenly' }}>Company</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

      </Grid>

      {/* Divider */}
      {/* <Grid item xs={12}>
        <hr style={{ width: '100%', margin: 0 }} />
      </Grid>

      <Grid item xs={12}>
      
        Second Row Content
      </Grid> */}
    </Grid>
  );
}

export default MyComponent;