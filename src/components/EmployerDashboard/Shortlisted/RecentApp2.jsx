import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
    Box,
    Button,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
    styled
} from "@mui/material";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import React, { useState } from "react";






const JobsApplied = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [selectedOption, setSelectedOption] = useState("");
  
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
   <Paper elevation={1} sx={{width:'100%',marginTop:'2%'}} >
    <Box sx={{ marginLeft:{} , marginInline: "5%" }}>

      {/********* 1 row *******/}
    <Grid container sx={{padding:'20px 30px 30px'}}>
      <Grid Item xs={12} md={6} sx={{  padding:'0px 30px 0px 0px', margin:'7px 0px' }}>
        <Typography
          color="#202124"
          fontSize="20px"
          fontWeight="600"
          marginBottom="1%"
          textTransform="capitalize"
          letterSpacing="1.5px"
          
        >
          Shortlist Resume
        </Typography>
        </Grid>

        <Grid Item xs={12} md={4} sx={{padding:'0px 0px 0px 20px' }}>
        <TextField
          fullWidth
                    placeholder="Search"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{backgroundColor:'#E2EAF8' }}
                  />
    </Grid>

        <Grid Item xs={12} md={2} sx={{padding:'0px 0px 0px 20px', marginTop:{xs:'1%',md:'0%'} }}>
        <FormControl fullWidth size="large">

          <InputLabel id="select-label">All status</InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={selectedOption}
            onChange={handleChange}
            label="Select an Option"
            sx={{backgroundColor:'#E2EAF8'}}
          >
            <MenuItem value="option1">Last 6 Month</MenuItem>
            <MenuItem value="option2">Last 12 Month</MenuItem>
            <MenuItem value="option3">Last 24 Month</MenuItem>
            <MenuItem value="option4">Last 48 Month</MenuItem>
          </Select>
        </FormControl>
    </Grid>
    </Grid>


     <container >
                <Grid container spacing={2} sx={{ marginTop: '3%' }}>
                    <Grid item xs={12} md={6} >
                        <Item >
                            <Box sx={{ display: { xs: 'block', md: 'flex' }, marginInline: '4%' }}>
                                <Box
                                    sx={{
                                        height: "90px",
                                        width: "90px",
                                        backgroundColor: "gray",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "80%",
                                    }}
                                >
                                    90*90
                                </Box>

                                <Box sx={{ textAlign: 'left', marginInline: { xs: '5px', md: "20px" } }}>
                                    <Typography sx={{ color: 'black' }} >
                                        <strong>Darelene Robetson</strong>
                                    </Typography>
                                    <Grid sx={{ display: { xs: 'block', sm: 'flex' }, marginTop: '10px' }} >
                                        <Grid>
                                            <Typography fontSize={'15px'}>
                                                UI Designer
                                            </Typography>
                                        </Grid>

                                        <Grid display='flex' flexDirection='row' >
                                            <PlaceIcon />
                                            <Typography fontSize={'15px'}>London,UK</Typography>
                                        </Grid>
                                        <Grid display='flex' flexDirection='row' marginLeft="10px" >
                                            <BusinessCenterIcon />
                                            <Typography fontSize={'15px'}>$44/ hour</Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid sx={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                                        <Grid>
                                            <Button sx={{ color: 'gray', backgroundColor: '#1967D226', borderRadius: '20px' }}>App</Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: 'gray', backgroundColor: '#1967D226', borderRadius: '20px' }}>Design</Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: 'gray', backgroundColor: '#1967D226', borderRadius: '20px' }}>Digital</Button>
                                        </Grid>&nbsp;&nbsp;
                                    </Grid>


                                    <Grid sx={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                                    <Grid sx={{display:'flex',flexDirection:{xs:'column',sm:'row'}}}>
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px', width: '10px' }}><VisibilityIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><DoneIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        </Grid>
                                        <Grid sx={{display:'flex',flexDirection:{xs:'column',sm:'row'}}}>
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><CloseIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><DeleteIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Item>
                    </Grid>



                    <Grid item xs={12} md={6} >
                        <Item>
                            <Box sx={{ display: { xs: 'block', md: 'flex' }, marginInline: '4%' }}>
                                <Box
                                    sx={{
                                        height: "90px",
                                        width: "90px",
                                        backgroundColor: "gray",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "80%",
                                    }}
                                >
                                    90*90
                                </Box>

                                <Box sx={{ textAlign: 'left', marginInline: { xs: '5px', md: "20px" } }}>
                                    <Typography sx={{ color: 'black' }} >
                                        <strong>Wade Warren</strong>
                                    </Typography>
                                    <Grid sx={{ display: { xs: 'block', sm: 'flex' }, marginTop: '10px' }} >
                                        <Grid>
                                            <Typography fontSize={'15px'}>
                                                UI Designer
                                            </Typography>
                                        </Grid>

                                        <Grid display='flex' flexDirection='row' >
                                            <PlaceIcon />
                                            <Typography fontSize={'15px'}>London,UK</Typography>
                                        </Grid>
                                        <Grid display='flex' flexDirection='row' marginLeft="10px" >
                                            <BusinessCenterIcon />
                                            <Typography fontSize={'15px'}>$44/ hour</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                                        <Grid>
                                            <Button sx={{ color: 'gray', backgroundColor: '#1967D226', borderRadius: '20px' }}>App</Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: 'gray', backgroundColor: '#1967D226', borderRadius: '20px' }}>Design</Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: 'gray', backgroundColor: '#1967D226', borderRadius: '20px' }}>Digital</Button>
                                        </Grid>&nbsp;&nbsp;
                                    </Grid>

                                    <Grid sx={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                                    <Grid sx={{display:'flex',flexDirection:{xs:'column',sm:'row'}}}>
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px', width: '10px' }}><VisibilityIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><DoneIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        </Grid>
                                        <Grid sx={{display:'flex',flexDirection:{xs:'column',sm:'row'}}}>
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><CloseIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><DeleteIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Item>
                    </Grid>




                    <Grid item xs={12} md={6} >
                        <Item>
                            <Box sx={{ display: { xs: 'block', md: 'flex' }, marginInline: '4%' }}>
                                <Box
                                    sx={{
                                        height: "90px",
                                        width: "90px",
                                        backgroundColor: "gray",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "80%",
                                    }}
                                >
                                    90*90
                                </Box>

                                <Box sx={{ textAlign: 'left', marginInline: { xs: '5px', md: "20px" } }}>
                                    <Typography sx={{ color: 'black' }} >
                                        <strong>Leslie Alexander</strong>
                                    </Typography>
                                    <Grid sx={{ display: { xs: 'block', sm: 'flex' }, marginTop: '10px' }} >
                                        <Grid>
                                            <Typography fontSize={'15px'}>
                                                UI Designer
                                            </Typography>
                                        </Grid>

                                        <Grid display='flex' flexDirection='row' >
                                            <PlaceIcon />
                                            <Typography fontSize={'15px'}>London,UK</Typography>
                                        </Grid>
                                        <Grid display='flex' flexDirection='row' marginLeft="10px" >
                                            <BusinessCenterIcon />
                                            <Typography fontSize={'15px'}>$44/ hour</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                                        <Grid>
                                            <Button sx={{ color: 'gray', backgroundColor: '#1967D226', borderRadius: '20px' }}>App</Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: 'gray', backgroundColor: '#1967D226', borderRadius: '20px' }}>Design</Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: 'gray', backgroundColor: '#1967D226', borderRadius: '20px' }}>Digital</Button>
                                        </Grid>&nbsp;&nbsp;
                                    </Grid>

                                    <Grid sx={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                                    <Grid sx={{display:'flex',flexDirection:{xs:'column',sm:'row'}}}>
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px', width: '10px' }}><VisibilityIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><DoneIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        </Grid>
                                        <Grid sx={{display:'flex',flexDirection:{xs:'column',sm:'row'}}}>
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><CloseIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><DeleteIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <Item>
                            <Box sx={{ display: { xs: 'block', md: 'flex' }, marginInline: '4%' }}>
                                <Box
                                    sx={{
                                        height: "90px",
                                        width: "90px",
                                        backgroundColor: "gray",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "80%",
                                    }}
                                >
                                    90*90
                                </Box>

                                <Box sx={{ textAlign: 'left', marginInline: { xs: '5px', md: "20px" } }}>
                                    <Typography sx={{ color: 'black' }} >
                                        <strong>Floyd Miles</strong>
                                    </Typography>
                                    <Grid sx={{ display: { xs: 'block', sm: 'flex' }, marginTop: '10px' }} >
                                        <Grid>
                                            <Typography fontSize={'15px'}>
                                                UI Designer
                                            </Typography>
                                        </Grid>

                                        <Grid display='flex' flexDirection='row' >
                                            <PlaceIcon />
                                            <Typography fontSize={'15px'}>London,UK</Typography>
                                        </Grid>
                                        <Grid display='flex' flexDirection='row' marginLeft="10px" >
                                            <BusinessCenterIcon />
                                            <Typography fontSize={'15px'}>$44/ hour</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                                        <Grid>
                                            <Button sx={{ color: 'gray', backgroundColor: '#1967D226', borderRadius: '20px' }}>App</Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: 'gray', backgroundColor: '#1967D226', borderRadius: '20px' }}>Design</Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: 'gray', backgroundColor: '#1967D226', borderRadius: '20px' }}>Digital</Button>
                                        </Grid>&nbsp;&nbsp;
                                    </Grid>

                                    <Grid sx={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                                    <Grid sx={{display:'flex',flexDirection:{xs:'column',sm:'row'}}}>
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px', width: '10px' }}><VisibilityIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><DoneIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        </Grid>
                                        <Grid sx={{display:'flex',flexDirection:{xs:'column',sm:'row'}}}>
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><CloseIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><DeleteIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <Item>
                            <Box sx={{ display: { xs: 'block', md: 'flex' }, marginInline: '4%' }}>
                                <Box
                                    sx={{
                                        height: "90px",
                                        width: "90px",
                                        backgroundColor: "gray",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "80%",
                                    }}
                                >
                                    90*90
                                </Box>

                                <Box sx={{ textAlign: 'left', marginInline: { xs: '5px', md: "20px" } }}>
                                    <Typography sx={{ color: 'black' }} >
                                        <strong>Cameron Williamson</strong>
                                    </Typography>
                                    <Grid sx={{ display: { xs: 'block', sm: 'flex' }, marginTop: '10px' }} >
                                        <Grid>
                                            <Typography fontSize={'15px'}>
                                                UI Designer
                                            </Typography>
                                        </Grid>

                                        <Grid display='flex' flexDirection='row' >
                                            <PlaceIcon />
                                            <Typography fontSize={'15px'}>London,UK</Typography>
                                        </Grid>
                                        <Grid display='flex' flexDirection='row' marginLeft="10px" >
                                            <BusinessCenterIcon />
                                            <Typography>$44/ hour</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                                        <Grid>
                                            <Button sx={{ color: 'gray', backgroundColor: '#1967D226', borderRadius: '20px' }}>App</Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: 'gray', backgroundColor: '#1967D226', borderRadius: '20px' }}>Design</Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: 'gray', backgroundColor: '#1967D226', borderRadius: '20px' }}>Digital</Button>
                                        </Grid>&nbsp;&nbsp;
                                    </Grid>

                                    <Grid sx={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                                    <Grid sx={{display:'flex',flexDirection:{xs:'column',sm:'row'}}}>
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px', width: '10px' }}><VisibilityIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><DoneIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        </Grid>
                                        <Grid sx={{display:'flex',flexDirection:{xs:'column',sm:'row'}}}>
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><CloseIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><DeleteIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <Item>
                            <Box sx={{ display: { xs: 'block', md: 'flex' }, marginInline: '4%' }}>
                                <Box
                                    sx={{
                                        height: "90px",
                                        width: "90px",
                                        backgroundColor: "gray",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "80%",
                                    }}
                                >
                                    90*90
                                </Box>

                                <Box sx={{ textAlign: 'left', marginInline: { xs: '5px', md: "20px" } }}>
                                    <Typography sx={{ color: 'black' }} >
                                        <strong>Robert Fox</strong>
                                    </Typography>
                                    <Grid sx={{ display: { xs: 'block', sm: 'flex' }, marginTop: '10px' }} >
                                        <Grid>
                                            <Typography fontSize={'15px'}>
                                                UI Designer
                                            </Typography>
                                        </Grid>

                                        <Grid display='flex' flexDirection='row' >
                                            <PlaceIcon />
                                            <Typography fontSize={'15px'}>London,UK</Typography>
                                        </Grid>
                                        <Grid display='flex' flexDirection='row' marginLeft="10px" >
                                            <BusinessCenterIcon />
                                            <Typography fontSize={'15px'}>$44/ hour</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                                        <Grid>
                                            <Button sx={{ color: 'gray', backgroundColor: '#1967D226', borderRadius: '20px' }}>App</Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: 'gray', backgroundColor: '#1967D226', borderRadius: '20px' }}>Design</Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: 'gray', backgroundColor: '#1967D226', borderRadius: '20px' }}>Digital</Button>
                                        </Grid>&nbsp;&nbsp;
                                    </Grid>

                                    <Grid sx={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                                    <Grid sx={{display:'flex',flexDirection:{xs:'column',sm:'row'}}}>
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px', width: '10px' }}><VisibilityIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><DoneIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        </Grid>
                                        <Grid sx={{display:'flex',flexDirection:{xs:'column',sm:'row'}}}>
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><CloseIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        <Grid>
                                            <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><DeleteIcon sx={{ width: '15px', height: '17px' }} /></Button>
                                        </Grid>&nbsp;&nbsp;
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
      <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center', marginTop:'3%'}}>
      <Pagination
        count={3}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Grid>
            </container>
      </Box>
      </Paper>
      
 
  );
};

export default JobsApplied;