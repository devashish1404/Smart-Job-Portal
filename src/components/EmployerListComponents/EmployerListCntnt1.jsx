// // import { Box, Button, Container, Grid, Slider, TextField, Typography } from '@mui/material'
// // import React from 'react'
// // // import m1 from '../../assets/m1.png'
// // import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// // import PlaceIcon from '@mui/icons-material/Place';
// // import udemy from '../../assets/images/udemy.png'
// // import stripe from '../../assets/images/Stripe.png'
// // import dropbox from '../../assets/images/Dropbox.png'
// // import figmaimg from '../../assets/images/figma.png'

// // function valuetext(value) {
// //     return `${value}°C`;
// // }

// // const EmployerListCntnt1 = () => {
// //     const [value, setValue] = React.useState([20, 37]);

// //     const handleChange = (event, newValue) => {
// //         setValue(newValue);
// //     };
// //     return (
// //         <div>
// //             <Box
// //                 sx={{
// //                     width: '100%',
// //                     height: 250,
// //                     backgroundColor: '#E2EAF8',
// //                     textAlign:'center',
                   
// //                 }}>
// //                     <Grid >
// //                         <Typography variant='h6'> Companies</Typography>
// //                         <Typography variant='body2'> Home/Companies</Typography>
// //                     </Grid>
// //                 </Box>
// //             <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
// //                 <Grid width={{ xs: '100%', md: '25%' }} sx={{ display: { xs: 'none', sm: 'block', md: 'block', lg: 'block' } }}>
// //                     {/* Sidebar By Sudhir */}
// //                     <Grid border='1px solid black' justifyContent='center' textAlign='center'>
// //                         <Typography>
// //                             Search by keywords
// //                         </Typography>
// //                         <TextField>
// //                             Job title, keywords or company
// //                         </TextField>
// //                         <Typography>
// //                             Location
// //                         </Typography>
// //                         <Slider
// //                             sx={{ width: '250px' }}
// //                             getAriaLabel={() => 'Temperature range'}
// //                             value={value}
// //                             onChange={handleChange}
// //                             valueLabelDisplay="auto"
// //                             getAriaValueText={valuetext}
// //                         />
// //                         <TextField>
// //                             Job title, keywords or company
// //                         </TextField>
// //                         <Typography>
// //                             category
// //                         </Typography>
// //                         <TextField>
// //                             Job title, keywords or company
// //                         </TextField>
// //                         <Slider
// //                             sx={{ width: '250px' }}
// //                             getAriaLabel={() => 'Temperature range'}
// //                             value={value}
// //                             onChange={handleChange}
// //                             valueLabelDisplay="auto"
// //                             getAriaValueText={valuetext}
// //                         />
// //                         <Typography>
// //                             Foundation Date
// //                         </Typography>
// //                     </Grid>
// //                 </Grid>&nbsp;&nbsp;&nbsp;&nbsp;


