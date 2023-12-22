import { Typography, styled } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import * as React from "react";
import RecentApp4 from './RecentApp4';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  

  return (
    <>
    <Grid>

    <Box sx={{marginInline:'5%', marginTop:'2%'}}>
      <Typography sx={{color:'black',fontSize:'25px', fontWeight:'bold'}}>
        Manage Jobs!
      </Typography>
      <Typography sx={{color:'gray',marginTop:"1%"}}>
        Ready to jump back in?
      </Typography>

    </Box>
  
  {/* Recent Application */}

  
  <RecentApp4 />

      <Box sx={{marginInline:'5%',marginBlock:'5%'}}>
        <Typography sx={{textAlign:'center'}}>
        © 2023 Superio by ib-themes. All Right Reserved.
        </Typography>
      </Box>
    </Grid>

    
    <Grid>

    </Grid>

</>

  );
}