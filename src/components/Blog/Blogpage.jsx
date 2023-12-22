import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Button, CardActionArea, CardActions, Container, Pagination, Paper, TextField, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';
import image from '../../assets/images/1900x600.jpeg';
import Footer from '../Footer';
import UpdateHeader from '../Header/UpdateHeader';








const Blogpage = () => {
    return (
        <Container maxWidth="xl">
            <UpdateHeader />

                 <Paper
                    sx={{
                        position:'relative',
                        width: {xs:'600px',sm:'800px',md:'100%'},
                        height: 250,
                        backgroundColor: '#E2EAF8',
                        textAlign: 'center',
                        display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center',
                    }}>
                  
                        <Typography variant='h6'> Blog</Typography>
                        <Typography variant='body2'> Home/Blog</Typography>
                    
                </Paper> 
          


     {/****left box ***/}

    <Box sx={{display:'flex', flexDirection:{xs:'column',md:'row'} }}>
        {/**main box ***/}
            <Box width={'70%'}>
     {/**b1 ***/}
    <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'}, justifyContent:'flex-end',alignItems:'center', marginTop:'10px',                                                                                                   }}>
    <Card sx={{ width:'100%', }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width={'100%'}
          height="100%"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Activity
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Activity are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Read more
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ width:'100%', marginInline:'10px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width={'100%'}
          height="100%"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Activity
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Activity are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Read more
        </Button>
      </CardActions>
    </Card>
    </Box>

    {/***box2 ****/}
    <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'}, justifyContent:'flex-end',alignItems:'center',marginTop:'10px'}}>
    <Card sx={{ width:{xs:'100%',md:'100%'} }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width={'100%'}
          height="100%"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Activity
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Activitys are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Read more
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ width:'100%', marginInline:'10px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width={'100%'}
          height="100%"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Activity
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Activitys are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Read more
        </Button>
      </CardActions>
    </Card>
    </Box>

    {/****box3 **/}
    <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'}, justifyContent:'flex-end',alignItems:'center', marginTop:'10px'}}>
    <Card sx={{ width:'100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width={'100%'}
          height="100%"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Activity
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Activitys are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Read more
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ width:'100%', marginInline:'10px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width={'100%'}
          height="100%"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Activity
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Activitys are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Read more
        </Button>
      </CardActions>
    </Card>
    </Box>
    <Box justifyContent='center' mt={2}>
        <Pagination count={5} />
     </Box>
    </Box>



{/****right box **/}
    <Box width={'30%'} marginTop={'10px'}>
        <Box sx={{width:'100%'}}>
       
        <Paper elevation={1} sx={{display:'flex',flexDirection:'column',width:{xs:'500px',sm:'800px',md:'100%'}, backgroundColor:'#E2EAF8',}}>

            {/* 1st */}
            <Box sx={{display:'flex',flexDirection:'row',}}>
            <Box>
            <CalendarTodayOutlinedIcon sx={{color:'blue', marginInline:'20px'}} />
            </Box>
            <Box sx={{display:'flex', flexDirection:'column',marginInline:'20px'}}>
                <Typography variant='h7' fontWeight={'bold'} sx={{color:'black'}}>Experience:</Typography>
                <Typography sx={{color:'black',}}>0-2 Years</Typography>
            </Box>
            </Box>

            {/*2nd ***/}
            <Box sx={{display:'flex',flexDirection:'row', marginTop:'20px'}}>
            <Box>
            <PersonPinCircleOutlinedIcon  sx={{color:'blue', marginInline:'20px'}} />
            </Box>
            <Box  sx={{display:'flex', flexDirection:'column',marginInline:'20px'}}>
                <Typography variant='h7' fontWeight={'bold'} sx={{color:'black'}}>Age:</Typography>
                <Typography align='center' sx={{color:'black', marginTop:'5px'}}>28-33 Years</Typography>
            </Box>
            </Box>

            {/***3rd */}

            <Box sx={{display:'flex',flexDirection:'row', marginTop:'20px'}}>
            <Box >
            <AccountBalanceWalletOutlinedIcon sx={{color:'blue',marginInline:'20px'}} />
            </Box>
            <Box  sx={{display:'flex', flexDirection:'column',marginInline:'20px'}}>
                <Typography variant='h7' fontWeight={'bold'} sx={{color:'black'}}>Current Salary:</Typography>
                <Typography sx={{color:'black', marginTop:'5px'}}>11k - 15k</Typography>
            </Box>
            </Box>

            {/**4th **/}
            <Box sx={{display:'flex',flexDirection:'row', marginTop:'20px'}}>
            <Box>
            <PaymentsOutlinedIcon sx={{color:'blue', marginInline:'20px'}} />
            </Box>
            <Box  sx={{display:'flex', flexDirection:'column',marginInline:'20px'}}>
                <Typography variant='h7' fontWeight={'bold'} sx={{color:'black'}}>Expected Salary:</Typography>
                <Typography sx={{color:'black', marginTop:'5px'}}>26k-30k</Typography>
            </Box>
            </Box>

             {/**5th ** */}
             <Box sx={{display:'flex',flexDirection:'row', marginTop:'20px'}}>
            <Box>
            <SchoolOutlinedIcon sx={{color:'blue',marginInline:'20px'}} />
            </Box>
            <Box  sx={{display:'flex', flexDirection:'column',marginInline:'20px'}}>
                <Typography variant='h7' fontWeight={'bold'} sx={{color:'black'}}>Gender:</Typography>
                <Typography sx={{color:'black',marginInline:'5px'}}>Female</Typography>
            </Box>
            </Box>

            {/***6th */}
            <Box sx={{display:'flex',flexDirection:'row', marginTop:'20px'}}>
            <Box>
            <PersonPinOutlinedIcon  sx={{color:'blue', marginInline:'20px'}} />
            </Box>
            <Box  sx={{display:'flex', flexDirection:'column',marginInline:'20px'}}>
                <Typography variant='h7' fontWeight={'bold'} sx={{color:'black', }}>Languages:</Typography>
                <Typography sx={{color:'black', marginTop:'5px'}}>English, Spanish, German</Typography>
            </Box>
            </Box>

            {/**7th **/}

            <Box sx={{display:'flex',flexDirection:'row', marginTop:'20px'}}>
            <Box>
            <LanguageOutlinedIcon sx={{color:'blue', marginInline:'20px'}} />
            </Box>
            <Box  sx={{display:'flex', flexDirection:'column',marginInline:'20px'}}>
                <Typography variant='h7' fontWeight={'bold'} sx={{color:'black'}}>Education Level:</Typography>
                <Typography sx={{color:'black', marginTop:'5px'}}>Master Degree</Typography>
            </Box>
            </Box>

     </Paper>
    

    {/***Social media */}
    <Paper elevation={1} sx={{ backgroundColor:'#E2EAF8',width:{xs:'500px',sm:'800px',md:'100%'}, height:'90px', marginTop:'10px'}}>
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{marginTop:'20px'}}>
            <Typography variant='h7' fontWeight={'bold'} sx={{color:'black'}}>Social Media </Typography>
            </Box>
            <Box sx={{ display: 'block', marginInline: '10px', marginTop: '20px' }}>
            <FacebookOutlinedIcon sx={{
                color:'gray'
            }}/>
            <TwitterIcon sx={{
                color:'gray'
            }} />
            <InstagramIcon sx={{
                color:'gray'
            }} />
            <LinkedInIcon sx={{
                color:'gray'
            }} />

            </Box>
            </Box>

    </Paper>

    {/*Professional skills **/}
    
    <Paper elevation={1} sx={{ backgroundColor:'#E2EAF8',width:{xs:'500px',sm:'800px',md:'100%'} ,height:'90px', marginTop:'10px'}}>

    <Box>
            <Box sx={{marginTop:'20px'}}>
            <Typography variant='h7' fontWeight={'bold'} sx={{color:'black'}}>Professional Skills </Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                <Paper elevation={0}>
                    app
                </Paper>
                <Paper elevation={0} >
                    administrative
                </Paper>
                <Paper  elevation={0}>
                    android
                </Paper>
                <Paper elevation={0}>
                    wordpress
                </Paper>
                <Paper elevation={0}>
                    design
                </Paper>
                <Paper elevation={0}>
                    react
                </Paper>
              
            </Box>
    </Box>

    </Paper>

    {/****contact us **/}

    <Paper elevation={1} sx={{backgroundColor:'#e2eaf8', display: 'flex',width:{xs:'500px',sm:'800px',md:'100%'}, height:'100%', marginTop:'10px'}}>
      <Box sx={{display:'flex',flexDirection:'column',}}>
        <Box>
      <Typography variant="h5" sx={{mb:3 ,marginInline:'10px'}}>Contact Us</Typography>
      </Box>
      <Box sx={{display:'flex'}}>
      <form>
        <TextField
          label="Your name"
          variant="outlined"
          fullWidth
          sx={{ mb: 3 ,backgroundColor:'white' }} // Increase margin to add more spacing
        />
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          sx={{ mb: 3, backgroundColor:'white'}} // Increase margin to add more spacing
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          fullWidth
          rows={4}
          sx={{ mb: 3, backgroundColor:'white'}} // Increase margin to add more spacing
        />
        <Button variant="contained"  sx={{width:'100%' ,color:'white',backgroundColor:'blue'}}>
          Send Message
        </Button>
      </form>
      </Box>
      </Box>
    </Paper>
    
        </Box>
    </Box>
</Box>

        <Footer />

        </Container>
    )
}

export default Blogpage