// //                 <Grid width={{ xs: '100%', md: '65vw' }} sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'block' } }}>
// //                     {/* Main Content By Sudhir */}
// //                     <Grid border='1px solid gray'>
// //                         <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
// //                             <Grid marginTop='15%' marginInline='5%'>
// //                                 <img src={udemy} />
// //                             </Grid>
// //                             <Grid marginTop='15%' >
// //                                 <Grid sx={{ color: '#202124' }}>
// //                                     <strong>Software Engineer</strong>
// //                                 </Grid>
// //                                 <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
// //                                     <Grid display='flex' flexDirection='row' >
// //                                         <BusinessCenterIcon />
// //                                         <Typography>Invasion</Typography>
// //                                     </Grid>
// //                                     <Grid display='flex' flexDirection='row' >
// //                                         <PlaceIcon />
// //                                         <Typography>London,UK</Typography>
// //                                     </Grid>
// //                                 </Grid>&nbsp;
// //                                 <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
// //                                     <Grid>
// //                                         <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' ,fontSize:'10px'}}>Freelancer</Button>
// //                                     </Grid>&nbsp;&nbsp;
// //                                     <Grid>
// //                                         <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' ,fontSize:'10px'}}>Freelancer</Button>
// //                                     </Grid>
// //                                 </Grid>
// //                             </Grid>
// //                         </Grid>
// //                     </Grid>
// //                     <Grid border='1px solid gray'>
// //                         <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
// //                             <Grid marginTop='15%' marginInline='5%'>
// //                                 <img src={stripe} />
// //                             </Grid>
// //                             <Grid marginTop='15%' >
// //                                 <Grid sx={{ color: '#202124' }}>
// //                                     <strong>Software Engineer</strong>
// //                                 </Grid>
// //                                 <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
// //                                     <Grid display='flex' flexDirection='row' >
// //                                         <BusinessCenterIcon />
// //                                         <Typography>Invasion</Typography>
// //                                     </Grid>
// //                                     <Grid display='flex' flexDirection='row' >
// //                                         <PlaceIcon />
// //                                         <Typography>London,UK</Typography>
// //                                     </Grid>
// //                                 </Grid>&nbsp;
// //                                 <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
// //                                     <Grid>
// //                                         <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'10px' }}>Freelancer</Button>
// //                                     </Grid>&nbsp;&nbsp;
// //                                     <Grid>
// //                                         <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px',fontSize:'10px' }}>Freelancer</Button>
// //                                     </Grid>
// //                                 </Grid>
// //                             </Grid>
// //                         </Grid>
// //                     </Grid>
// //                     <Grid border='1px solid gray'>
// //                         <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
// //                             <Grid marginTop='15%' marginInline='5%'>
// //                                 <img src={dropbox} />
// //                             </Grid>
// //                             <Grid marginTop='15%' >
// //                                 <Grid sx={{ color: '#202124' }}>
// //                                     <strong>Software Engineer</strong>
// //                                 </Grid>
// //                                 <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
// //                                     <Grid display='flex' flexDirection='row' >
// //                                         <BusinessCenterIcon />
// //                                         <Typography>Invasion</Typography>
// //                                     </Grid>
// //                                     <Grid display='flex' flexDirection='row' >
// //                                         <PlaceIcon />
// //                                         <Typography>London,UK</Typography>
// //                                     </Grid>
// //                                 </Grid>&nbsp;
// //                                 <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
// //                                     <Grid>
// //                                         <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' ,fontSize:'10px'}}>Freelancer</Button>
// //                                     </Grid>&nbsp;&nbsp;
// //                                     <Grid>
// //                                         <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' ,fontSize:'10px'}}>Freelancer</Button>
// //                                     </Grid>
// //                                 </Grid>
// //                             </Grid>
// //                         </Grid>
// //                     </Grid>
// //                     <Grid border='1px solid gray'>
// //                         <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
// //                             <Grid marginTop='15%' marginInline='5%'>
// //                                 <img src={figmaimg} />
// //                             </Grid>
// //                             <Grid marginTop='15%' >
// //                                 <Grid sx={{ color: '#202124' }}>
// //                                     <strong>Software Engineer</strong>
// //                                 </Grid>
// //                                 <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
// //                                     <Grid display='flex' flexDirection='row' >
// //                                         <BusinessCenterIcon />
// //                                         <Typography>Invasion</Typography>
// //                                     </Grid>
// //                                     <Grid display='flex' flexDirection='row' >
// //                                         <PlaceIcon />
// //                                         <Typography>London,UK</Typography>
// //                                     </Grid>
// //                                 </Grid>&nbsp;
// //                                 <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
// //                                     <Grid>
// //                                         <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'10px' }}>Freelancer</Button>
// //                                     </Grid>&nbsp;&nbsp;
// //                                     <Grid>
// //                                         <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' ,fontSize:'10px'}}>Freelancer</Button>
// //                                     </Grid>
// //                                 </Grid>
// //                             </Grid>
// //                         </Grid>
// //                     </Grid>
// //                     <Grid border='1px solid gray'>
// //                         <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
// //                             <Grid marginTop='15%' marginInline='5%'>
// //                                 <img src={udemy} />
// //                             </Grid>
// //                             <Grid marginTop='15%' >
// //                                 <Grid sx={{ color: '#202124' }}>
// //                                     <strong>Software Engineer</strong>
// //                                 </Grid>
// //                                 <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
// //                                     <Grid display='flex' flexDirection='row' >
// //                                         <BusinessCenterIcon />
// //                                         <Typography>Invasion</Typography>
// //                                     </Grid>
// //                                     <Grid display='flex' flexDirection='row' >
// //                                         <PlaceIcon />
// //                                         <Typography>London,UK</Typography>
// //                                     </Grid>
// //                                 </Grid>&nbsp;
// //                                 <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
// //                                     <Grid>
// //                                         <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'10px' }}>Freelancer</Button>
// //                                     </Grid>&nbsp;&nbsp;
// //                                     <Grid>
// //                                         <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px',fontSize:'10px' }}>Freelancer</Button>
// //                                     </Grid>
// //                                 </Grid>
// //                             </Grid>
// //                         </Grid>
// //                     </Grid>
// //                     <Grid border='1px solid gray'>
// //                         <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
// //                             <Grid marginTop='15%' marginInline='5%'>
// //                                 <img src={stripe} />
// //                             </Grid>
// //                             <Grid marginTop='15%' >
// //                                 <Grid sx={{ color: '#202124' }}>
// //                                     <strong>Software Engineer</strong>
// //                                 </Grid>
// //                                 <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
// //                                     <Grid display='flex' flexDirection='row' >
// //                                         <BusinessCenterIcon />
// //                                         <Typography>Invasion</Typography>
// //                                     </Grid>
// //                                     <Grid display='flex' flexDirection='row' >
// //                                         <PlaceIcon />
// //                                         <Typography>London,UK</Typography>
// //                                     </Grid>
// //                                 </Grid>&nbsp;
// //                                 <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
// //                                     <Grid>
// //                                         <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' ,fontSize:'10px'}}>Freelancer</Button>
// //                                     </Grid>&nbsp;&nbsp;
// //                                     <Grid>
// //                                         <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Freelancer</Button>
// //                                     </Grid>
// //                                 </Grid>
// //                             </Grid>
// //                         </Grid>
// //                     </Grid>
// //                     <Grid border='1px solid gray'>
// //                         <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' ,fontSize:'10px'}}>
// //                             <Grid marginTop='15%' marginInline='5%'>
// //                                 <img src={dropbox} />
// //                             </Grid>
// //                             <Grid marginTop='15%' >
// //                                 <Grid sx={{ color: '#202124' }}>
// //                                     <strong>Software Engineer</strong>
// //                                 </Grid>
// //                                 <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
// //                                     <Grid display='flex' flexDirection='row' >
// //                                         <BusinessCenterIcon />
// //                                         <Typography>Invasion</Typography>
// //                                     </Grid>
// //                                     <Grid display='flex' flexDirection='row' >
// //                                         <PlaceIcon />
// //                                         <Typography>London,UK</Typography>
// //                                     </Grid>
// //                                 </Grid>&nbsp;
// //                                 <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
// //                                     <Grid>
// //                                         <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' ,fontSize:'10px'}}>Freelancer</Button>
// //                                     </Grid>&nbsp;&nbsp;
// //                                     <Grid>
// //                                         <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' ,fontSize:'10px'}}>Freelancer</Button>
// //                                     </Grid>
// //                                 </Grid>
// //                             </Grid>
// //                         </Grid>
// //                     </Grid>
// //                     <Grid border='1px solid gray'>
// //                         <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
// //                             <Grid marginTop='15%' marginInline='5%'>
// //                                 <img src={figmaimg} />
// //                             </Grid>
// //                             <Grid marginTop='15%' >
// //                                 <Grid sx={{ color: '#202124' }}>
// //                                     <strong>Software Engineer</strong>
// //                                 </Grid>
// //                                 <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
// //                                     <Grid display='flex' flexDirection='row' >
// //                                         <BusinessCenterIcon />
// //                                         <Typography>Invasion</Typography>
// //                                     </Grid>
// //                                     <Grid display='flex' flexDirection='row' >
// //                                         <PlaceIcon />
// //                                         <Typography>London,UK</Typography>
// //                                     </Grid>
// //                                 </Grid>&nbsp;
// //                                 <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
// //                                     <Grid>
// //                                         <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' ,fontSize:'10px'}}>Freelancer</Button>
// //                                     </Grid>&nbsp;&nbsp;
// //                                     <Grid>
// //                                         <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' ,fontSize:'10px'}}>Freelancer</Button>
// //                                     </Grid>
// //                                 </Grid>
// //                             </Grid>
// //                         </Grid>
// //                     </Grid>
// //                 </Grid>
// //             </Box>
// //                 {/* Add things left in the page 1. ads on the bottom of the sidebar */}
// //         </div>
// //     )
// // }

