import { Typography, styled, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { useState } from "react";
import RecentApp2 from './RecentApp2';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  
    const [age, setAge] = React.useState("");

    const [selectedOption, setSelectedOption] = useState("");
  
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
      
   
  
    const data = [
      { name: 'Jan', value: 200 },
      { name: 'Feb', value: 140 },
      { name: 'March', value: 210 },
      { name: 'April', value: 360 },
      { name: 'June', value: 210 },
      { name: 'July', value: 250 },
    ];
  
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
    <Grid>
     



   

    <Box sx={{marginInline:'5%', marginTop:'2%'}}>
      <Typography sx={{color:'black',fontSize:'25px', fontWeight:'bold'}}>
        Shortlisted Resumes!
      </Typography>
      <Typography sx={{color:'gray',marginTop:"1%"}}>
        Ready to jump back in?
      </Typography>

    </Box>
    {/* <Box sx={{ flexGrow: 1, marginInline: "5%", marginTop: "3%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Item sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <BusinessCenterIcon
                sx={{ height: "70px", width: "55px", color: "blue" }}
              />
            </Box>
            <Box sx={{}}>
              <Typography sx={{ color: "blue", fontSize: "30px" }}>
                22
              </Typography>
              <Typography>Posted Jobs</Typography>
            </Box>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <DescriptionIcon
                sx={{ height: "70px", width: "55px", color: "red" }}
              />
            </Box>
            <Box sx={{}}>
              <Typography sx={{ color: "red", fontSize: "30px" }}>
                9382
              </Typography>
              <Typography>Application</Typography>
            </Box>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <CommentIcon
                sx={{ height: "70px", width: "55px", color: "#e6ae17" }}
              />
            </Box>
            <Box sx={{}}>
              <Typography sx={{ color: "#e6ae17", fontSize: "30px" }}>
                74
              </Typography>
              <Typography>Massage</Typography>
            </Box>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <BookmarkBorderIcon
                sx={{ height: "70px", width: "55px", color: "green" }}
              />
            </Box>
            <Box sx={{}}>
              <Typography sx={{ color: "green", fontSize: "30px" }}>
                32
              </Typography>
              <Typography>Shortlist</Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box> */}





    {/* Graph */}

     

{/* <Box sx={{ flexGrow: 1, marginInline: "5%", marginTop: "3%" }}>
<Grid container spacing={2}>
  <Grid item xs={12} md={8}>
    <Item>
      <Box
        sx={{
          justifyContent: "space-between",
          display: { xs: "block", sm: "flex" },
          marginInline: "4%",
          marginTop: "5%",
        }}
      >
        <Typography sx={{ color: "black", fontSize: "20px" }}>
          Your Profile Views
        </Typography>

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel></InputLabel>

          <InputLabel id="select-label">Select</InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={selectedOption}
            onChange={handleChange}
            label="Select an Option"
          >
            <MenuItem value="option1">Last 6 Month</MenuItem>
            <MenuItem value="option2">Last 12 Month</MenuItem>
            <MenuItem value="option3">Last 24 Month</MenuItem>
            <MenuItem value="option4">Last 48 Month</MenuItem>
          </Select>
        </FormControl>
      </Box>

      

        <Grid container justify="center">
             <Grid item xs={12} sm={10} md={8} lg={6}>

             <ResponsiveContainer width="100%" height={350}>
             
        <LineChart  data={data} >
       
          <XAxis dataKey="name" />
          <YAxis
            ticks={[100, 150, 200, 250, 300, 350, 400]}
            domain={[100, "dataMax"]}
          />
          <CartesianGrid stroke="grey" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="blue"
            activeDot={{ r: 8 }}
          />
        </LineChart>
        </ResponsiveContainer>
        
        </Grid>
        </Grid>

      
    </Item>
  </Grid>

  <Grid item xs={12} md={4}>
    <Item>
      <Box sx={{ marginTop: "7%" }}>
        <Typography sx={{ color: "black", fontSize: "20px" }}>
          Notifications
        </Typography>
      </Box>

      <Box sx={{ marginTop: "11%" }}>
        <Typography sx={{ display: "flex" }}>
          <BusinessCenterIcon sx={{ marginRight: "20px",color:'blue' }} />
          Henry Wilson applied for a job Product Designer
        </Typography>
        <Typography sx={{ display: "flex", marginTop: 5 }}>
          <BusinessCenterIcon sx={{ marginRight: "20px",color:'green' }} />
          Raul Costa applied for a job Product Manager, Risk
        </Typography>
        <Typography sx={{ display: "flex", marginTop: 5 }}>
          <BusinessCenterIcon sx={{ marginRight: "20px" ,color:'blue'}} />
          Jack Milk applied for a job Technical Architect
        </Typography>
        <Typography sx={{ display: "flex", marginTop: 5 }}>
          <BusinessCenterIcon sx={{ marginRight: "20px",color:'green' }} />
          Michel Arianapplied for a job Software Engineer
        </Typography>
        <Typography sx={{ display: "flex", marginTop: 5 }}>
          <BusinessCenterIcon sx={{ marginRight: "20px",color:'blue' }} />
          Wade Warren applied for a job Web Developer
        </Typography>
        <Typography sx={{ display: "flex", marginTop: 5 }}>
          <BusinessCenterIcon sx={{ marginRight: "20px",color:'green' }} />
          Michel Arianapplied for a job Software Engineer
        </Typography>
      </Box>
    </Item>
  </Grid>
</Grid>
</Box> */}




  {/* Recent Application */}

  
  <RecentApp2 />

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