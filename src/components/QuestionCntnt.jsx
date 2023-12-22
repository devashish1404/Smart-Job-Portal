import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function Item({ children, sx }) {
  return <div sx={sx} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>{children}</div>;
}

function YourComponent() {
  return (
    <Grid container sx={{ color: 'white', backgroundColor: 'rgb(24, 43, 168)' }}>
      {/* Left section, centered horizontally on all screens and centered vertically on small screens */}
      <Grid item xs={12} md={6} sx={{ height: '200px' }}>
        <Item>
          <div>
            <Typography sx={{ fontWeight: '600', fontSize: '22px', fontStyle: 'italic', fontFamily: 'Arial, sans-serif' }}>Got a question?</Typography>
            <p sx={{ textAlign: 'left' }}>
              We are here to help. Check out our FAQs, send us an email, or call us at 1<br></br>
              (900) 777.7777.
            </p>
          </div>
        </Item>
      </Grid>

      {/* Right section, centered vertically and horizontally on all screens */}
      <Grid item xs={12} md={6} sx={{ height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box>
          <Button variant="contained" sx={{ width: '150px', height: '50px', backgroundColor: 'white', color: 'blue' }}>Get Started</Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default YourComponent;