// // export default EmployerListCntnt1



// import { Box, Button, Container, Grid, Slider, TextField, Typography ,styled,Paper} from '@mui/material'
// import React from 'react'
// // import m1 from '../../assets/m1.png'
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import PlaceIcon from '@mui/icons-material/Place';
// import udemy from '../../assets/images/udemy.png'
// import stripe from '../../assets/images/Stripe.png'
// import dropbox from '../../assets/images/Dropbox.png'
// import figmaimg from '../../assets/images/figma.png'

// function valuetext(value) {
//     return `${value}°C`;
// }

// const EmployerListCntnt1 = () => {
//     const [value, setValue] = React.useState([20, 37]);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     const Item = styled(Paper)(({ theme }) => ({
//         backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//         ...theme.typography.body2,
//         padding: theme.spacing(1),
//         textAlign: "center",
//         color: theme.palette.text.secondary,
//       }));
//     return (
//         <div>
//             <Box sx={{}}>
//                     <Box sx={{height: 250,backgroundColor: '#E2EAF8',textAlign:'center'}}>
//                         <Typography variant='h6'> Companies</Typography>
//                         <Typography variant='body2'> Home/Companies</Typography>
//                     </Box>
//             </Box>
//             {/* <Box sx={{display:'flex'}}> 
//                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
//                   <Box width={{ xs: '100%', md: '25%' }} sx={{ display: { xs: 'none', sm: 'block', md: 'block', lg: 'block' } }}>
//                     <Box border='1px solid gray' justifyContent='center' textAlign='center'>
//                         <Typography>
//                             Search by keywords
//                         </Typography>
//                         <TextField>
//                             Job title, keywords or company
//                         </TextField>
//                         <Typography>
//                             Location
//                         </Typography>
//                         <Slider
//                             sx={{ width: '250px' }}
//                             getAriaLabel={() => 'Temperature range'}
//                             value={value}
//                             onChange={handleChange}
//                             valueLabelDisplay="auto"
//                             getAriaValueText={valuetext}
//                         />
//                         <TextField>
//                             Job title, keywords or company
//                         </TextField>
//                         <Typography>
//                             category
//                         </Typography>
//                         <TextField>
//                             Job title, keywords or company
//                         </TextField>
//                         <Slider
//                             sx={{ width: '250px' }}
//                             getAriaLabel={() => 'Temperature range'}
//                             value={value}
//                             onChange={handleChange}
//                             valueLabelDisplay="auto"
//                             getAriaValueText={valuetext}
//                         />
//                         <Typography>
//                             Foundation Date
//                         </Typography>
//                     </Box>
//                 </Box>




                
//             </Box>
//             <Box width={{ xs: '100%', md: '70%' }} sx={{ display: 'flex'}}>
//                 Hello
//             </Box>
//           </Box> */}

