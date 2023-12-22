
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import Logo1 from '../../assets/images/SJ Blue.png';
import DropDown from '../../data/DropDown';

const drawerWidth = 240;

const items =[{text:'Dashboard',path:'/',icon: <HomeOutlinedIcon sx={{"&:hover":{ color: "#063970", backgroundColor: "white", },}} />},
{text:'Company Profile',path:'/company-profile',icon:<AccountCircleOutlinedIcon />},
{text:'Post A New Job',path:'/job-post',icon:<SendOutlinedIcon />},
{text:'Manage jobs',path:'/manage-job',icon:< WorkOutlineOutlinedIcon />},
{text:'All Applicants',path:'/all-applicant',icon:<DescriptionOutlinedIcon />},
{text:'Shortlisted Resumes',path:'/shortlist-resume',icon:<BookmarkBorderOutlinedIcon />},
{text:'Package',path:'',icon:<NewspaperOutlinedIcon />},
{text:'Messages',path:'',icon:<InsertCommentOutlinedIcon />},
{text:'Resume Alerts',path:'',icon:<NotificationsOutlinedIcon />},
{text:'Change Password',path:'/change-password',icon:<LockOutlinedIcon />},
{text:'Logout',path:'/logout',icon:<LogoutOutlinedIcon />},
{text:'Delete Profile',path:'',icon:<DeleteOutlineOutlinedIcon />},
]


const Main = styled('main')(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    position: 'absolute', // Change the position to "absolute"
    marginLeft: 0,
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth, // Change the margin property
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end', // Adjust to place the menu icon on the right
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{position:'absolute',left:0,top:0,width:'100%',height:'auto',zIndex:'99',transition:'all 300ms ease'}}>
      <CssBaseline />
      <AppBar position="static" open={open} sx={{zIndex: (theme) => theme.zIndex.drawer + 1 , backgroundColor:'#063970',}}>
        <Toolbar>
        <Typography  noWrap sx={{ flexGrow: 1,display:{xs:'none',md:'flex'} }} component="div">
          <NavLink to={'/'}><img src={Logo} alt="" width={150} height={40}/></NavLink>
          </Typography>

         {/********Header dropdown *******/}
          <DropDown />
  

                    {/******3rd portion****/}
                    <Box
                        sx={{
                            display: { xs: "none", lg: "flex" },
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                        }}
                    >

                        <NavLink to="/signup">
                        <Button
                            sx={{
                                fontSize: "12px",
                                color: "white"
                            }}
                        >
                            Register
                        </Button>{" "}
                        </NavLink>
                        &nbsp;&nbsp;&nbsp;
                        <NavLink to = "/login">
                            <Button
                                
                                variant="outlined"
                            
                                sx={{
                                    borderRadius: "8px",
                                    fontSize: "10px",
                                    "&:hover": {
                                        color: "#063970", 
                                        backgroundColor: "white", 
                                    },
                                }}
                            >
                                Login
                            </Button>{" "}
                        </NavLink>
                        &nbsp;&nbsp;&nbsp;
                        <NavLink to={'/job-post'}>
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: "8px",
                                fontSize: "10px",
                                "&:hover": {
                                    color: "white", 
                                    backgroundColor: "#063970", 
                                },
                            }}
                        >
                            Job Post
                        </Button>
                        </NavLink>
                    </Box>
                    <NavLink to = "/login">
            <IconButton
            color="inherit"
            aria-label="open drawer"
            sx={{ marginLeft: 'auto',}} // Adjust to place the menu icon on the right
          >
            <PersonOutlineOutlinedIcon sx={{display:{xs:'flex',lg:'none'}, color:"white",}} />
          </IconButton>
          </NavLink>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{ marginLeft: 'auto' }} // Adjust to place the menu icon on the right
          >
            <MenuIcon sx={{display:{xs:'flex',lg:'none'}, color:"white"}} />
          </IconButton>
        </Toolbar>
      </AppBar>


      {/*****Left sidebar */}
      <Main>
        <DrawerHeader />
      </Main>
      <Drawer
        sx={{
          // width: drawerWidth,
          // flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="left" // Change the anchor to "left"
        open={open}
      >
        <DrawerHeader>
       
          <img src={Logo1} alt="" width={150} height={40} />
        

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <CancelOutlinedIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        {items.map((item, index) => (
          
            <ListItemButton
            key={index}
            component={NavLink}
            to={item.path}
            activeClassName="active"
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
         
        ))}
      </List>

      <Box sx={{width:'100%', height:'60px',borderRadius:'10px',display:'flex', justifyContent:'center', alignItems:'center'}}>
      <NavLink to={'/job-post'}><Button variant='contained' color='primary' sx={{position: 'relative',
    whiteSpace: 'nowrap',
    color: '#ffffff',
    backgroundColor: 'primary',
    fontSize: '15px',
    lineHeight: '20px',
    borderRadius: '8px',
    fontWeight: '400'}}>Job Post</Button></NavLink>
      </Box>

      <Box sx={{marginInline:'10px', marginTop:'10px'}}>     
      <Typography variant='h6' sx={{color:'gray'}}>Call us</Typography>
      <Typography variant='h7' sx={{color:'black', fontWeight:'bold'}}>123 456 9876</Typography>
      <Typography sx={{color:'gray', fontSize:'15px',}}>235/ America newgulf way ,street no. 13</Typography>
      <Typography href='#'>support@smartjob.com</Typography>
      </Box>
      {/*******social media icon ***/}
      <Box align="left" sx={{display:'flex',flexDirection:'row', justifyContent:'space-evenly',marginTop:'10px'}}>
     
            <FacebookOutlinedIcon /> 
            <TwitterIcon /> 
            <LinkedInIcon /> 
            <InstagramIcon /> 
      </Box>

      </Drawer>
    </Box>
  );
}