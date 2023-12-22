import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PlaceIcon from "@mui/icons-material/Place";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Typography,
    styled
} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';
import m1 from '../../../assets/images/m1.png';
import m2 from '../../../assets/images/m2.png';
import m3 from '../../../assets/images/m3.png';
import m4 from '../../../assets/images/m4.png';




const RecentApp = () => {
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

      {/*******1st part *****/}
      <Grid container sx={{padding:'20px 20px 30px'}}>
      <Grid Item xs={12} md={9} sx={{  padding:'0px 30px 0px 0px', margin:'7px 0px' }}>
        <Typography
          color="#202124"
          fontSize="20px"
          fontWeight="600"
          marginBottom="1%"
          textTransform="capitalize"
          letterSpacing="1.5px"
          
        >
          My job Listings
        </Typography>
        </Grid>

        <Grid Item xs={12} md={3} sx={{padding:'0px 0px 0px 20px'}}>
        <FormControl fullWidth size="small">

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



{/**************Table part ********/}
    <container >

    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{backgroundColor:'#e2eaf8'}}>
            <TableCell sx={{color:'blue'}}><strong>Title</strong></TableCell>
            <TableCell sx={{color:'blue'}}><strong>Applications</strong></TableCell>
            <TableCell  sx={{color:'blue'}}><strong>Expired & Created</strong></TableCell>
            <TableCell  sx={{color:'blue'}}><strong>Status</strong></TableCell>
            <TableCell sx={{color:'blue'}} ><strong>Action</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {/*********1st row ****/}
            <TableRow>
            <td style={{padding:'5px 15px'}} >
                <Paper elevation={1} >
                    <Grid sx={{display:'flex', flexDirection:'row'}}>
                    <Grid sx={{display:{xs:'block',md:'flex'},flexDirection:'row'}} >
                        <Grid sx={{padding:'0px 0px 0px 10px', marginTop:'10px'}}><img src={m1} /></Grid>  
                    </Grid>
                    <Grid sx={{ color: '#696969' , display:{xs:'block',sm:'flex'}, flexDirection:'column'}}>
                    <Grid sx={{marginTop:'10px', marginInline:'10px'}}> <strong >Software Engineer(Android),Libraries</strong></Grid>
                    <Grid sx={{display:'flex', flexDirection:{xs:'row',md:'column'}}}>
                    <Grid sx={{display:'flex', flexDirection:'row'}} >
                                <BusinessCenterIcon />
                                <Typography sx={{fontSize:'15px'}}>Segment</Typography>
                            </Grid>
                            <Grid sx={{display:'flex', flexDirection:'row',}} >
                                <PlaceIcon  />
                                <Typography sx={{fontSize:'15px'}}>London,UK</Typography>
                            </Grid>
                            </Grid>
                           </Grid>
                           </Grid>
                         
                    </Paper>
                    </td>

                    <td style={{padding:'5px 15px'}} >
                        <Typography>3+ Applied</Typography>
                    </td>

                    <td style={{padding:'5px 15px'}}>
                        October 27,2017 <br/>
                         November 21, 2018
                    </td>
                    <td style={{padding:'5px 15px'}}>
                        <Typography sx={{color:'#14A44D'}}>Active</Typography>
                    </td>
                 <td style={{padding:'5px 15px'}}>
                <Box sx={{display:'flex', flexDirection:{md:'row', xs:'column'}}}  >
                <Grid>
                <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px', }}><VisibilityIcon fontSize="small"/></Button>
                </Grid>&nbsp;&nbsp;
                <Grid>
                <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><EditIcon fontSize="small"/></Button>
                </Grid>&nbsp;&nbsp;
                <Grid>
                <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><DeleteIcon fontSize="small"/></Button>
                </Grid>&nbsp;&nbsp;
                </Box>
                 </td>
                       
            </TableRow>
          
          {/***********2nd row *****/}
          <TableRow>
            <td style={{padding:'5px 15px'}}>
                <Paper elevation={3} >
                    <Grid sx={{display:'flex', flexDirection:'row'}}>
                    <Grid sx={{display:{xs:'block',md:'flex'},flexDirection:'row'}} >
                        <Grid sx={{padding:'0px 0px 0px 10px',marginTop:'10px'}}><img src={m2} /></Grid>  
                    </Grid>
                    <Grid sx={{ color: '#696969' , display:{xs:'block',sm:'flex'}, flexDirection:'column'}}>
                    <Grid sx={{marginTop:'10px', marginInline:'10px'}}> <strong >Recrutiting Coordinator</strong></Grid>
                    <Grid sx={{display:'flex', flexDirection:{xs:'row',md:'column'}}}>
                    <Grid sx={{display:'flex', flexDirection:'row'}} >
                                <BusinessCenterIcon />
                                <Typography sx={{fontSize:'15px'}}>Segment</Typography>
                            </Grid>
                            <Grid sx={{display:'flex', flexDirection:'row',}} >
                                <PlaceIcon  />
                                <Typography sx={{fontSize:'15px'}}>London,UK</Typography>
                            </Grid>
                            </Grid>
                           </Grid>
                           </Grid>
                         
                    </Paper>
                    </td>

                    <td style={{padding:'5px 15px'}}>
                        <Typography>3+ Applied</Typography>
                    </td>

                    <td style={{padding:'5px 15px'}}>
                        October 27,2017 <br/>
                         November 21, 2018
                    </td>
                    <td style={{padding:'5px 15px'}}>
                        <Typography sx={{color:'#14A44D'}}>Active</Typography>
                    </td>
                 <td style={{padding:'5px 15px'}}>
                <Box sx={{display:'flex', flexDirection:{md:'row', xs:'column' }}}  >
                <Grid>
                <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><VisibilityIcon fontSize="small"/></Button>
                </Grid>&nbsp;&nbsp;
                <Grid>
                <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><EditIcon fontSize="small"/></Button>
                </Grid>&nbsp;&nbsp;
                <Grid>
                <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><DeleteIcon fontSize="small"/></Button>
                </Grid>&nbsp;&nbsp;
                </Box>
                 </td>
                       
            </TableRow>

            {/**********3rd row ******/}
            <TableRow>
            <td style={{padding:'5px 15px'}}>
                <Paper elevation={3} >
                    <Grid sx={{display:'flex', flexDirection:'row'}}>
                    <Grid sx={{display:{xs:'block',md:'flex'},flexDirection:'row'}} >
                        <Grid sx={{padding:'0px 0px 0px 10px',marginTop:'10px'}}><img src={m3} /></Grid>  
                    </Grid>
                    <Grid sx={{ color: '#696969' , display:{xs:'block',sm:'flex'}, flexDirection:'column'}}>
                    <Grid sx={{marginTop:'10px', marginInline:'10px'}}> <strong >Product Manager, Studio</strong></Grid>
                    <Grid sx={{display:'flex', flexDirection:{xs:'row',md:'column'}}}>
                    <Grid sx={{display:'flex', flexDirection:'row'}} >
                                <BusinessCenterIcon />
                                <Typography sx={{fontSize:'15px'}}>Segment</Typography>
                            </Grid>
                            <Grid sx={{display:'flex', flexDirection:'row',}} >
                                <PlaceIcon  />
                                <Typography sx={{fontSize:'15px'}}>London,UK</Typography>
                            </Grid>
                            </Grid>
                           </Grid>
                           </Grid>
                         
                    </Paper>
                    </td>

                    <td style={{padding:'5px 15px'}}>
                        <Typography>3+ Applied</Typography>
                    </td>

                    <td style={{padding:'5px 15px'}}>
                        October 27,2017 <br/>
                         November 21, 2018
                    </td>
                    <td style={{padding:'5px 15px'}}>
                        <Typography sx={{color:'#14A44D'}}>Active</Typography>
                    </td>
                 <td style={{padding:'5px 15px'}}>
                <Box sx={{display:'flex', flexDirection:{md:'row', xs:'column'}}}  >
                <Grid>
                <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><VisibilityIcon fontSize="small"/></Button>
                </Grid>&nbsp;&nbsp;
                <Grid>
                <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><EditIcon fontSize="small"/></Button>
                </Grid>&nbsp;&nbsp;
                <Grid>
                <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><DeleteIcon fontSize="small"/></Button>
                </Grid>&nbsp;&nbsp;
                </Box>
                 </td>
                       
            </TableRow>

            {/*********4th row ****/}
            <TableRow>
            <td style={{padding:'5px 15px'}}>
                <Paper elevation={3} >
                    <Grid sx={{display:'flex', flexDirection:'row'}}>
                    <Grid sx={{display:{xs:'block',md:'flex'},flexDirection:'row'}} >
                        <Grid sx={{padding:'0px 0px 0px 10px',marginTop:'10px'}}><img src={m4} /></Grid>  
                    </Grid>
                    <Grid sx={{ color: '#696969' , display:{xs:'block',sm:'flex'}, flexDirection:'column'}}>
                    <Grid sx={{marginTop:'10px', marginInline:'10px'}}> <strong >Senior Product,Designer</strong></Grid>
                    <Grid sx={{display:'flex', flexDirection:{xs:'row',md:'column'}}}>
                    <Grid sx={{display:'flex', flexDirection:'row'}} >
                                <BusinessCenterIcon />
                                <Typography sx={{fontSize:'15px'}}>Segment</Typography>
                            </Grid>
                            <Grid sx={{display:'flex', flexDirection:'row',}} >
                                <PlaceIcon  />
                                <Typography sx={{fontSize:'15px'}}>London,UK</Typography>
                            </Grid>
                            </Grid>
                           </Grid>
                           </Grid>
                         
                    </Paper>
                    </td>

                    <td style={{padding:'5px 15px'}}>
                        <Typography>3+ Applied</Typography>
                    </td>

                    <td style={{padding:'5px 15px'}}>
                        October 27,2017 <br/>
                         November 21, 2018
                    </td>
                    <td style={{padding:'5px 15px'}}>
                        <Typography sx={{color:'#14A44D'}}>Active</Typography>
                    </td>
                 <td style={{padding:'5px 15px'}}>
                <Box sx={{display:'flex', flexDirection:{md:'row', xs:'column'}}}  >
                <Grid>
                <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><VisibilityIcon fontSize="small"/></Button>
                </Grid>&nbsp;&nbsp;
                <Grid>
                <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><EditIcon fontSize="small"/></Button>
                </Grid>&nbsp;&nbsp;
                <Grid>
                <Button sx={{ color: '#274f8f', backgroundColor: '#1967D226', borderRadius: '7px' }}><DeleteIcon fontSize="small"/></Button>
                </Grid>&nbsp;&nbsp;
                </Box>
                 </td>
                       
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

            </container>
      </Box>
      </Paper>
      
 
  );
};

export default RecentApp;