//           <Box sx={{display:{xs:'block',md:'flex'},marginInline:'5%'}}>
//             <Box sx={{width:{xs:'80%',md:'32%'},display:{xs:'none',md:'block'}}}>
               
//             <Box border='1px solid gray' justifyContent='center' textAlign='center'>
//                         <Typography>
//                             Search by keywords
//                         </Typography>
//                         <TextField>
//                             Job title, keywords or company
//                         </TextField>
//                         <Typography>
//                             Location
//                         </Typography>
//                         <Slider
//                             sx={{ width: '250px' }}
//                             getAriaLabel={() => 'Temperature range'}
//                             value={value}
//                             onChange={handleChange}
//                             valueLabelDisplay="auto"
//                             getAriaValueText={valuetext}
//                         />
//                         <TextField>
//                             Job title, keywords or company
//                         </TextField>
//                         <Typography>
//                             category
//                         </Typography>
//                         <TextField>
//                             Job title, keywords or company
//                         </TextField>
//                         <Slider
//                             sx={{ width: '250px' }}
//                             getAriaLabel={() => 'Temperature range'}
//                             value={value}
//                             onChange={handleChange}
//                             valueLabelDisplay="auto"
//                             getAriaValueText={valuetext}
//                         />
//                         <Typography>
//                             Foundation Date
//                         </Typography>
//                     </Box>
//             </Box>


//             <Box sx={{width:{xs:'80%',md:'60%'}}}>
                
