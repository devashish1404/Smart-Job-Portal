import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import m1 from '../utils/m1.png'
import m2 from '../utils/m2.png'
import m3 from '../utils/m3.png'
import m4 from '../utils/m4.png'
import m5 from '../utils/m5.png'
import m6 from '../utils/m6.png'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PlaceIcon from '@mui/icons-material/Place';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaidIcon from '@mui/icons-material/Paid';


const gridItemStyles = {
  width: '80%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  padding: '16px', // Add padding for spacing
};
const paperStyles = {
  width: 'auto',
  margin: '10px', // Add spacing between grid items
  padding: '10px', // Add padding for spacing
};
const FeaturedJobCategory = () => {
    return (
        <div>
            <Box sx={{ marginBottom: '10%' }} >
                <Typography
                    color='#202124'
                    fontSize='30px'
                    fontWeight='600'
                    marginBottom='1%'

                    textTransform='capitalize'
                    letterSpacing='1.5px'
                    textAlign='center'

                >
                    Featured Jobs
                </Typography>
                <Typography
                    color='#696969'
                    fontSize='15px'
                    fontWeight='300'

                    marginBottom='20px'
                    textTransform='capitalize'
                    letterSpacing='1px'
                    textAlign='center'

                >
                    Know your worth and find the job that qualify your life
                </Typography>
            </Box>
              <Grid container  sx={{ display: 'flex', flexDirection: {xs:'column',md:'row'}, justifyContent: 'center' ,alignItems:'center'}}>
              {/* maingrid 1 */}
      <Grid item  xs={12} lg={6} sx={{   display: 'flex', flexDirection: 'row', justifyContent:'space-evenly', }}>
                <Paper elevation={3} sx={paperStyles}>
                    <Grid sx={{display:'flex',flexDirection:'row'}} >
                        <Grid><img src={m1} /></Grid>
                        <Grid sx={{marginTop:"15px"}}> <strong >Software Engineer(Android),Libraries</strong></Grid>
                       
                    </Grid>
                    <Grid  >
                       
                        <Grid sx={{ color: '#696969' , display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center',marginInline:'10px'}}>
                            <Grid sx={{display:'flex', flexDirection:'row',justifyContent:'space-evenly', alignItems:'center',}} >
                                <BusinessCenterIcon />
                                <Typography sx={{fontSize:'15px'}}>Segment</Typography>
                            </Grid>
                            <Grid sx={{display:'flex', flexDirection:'row', marginLeft:'10px'}} >
                                <PlaceIcon  />
                                <Typography sx={{fontSize:'15px'}}>London,UK</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <AccessTimeIcon/>
                                <Typography sx={{fontSize:'15px'}}>11 hours ago</Typography>
                            </Grid>
                            <Grid sx={{display:'flex', flexDirection:'row', marginLeft:'10px'}} >
                                <PaidIcon />
                                <Typography sx={{fontSize:'15px'}}>$35k-$45k</Typography>
                            </Grid>
                        </Grid>&nbsp;
                        <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Grid>
                                <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Full Time</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Private</Button>
                            </Grid>
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Urgent</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
                </Grid>
                
                {/* main grid 2 */}
                <Grid item  xs={12} lg={6} sx={{   display: 'flex', flexDirection: 'row', justifyContent:'space-evenly', }}>
                <Paper elevation={3} sx={paperStyles}>
                    <Grid sx={{display:'flex',flexDirection:'row'}} >
                      <Grid> <img src={m2} /></Grid>  
                       <Grid sx={{marginTop:"15px"}}> <strong>Recruiting Coordinator</strong></Grid> 
                  </Grid>
                    <Grid >
                      
                        <Grid sx={{ color: '#696969' , display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center',marginInline:'10px'}}>
                            <Grid  sx={{display:'flex', flexDirection:'row',justifyContent:'space-evenly', alignItems:'center',}} >
                                <BusinessCenterIcon />
                                <Typography sx={{fontSize:'15px'}}>Catalyst</Typography>
                            </Grid>
                            <Grid sx={{display:'flex', flexDirection:'row', marginLeft:'10px'}} >
                                <PlaceIcon />
                                <Typography sx={{fontSize:'15px'}}>London,UK</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <AccessTimeIcon />
                                <Typography sx={{fontSize:'15px'}}>11 hours ago</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <PaidIcon />
                                <Typography sx={{fontSize:'15px'}}>$35k-$45k</Typography>
                            </Grid>
                        </Grid>&nbsp;&nbsp;
                        <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Grid>
                                <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Full Time</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Private</Button>
                            </Grid>
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Urgent</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Paper>
                </Grid>
            
                {/* main grid 3 */}
              
                <Grid item  xs={12} lg={6} sx={{   display: 'flex', flexDirection: 'row', justifyContent:'space-evenly', }}>
                <Paper elevation={3} sx={paperStyles}>
                    <Grid sx={{display:'flex',flexDirection:'row'}}>
                      <Grid><img src={m3} /></Grid>  
                      <Grid sx={{marginTop:"15px"}}> <strong>Product Manager, Studio</strong></Grid>  
                    </Grid>
                    <Grid >
                        
                        <Grid sx={{ color: '#696969' , display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center',marginInline:'10px'}}>
                            <Grid sx={{display:'flex', flexDirection:'row',justifyContent:'space-evenly', alignItems:'center',}} >
                                <BusinessCenterIcon />
                                <Typography sx={{fontSize:'15px'}}>Invasion</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}}>
                                <PlaceIcon />
                                <Typography sx={{fontSize:'15px'}}>London,UK</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <AccessTimeIcon />
                                <Typography sx={{fontSize:'15px'}}>11 hours ago</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}}>
                                <PaidIcon />
                                <Typography sx={{fontSize:'15px'}}>$35k-$45k</Typography>
                            </Grid>
                        </Grid>&nbsp;&nbsp;
                        <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Grid>
                                <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Full Time</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Private</Button>
                            </Grid>
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Urgent</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Paper>
                </Grid>
              
                {/* main grid 4 */}
  
                <Grid item  xs={12} lg={6} sx={{   display: 'flex', flexDirection: 'row', justifyContent:'space-evenly', }}>
                <Paper elevation={3} sx={paperStyles}>
                    <Grid sx={{display:'flex',flexDirection:'row'}}>
                      <Grid><img src={m4} /> </Grid> 
                       <Grid sx={{marginTop:"15px"}}><strong>Product Manager, Studio</strong></Grid> 
                    </Grid>
                    <Grid >
                       
                    <Grid sx={{ color: '#696969' , display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center',marginInline:'10px'}}>
                            <Grid sx={{display:'flex', flexDirection:'row',justifyContent:'space-evenly', alignItems:'center',}} >
                                <BusinessCenterIcon />
                                <Typography  sx={{fontSize:'15px'}}>Invasion</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}}>
                                <PlaceIcon />
                                <Typography  sx={{fontSize:'15px'}}>London,UK</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <AccessTimeIcon />
                                <Typography  sx={{fontSize:'15px'}}>11 hours ago</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <PaidIcon />
                                <Typography  sx={{fontSize:'15px'}}>$35k-$45k</Typography>
                            </Grid>
                        </Grid>&nbsp;&nbsp;
                        <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Grid>
                                <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Full Time</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Private</Button>
                            </Grid>
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Urgent</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Paper>
                </Grid> 
              
                {/* main grid 5 */}
              
                <Grid  item  xs={12} lg={6} sx={{   display: 'flex', flexDirection: 'row', justifyContent:'space-evenly', }}>
                <Paper elevation={3} sx={paperStyles}>
                    <Grid  sx={{display:'flex',flexDirection:'row'}}>
                       <Grid><img src={m5} /></Grid>    
                       <Grid sx={{marginTop:"15px"}}><strong>Product Manager, Studio</strong></Grid>
                    </Grid>
                    <Grid >
                        
                        <Grid sx={{ color: '#696969' , display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center',marginInline:'10px'}}>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <BusinessCenterIcon />
                                <Typography sx={{fontSize:'15px'}}>Invasion</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <PlaceIcon />
                                <Typography sx={{fontSize:'15px'}}>London,UK</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <AccessTimeIcon />
                                <Typography sx={{fontSize:'15px'}}>11 hours ago</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}}>
                                <PaidIcon />
                                <Typography sx={{fontSize:'15px'}}>$35k-$45k</Typography>
                            </Grid>
                        </Grid>&nbsp;&nbsp;
                        <Grid sx={{display:'flex' ,flexDirection:'row'}}>
                        <Grid>
                                <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Full Time</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Private</Button>
                            </Grid>
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Urgent</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Paper>
                </Grid>
               
                {/* main grid 6  */}
               
               <Grid item  xs={12} lg={6} sx={{   display: 'flex', flexDirection: 'row', justifyContent:'space-evenly', }}>
               <Paper elevation={3} sx={paperStyles}>
                    <Grid sx={{display:'flex',flexDirection:'row'}} >
                       <Grid><img src={m6} /></Grid>   
                     <Grid sx={{marginTop:"15px"}}> <strong>Product Manager, Studio</strong></Grid> 
                    </Grid>
                    <Grid >

                        <Grid sx={{ color: '#696969' , display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center',marginInline:'10px'}}>
                            <Grid sx={{display:'flex' ,flexDirection:'row'}} >
                                <BusinessCenterIcon />
                                <Typography sx={{fontSize:'15px'}}>Invasion</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <PlaceIcon />
                                <Typography sx={{fontSize:'15px'}}>London,UK</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <AccessTimeIcon />
                                <Typography sx={{fontSize:'15px'}}>11 hours ago</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}}>
                                <PaidIcon />
                                <Typography sx={{fontSize:'15px'}}>$35k-$45k</Typography>
                            </Grid>
                        </Grid>&nbsp;&nbsp;
                        <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Grid>
                                <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Full Time</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Private</Button>
                            </Grid>
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Urgent</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                {/* {grid} */}
                <Grid  item  xs={12} lg={6} sx={{   display: 'flex', flexDirection: 'row', justifyContent:'space-evenly', }}>
                <Paper elevation={3} sx={paperStyles}>
                    <Grid  sx={{display:'flex',flexDirection:'row'}}>
                       <Grid><img src={m5} /></Grid>    
                       <Grid sx={{marginTop:"15px"}}><strong>Product Manager, Studio</strong></Grid>
                    </Grid>
                    <Grid >
                        
                        <Grid sx={{ color: '#696969' , display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center',marginInline:'10px'}}>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <BusinessCenterIcon />
                                <Typography sx={{fontSize:'15px'}}>Invasion</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <PlaceIcon />
                                <Typography sx={{fontSize:'15px'}}>London,UK</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <AccessTimeIcon />
                                <Typography sx={{fontSize:'15px'}}>11 hours ago</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}}>
                                <PaidIcon />
                                <Typography sx={{fontSize:'15px'}}>$35k-$45k</Typography>
                            </Grid>
                        </Grid>&nbsp;&nbsp;
                        <Grid sx={{display:'flex' ,flexDirection:'row'}}>
                        <Grid>
                                <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Full Time</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Private</Button>
                            </Grid>
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Urgent</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Paper>
                </Grid>
         {/* {grid} */}
         <Grid  item  xs={12} lg={6} sx={{   display: 'flex', flexDirection: 'row', justifyContent:'space-evenly', }}>
                <Paper elevation={3} sx={paperStyles}>
                    <Grid  sx={{display:'flex',flexDirection:'row'}}>
                       <Grid><img src={m5} /></Grid>    
                       <Grid sx={{marginTop:"15px"}}><strong>Product Manager, Studio</strong></Grid>
                    </Grid>
                    <Grid >
                        
                        <Grid sx={{ color: '#696969' , display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center',marginInline:'10px'}}>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <BusinessCenterIcon />
                                <Typography sx={{fontSize:'15px'}}>Invasion</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <PlaceIcon />
                                <Typography sx={{fontSize:'15px'}}>London,UK</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <AccessTimeIcon />
                                <Typography sx={{fontSize:'15px'}}>11 hours ago</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}}>
                                <PaidIcon />
                                <Typography sx={{fontSize:'15px'}}>$35k-$45k</Typography>
                            </Grid>
                        </Grid>&nbsp;&nbsp;
                        <Grid sx={{display:'flex' ,flexDirection:'row'}}>
                        <Grid>
                                <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Full Time</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Private</Button>
                            </Grid>
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Urgent</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Paper>
                </Grid>
                {/* {grid} */}
                <Grid  item  xs={12} lg={6} sx={{   display: 'flex', flexDirection: 'row', justifyContent:'space-evenly', }}>
                <Paper elevation={3} sx={paperStyles}>
                    <Grid  sx={{display:'flex',flexDirection:'row'}}>
                       <Grid><img src={m5} /></Grid>    
                       <Grid sx={{marginTop:"15px"}}><strong>Product Manager, Studio</strong></Grid>
                    </Grid>
                    <Grid >
                        
                        <Grid sx={{ color: '#696969' , display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center',marginInline:'10px'}}>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <BusinessCenterIcon />
                                <Typography sx={{fontSize:'15px'}}>Invasion</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <PlaceIcon />
                                <Typography sx={{fontSize:'15px'}}>London,UK</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <AccessTimeIcon />
                                <Typography sx={{fontSize:'15px'}}>11 hours ago</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}}>
                                <PaidIcon />
                                <Typography sx={{fontSize:'15px'}}>$35k-$45k</Typography>
                            </Grid>
                        </Grid>&nbsp;&nbsp;
                        <Grid sx={{display:'flex' ,flexDirection:'row'}}>
                        <Grid>
                                <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Full Time</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Private</Button>
                            </Grid>
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Urgent</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Paper>
                </Grid>
                {/* {grid} */}
                <Grid  item  xs={12} lg={6} sx={{   display: 'flex', flexDirection: 'row', justifyContent:'space-evenly', }}>
                <Paper elevation={3} sx={paperStyles}>
                    <Grid  sx={{display:'flex',flexDirection:'row'}}>
                       <Grid><img src={m5} /></Grid>    
                       <Grid sx={{marginTop:"15px"}}><strong>Product Manager, Studio</strong></Grid>
                    </Grid>
                    <Grid >
                        
                        <Grid sx={{ color: '#696969' , display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center',marginInline:'10px'}}>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <BusinessCenterIcon />
                                <Typography sx={{fontSize:'15px'}}>Invasion</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <PlaceIcon />
                                <Typography sx={{fontSize:'15px'}}>London,UK</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <AccessTimeIcon />
                                <Typography sx={{fontSize:'15px'}}>11 hours ago</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}}>
                                <PaidIcon />
                                <Typography sx={{fontSize:'15px'}}>$35k-$45k</Typography>
                            </Grid>
                        </Grid>&nbsp;&nbsp;
                        <Grid sx={{display:'flex' ,flexDirection:'row'}}>
                        <Grid>
                                <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Full Time</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Private</Button>
                            </Grid>
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Urgent</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Paper>
                </Grid>
                {/* {grid} */}
                <Grid  item  xs={12} lg={6} sx={{   display: 'flex', flexDirection: 'row', justifyContent:'space-evenly', }}>
                <Paper elevation={3} sx={paperStyles}>
                    <Grid  sx={{display:'flex',flexDirection:'row'}}>
                       <Grid><img src={m5} /></Grid>    
                       <Grid sx={{marginTop:"15px"}}><strong>Product Manager, Studio</strong></Grid>
                    </Grid>
                    <Grid >
                        
                        <Grid sx={{ color: '#696969' , display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center',marginInline:'10px'}}>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <BusinessCenterIcon />
                                <Typography sx={{fontSize:'15px'}}>Invasion</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <PlaceIcon />
                                <Typography sx={{fontSize:'15px'}}>London,UK</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <AccessTimeIcon />
                                <Typography sx={{fontSize:'15px'}}>11 hours ago</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}}>
                                <PaidIcon />
                                <Typography sx={{fontSize:'15px'}}>$35k-$45k</Typography>
                            </Grid>
                        </Grid>&nbsp;&nbsp;
                        <Grid sx={{display:'flex' ,flexDirection:'row'}}>
                        <Grid>
                                <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Full Time</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Private</Button>
                            </Grid>
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Urgent</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Paper>
                </Grid>
                {/* {grid} */}
                <Grid  item  xs={12} lg={6} sx={{   display: 'flex', flexDirection: 'row', justifyContent:'space-evenly', }}>
                <Paper elevation={3} sx={paperStyles}>
                    <Grid  sx={{display:'flex',flexDirection:'row'}}>
                       <Grid><img src={m5} /></Grid>    
                       <Grid sx={{marginTop:"15px"}}><strong>Product Manager, Studio</strong></Grid>
                    </Grid>
                    <Grid >
                        
                        <Grid sx={{ color: '#696969' , display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center',marginInline:'10px'}}>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <BusinessCenterIcon />
                                <Typography sx={{fontSize:'15px'}}>Invasion</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <PlaceIcon />
                                <Typography sx={{fontSize:'15px'}}>London,UK</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}} >
                                <AccessTimeIcon />
                                <Typography sx={{fontSize:'15px'}}>11 hours ago</Typography>
                            </Grid>
                            <Grid sx={{display:'flex' ,flexDirection:'row',marginLeft:'10px'}}>
                                <PaidIcon />
                                <Typography sx={{fontSize:'15px'}}>$35k-$45k</Typography>
                            </Grid>
                        </Grid>&nbsp;&nbsp;
                        <Grid sx={{display:'flex' ,flexDirection:'row'}}>
                        <Grid>
                                <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Full Time</Button>
                            </Grid>&nbsp;&nbsp;
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Private</Button>
                            </Grid>
                            <Grid>
                                <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Urgent</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default FeaturedJobCategory