//             <Grid container spacing={2} sx={{marginTop:'3%',marginInline:'5%'}}>
//           <Grid item xs={12}  >
//             <Item >
//               <Box sx={{ display:{xs:'block',md:'flex'},marginInline:'4%' }}>
//                 <Box
//                   sx={{
//                     height: "50px",
//                     width: "50px",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderRadius: "10%",
//                     marginTop:{xs:'50px',md:'20px'}
//                   }}
//                 >
//                   <img src={udemy} alt="react logo" />
//                 </Box>
                
//                 <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"30px"}}}>
//                         <Typography sx={{color:'black'}} >
//                             <strong>Udemy</strong>
//                         </Typography>
//                         <Grid  sx={{display:{xs:'block',sm:'flex'},marginTop:'10px'}} >
//                            <Grid  display='flex' flexDirection='row' sx={{marginLeft:{xs:"0px",md:"10px"}}}  >
//                                 <BusinessCenterIcon />
//                                 <Typography >Segment</Typography>
//                             </Grid>
                            
//                             <Grid display='flex' flexDirection='row'  >
//                                 <PlaceIcon />
//                                 <Typography >London,UK</Typography>
//                             </Grid>
                            
//                         </Grid>

                        

//                         <Grid sx={{ display: 'flex', flexDirection: 'row' ,marginTop:'10px',marginBottom:'15px'}}>
//                             <Grid>
//                                 <Button sx={{ color: 'blue', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:{xs:'7px',md:'11px' }}}>Full Time</Button>
//                             </Grid>&nbsp;&nbsp;
//                             <Grid>
//                                 <Button sx={{ color: 'green', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:{xs:'7px',md:'11px' } }}>Private</Button>
//                             </Grid>&nbsp;&nbsp;
//                             <Grid>
//                                 <Button sx={{ color: 'red', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:{xs:'7px',md:'11px' } }}>Urgent</Button>
//                             </Grid>&nbsp;&nbsp;
//                         </Grid>
                        

                        
//                 </Box>
//               </Box>
//             </Item>
//           </Grid>



//           <Grid item xs={12}  >
//             <Item>
//             <Box sx={{ display:{xs:'block',md:'flex'},marginInline:'4%' }}>
//                 <Box
//                   sx={{
//                     height: "50px",
//                     width: "57px",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderRadius: "10%",
//                     marginTop:{xs:'35px',md:'20px'}
//                   }}
//                 >
//                   <img src={stripe} alt="react logo" />
//                 </Box>
                
//                 <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
//                         <Typography sx={{color:'black'}} >
//                             <strong>Stripe</strong>
//                         </Typography>
//                         <Grid sx={{display:{xs:'block',sm:'flex'},marginTop:'10px'}} >
//                         <Grid display='flex' flexDirection='row' sx={{marginLeft:{xs:"0px",md:"10px"}}} >
//                                 <BusinessCenterIcon />
//                                 <Typography >Segment</Typography>
//                             </Grid>
                            
//                             <Grid display='flex' flexDirection='row'  >
//                                 <PlaceIcon />
//                                 <Typography >London,UK</Typography>
//                             </Grid>
                            
//                         </Grid>

                        

//                         <Grid sx={{ display: 'flex', flexDirection: 'row' ,marginTop:'10px',marginBottom:'15px'}}>
//                             <Grid>
//                                 <Button sx={{ color: 'blue', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Freelancer</Button>
//                             </Grid>&nbsp;&nbsp;
//                             <Grid>
//                                 <Button sx={{ color: 'green', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Private</Button>
//                             </Grid>&nbsp;&nbsp;
//                             <Grid>
//                                 <Button sx={{ color: 'red', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Urgent</Button>
//                             </Grid>&nbsp;&nbsp;
//                         </Grid>
                        

                        
//                 </Box>
//               </Box>
//             </Item>
//           </Grid>




//           <Grid item xs={12} >
//             <Item>
//             <Box sx={{ display:{xs:'block',md:'flex'},marginInline:'4%' }}>
//                 <Box
//                   sx={{
//                     height: "50px",
//                     width: "57px",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderRadius: "10%",
//                     marginTop:{xs:'35px',md:'20px'}
//                   }}
//                 >
//                   <img src={dropbox} alt="react logo" />
//                 </Box>
                
//                 <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
//                         <Typography sx={{color:'black'}} >
//                             <strong>Dropbox</strong>
//                         </Typography>
//                         <Grid sx={{display:{xs:'block',sm:'flex'},marginTop:'10px'}} >
//                         <Grid display='flex' flexDirection='row' sx={{marginLeft:{xs:"0px",md:"10px"}}} >
//                                 <BusinessCenterIcon />
//                                 <Typography >Segment</Typography>
//                             </Grid>
                            
//                             <Grid display='flex' flexDirection='row'  >
//                                 <PlaceIcon />
//                                 <Typography >London,UK</Typography>
//                             </Grid>
                           
//                         </Grid>

                        

//                         <Grid sx={{ display: 'flex', flexDirection: 'row' ,marginTop:'10px',marginBottom:'15px'}}>
//                             <Grid>
//                                 <Button sx={{ color: 'blue', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Part Time</Button>
//                             </Grid>&nbsp;&nbsp;
//                             <Grid>
//                                 <Button sx={{ color: 'green', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Private</Button>
//                             </Grid>&nbsp;&nbsp;
//                             <Grid>
//                                 <Button sx={{ color: 'red', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Urgent</Button>
//                             </Grid>&nbsp;&nbsp;
//                         </Grid>
                        

                        
//                 </Box>
//               </Box>
//             </Item>
//           </Grid>

//           <Grid item xs={12}  >
//             <Item>
//             <Box sx={{ display:{xs:'block',md:'flex'},marginInline:'4%' }}>
//                 <Box
//                   sx={{
//                     height: "50px",
//                     width: "57px",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderRadius: "10%",
//                     marginTop:{xs:'35px',md:'20px'}
//                   }}
//                 >
//                   <img src={figmaimg} alt="react logo" />
//                 </Box>
                
//                 <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
//                         <Typography sx={{color:'black'}} >
//                             <strong>Figma</strong>
//                         </Typography>
//                         <Grid sx={{display:{xs:'block',sm:'flex'},marginTop:'10px'}} >
//                         <Grid display='flex' flexDirection='row' sx={{marginLeft:{xs:"0px",md:"10px"}}} >
//                                 <BusinessCenterIcon />
//                                 <Typography >Segment</Typography>
//                             </Grid>
                            
//                             <Grid display='flex' flexDirection='row'  >
//                                 <PlaceIcon />
//                                 <Typography >London,UK</Typography>
//                             </Grid>
                           
//                         </Grid>

                        

//                         <Grid sx={{ display: 'flex', flexDirection: 'row' ,marginTop:'10px',marginBottom:'15px'}}>
//                             <Grid>
//                                 <Button sx={{ color: 'blue', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Temporary</Button>
//                             </Grid>&nbsp;&nbsp;
//                             <Grid>
//                                 <Button sx={{ color: 'green', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Private</Button>
//                             </Grid>&nbsp;&nbsp;
//                             <Grid>
//                                 <Button sx={{ color: 'red', backgroundColor: '#1967D226', borderRadius: '24px',fontSize:'11px' }}>Urgent</Button>
//                             </Grid>&nbsp;&nbsp;
//                         </Grid>
                        

                        
//                 </Box>
//               </Box>
//             </Item>
//           </Grid>

          
          



          


          
//         </Grid>

//             </Box>

//           </Box>
                
//         </div>
//     )
// }

// export default EmployerListCntnt1

import { Box, Button, Container, Grid, List, Paper, Slider, TextField, Typography } from '@mui/material'
import React from 'react'
// import m1 from '../../assets/m1.png'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PlaceIcon from '@mui/icons-material/Place';
import udemy from '../../assets/images/udemy.png'
import stripe from '../../assets/images/Stripe.png'
import dropbox from '../../assets/images/Dropbox.png'
import figmaimg from '../../assets/images/figma.png'
import picture from '../../assets/images/ads-bg-4.png'
function valuetext(value) {
    return `${value}°C`;
}

const EmployerListCntnt1 = () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Box
                sx={{
                    width: '100%',
                    height: 250,
                    backgroundColor: '#E2EAF8',
                    textAlign: 'center'
                }}>
                <Grid>
                    <Typography variant='h6'> Companies</Typography>
                    <Typography variant='body2'> Home/Companies</Typography>
                </Grid>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Grid width={{ xs: '100%', md: '30vw' }} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
                    {/* Sidebar By Sudhir */}
                    <Grid border='1px solid black' justifyContent='center' textAlign='center'>
                        <Typography>
                            Search by keywords
                        </Typography>
                        <TextField>
                            Job title, keywords or company
                        </TextField>
                        <Typography>
                            Location
                        </Typography>
                        <Slider
                            sx={{ width: '250px' }}
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                        <TextField>
                            Job title, keywords or company
                        </TextField>
                        <Typography>
                            category
                        </Typography>
                        <TextField>
                            Job title, keywords or company
                        </TextField>
                        <Slider
                            sx={{ width: '250px' }}
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                        <Typography>
                            Foundation Date
                        </Typography>
                    </Grid>
                    <Grid>
                    {/* Made By Vasudha */}
                        <Paper elevation={0} sx={{ backgroundColor: '#e2eaf8', display: 'flex', width: { xs: '100%', md: '100%' }, height: '50%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>


                                <Box>
                                    <List variant="outlined" sx={{ mb: 4, backgroundColor: '#e2eaf8', padding: 2 }}>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                                            Recuriting?
                                        </Typography>
                                        <Typography sx={{ marginBottom: 1, padding: 0, display: 'inline-block' }}>
                                            <p>Advertise your jobs to millions of<br></br> monthly users and search 15.8 <br></br> million CVs in our database.</p>
                                        </Typography>
                                        <Box sx={{ display: 'inline-block' }}>
                                            <img src={picture} alt="Image" />
                                        </Box>

                                    </List>

                                    <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 3, marginRight: 2 }}>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                height: '44px',
                                                width: '100%',
                                                maxWidth: 330,
                                                color: 'white',
                                                backgroundColor: 'blue',
                                                padding: '33px',
                                            }}
                                        >
                                            Start Recruiting Now
                                        </Button>
                                    </Typography>

                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>&nbsp;&nbsp;&nbsp;&nbsp;
                <Grid width={{ xs: '100%', md: '70vw' }} sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'block' } }}>
                    {/* Main Content By Sudhir */}
                    <Grid border='1px solid black'>
                        <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
                            <Grid marginTop='15%' marginInline='5%'>
                                <img src={udemy} />
                            </Grid>
                            <Grid marginTop='15%' >
                                <Grid sx={{ color: '#202124' }}>
                                    <strong>Software Engineer</strong>
                                </Grid>
                                <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
                                    <Grid display='flex' flexDirection='row' >
                                        <BusinessCenterIcon />
                                        <Typography>Invasion</Typography>
                                    </Grid>
                                    <Grid display='flex' flexDirection='row' >
                                        <PlaceIcon />
                                        <Typography>London,UK</Typography>
                                    </Grid>
                                </Grid>&nbsp;
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid>
                                        <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>&nbsp;&nbsp;
                                    <Grid>
                                        <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid border='1px solid black'>
                        <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
                            <Grid marginTop='15%' marginInline='5%'>
                                <img src={stripe} />
                            </Grid>
                            <Grid marginTop='15%' >
                                <Grid sx={{ color: '#202124' }}>
                                    <strong>Software Engineer</strong>
                                </Grid>
                                <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
                                    <Grid display='flex' flexDirection='row' >
                                        <BusinessCenterIcon />
                                        <Typography>Invasion</Typography>
                                    </Grid>
                                    <Grid display='flex' flexDirection='row' >
                                        <PlaceIcon />
                                        <Typography>London,UK</Typography>
                                    </Grid>
                                </Grid>&nbsp;
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid>
                                        <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>&nbsp;&nbsp;
                                    <Grid>
                                        <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid border='1px solid black'>
                        <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
                            <Grid marginTop='15%' marginInline='5%'>
                                <img src={dropbox} />
                            </Grid>
                            <Grid marginTop='15%' >
                                <Grid sx={{ color: '#202124' }}>
                                    <strong>Software Engineer</strong>
                                </Grid>
                                <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
                                    <Grid display='flex' flexDirection='row' >
                                        <BusinessCenterIcon />
                                        <Typography>Invasion</Typography>
                                    </Grid>
                                    <Grid display='flex' flexDirection='row' >
                                        <PlaceIcon />
                                        <Typography>London,UK</Typography>
                                    </Grid>
                                </Grid>&nbsp;
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid>
                                        <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>&nbsp;&nbsp;
                                    <Grid>
                                        <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid border='1px solid black'>
                        <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
                            <Grid marginTop='15%' marginInline='5%'>
                                <img src={figmaimg} />
                            </Grid>
                            <Grid marginTop='15%' >
                                <Grid sx={{ color: '#202124' }}>
                                    <strong>Software Engineer</strong>
                                </Grid>
                                <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
                                    <Grid display='flex' flexDirection='row' >
                                        <BusinessCenterIcon />
                                        <Typography>Invasion</Typography>
                                    </Grid>
                                    <Grid display='flex' flexDirection='row' >
                                        <PlaceIcon />
                                        <Typography>London,UK</Typography>
                                    </Grid>
                                </Grid>&nbsp;
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid>
                                        <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>&nbsp;&nbsp;
                                    <Grid>
                                        <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid border='1px solid black'>
                        <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
                            <Grid marginTop='15%' marginInline='5%'>
                                <img src={udemy} />
                            </Grid>
                            <Grid marginTop='15%' >
                                <Grid sx={{ color: '#202124' }}>
                                    <strong>Software Engineer</strong>
                                </Grid>
                                <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
                                    <Grid display='flex' flexDirection='row' >
                                        <BusinessCenterIcon />
                                        <Typography>Invasion</Typography>
                                    </Grid>
                                    <Grid display='flex' flexDirection='row' >
                                        <PlaceIcon />
                                        <Typography>London,UK</Typography>
                                    </Grid>
                                </Grid>&nbsp;
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid>
                                        <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>&nbsp;&nbsp;
                                    <Grid>
                                        <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid border='1px solid black'>
                        <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
                            <Grid marginTop='15%' marginInline='5%'>
                                <img src={stripe} />
                            </Grid>
                            <Grid marginTop='15%' >
                                <Grid sx={{ color: '#202124' }}>
                                    <strong>Software Engineer</strong>
                                </Grid>
                                <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
                                    <Grid display='flex' flexDirection='row' >
                                        <BusinessCenterIcon />
                                        <Typography>Invasion</Typography>
                                    </Grid>
                                    <Grid display='flex' flexDirection='row' >
                                        <PlaceIcon />
                                        <Typography>London,UK</Typography>
                                    </Grid>
                                </Grid>&nbsp;
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid>
                                        <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>&nbsp;&nbsp;
                                    <Grid>
                                        <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid border='1px solid black'>
                        <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
                            <Grid marginTop='15%' marginInline='5%'>
                                <img src={dropbox} />
                            </Grid>
                            <Grid marginTop='15%' >
                                <Grid sx={{ color: '#202124' }}>
                                    <strong>Software Engineer</strong>
                                </Grid>
                                <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
                                    <Grid display='flex' flexDirection='row' >
                                        <BusinessCenterIcon />
                                        <Typography>Invasion</Typography>
                                    </Grid>
                                    <Grid display='flex' flexDirection='row' >
                                        <PlaceIcon />
                                        <Typography>London,UK</Typography>
                                    </Grid>
                                </Grid>&nbsp;
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid>
                                        <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>&nbsp;&nbsp;
                                    <Grid>
                                        <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid border='1px solid black'>
                        <Grid item elevation={3} sx={{ width: '407px', height: '180px', display: 'flex', flexDirection: 'row' }}>
                            <Grid marginTop='15%' marginInline='5%'>
                                <img src={figmaimg} />
                            </Grid>
                            <Grid marginTop='15%' >
                                <Grid sx={{ color: '#202124' }}>
                                    <strong>Software Engineer</strong>
                                </Grid>
                                <Grid display='flex' flexDirection='row' justifyContent='space-evenly' sx={{ color: '#696969' }}>
                                    <Grid display='flex' flexDirection='row' >
                                        <BusinessCenterIcon />
                                        <Typography>Invasion</Typography>
                                    </Grid>
                                    <Grid display='flex' flexDirection='row' >
                                        <PlaceIcon />
                                        <Typography>London,UK</Typography>
                                    </Grid>
                                </Grid>&nbsp;
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid>
                                        <Button sx={{ color: '#1967D2', backgroundColor: '#1967D226', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>&nbsp;&nbsp;
                                    <Grid>
                                        <Button sx={{ color: '#F9AB00', backgroundColor: '#F9AB0026', borderRadius: '24px' }}>Freelancer</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            {/* Add things left in the page 1. ads on the bottom of the sidebar */}
        </div>
    )
}

export default EmployerListCntnt1