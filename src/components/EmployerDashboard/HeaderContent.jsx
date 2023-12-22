import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { Badge, MenuItem } from '@mui/material';
// import { default as AppBar, default as MuiAppBar } from '@mui/material/AppBar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Menu } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from "@mui/material/IconButton";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/SJ Blue.png';
import DropDown from '../../data/DropDown';
import Dashboard from './Dashboard';








const drawerWidth = 280;

const items =[{text:'Dashboard',path:'/',icon: <HomeOutlinedIcon sx={{"&:hover":{ color: "#063970", backgroundColor: "white", },}} />},
{text:'Company Profile',
path:'/company-profile',
icon:<AccountCircleOutlinedIcon />},
{text:'Post A New Job',icon:<SendOutlinedIcon />},
{text:'Manage jobs',icon:< WorkOutlineOutlinedIcon />},
{text:'All Applicants',icon:<DescriptionOutlinedIcon />},
{text:'Shortlisted Resumes',icon:<BookmarkBorderOutlinedIcon />},
{text:'Package',icon:<NewspaperOutlinedIcon />},
{text:'Messages',icon:<InsertCommentOutlinedIcon />},
{text:'Resume Alerts',icon:<NotificationsOutlinedIcon />},
{text:'Change Password',icon:<LockOutlinedIcon />},
{text:'Logout',icon:<LogoutOutlinedIcon />},
{text:'Delete Profile',icon:<DeleteOutlineOutlinedIcon />},
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


export default function ClippedDrawer() {
    const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [accountAnchorEl, setAccountAnchorEl] = React.useState(null);
  const handleMenuClick = (event, anchorEl, setAnchorEl) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (setAnchorEl) => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{zIndex: (theme) => theme.zIndex.drawer + 1 , backgroundColor:'white'}}>
        <Toolbar>
        <Typography  noWrap sx={{ flexGrow: 1,display:'flex' }} component="div">
          <img src={Logo} alt="" width={150} height={40}/>
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
                         <Badge badgeContent={1} color="primary">
                            <FavoriteBorderOutlinedIcon color='secondary' />
                            </Badge>
                        &nbsp;&nbsp;&nbsp;
                        <NotificationsNoneOutlinedIcon sx={{color:'black'}}/>
                        {" "}
                        &nbsp;&nbsp;&nbsp;
                      
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

          {/*******my account drop down ***/}
      <Button aria-controls="findjobs-menu"
      aria-haspopup="true"
      onClick={(e) => handleMenuClick(e, accountAnchorEl, setAccountAnchorEl)}
      endIcon={<KeyboardArrowDownIcon />}  marginInline={'5px'}>
                                 My Account
        </Button>
        <Menu
         id="multilevel-menu"
         anchorEl={accountAnchorEl}
         open={Boolean(accountAnchorEl)}
         onClose={() => handleMenuClose(setAccountAnchorEl)}
         MenuListProps={{
           'aria-labelledby': 'basic-button',
         }}
      >
        <Box sx={{borderTop:'2px solid blue',}}>
        <MenuItem onClick={() => handleMenuClose(setAccountAnchorEl)}>Dashboard</MenuItem>
        <hr style={{ border: 'none', borderBottom: '1px solid #e6e6e6' }} />
        <MenuItem onClick={() => handleMenuClose(setAccountAnchorEl)}>Company Profile</MenuItem>
        <hr style={{ border: 'none', borderBottom: '1px solid #e6e6e6' }} />
        <MenuItem onClick={() => handleMenuClose(setAccountAnchorEl)}>Post A new Job</MenuItem>
        <hr style={{ border: 'none', borderBottom: '1px solid #e6e6e6' }} />
        <MenuItem onClick={() => handleMenuClose(setAccountAnchorEl)}>Manage Jobs</MenuItem>
        <hr style={{ border: 'none', borderBottom: '1px solid #e6e6e6' }} />
        <MenuItem onClick={() => handleMenuClose(setAccountAnchorEl)}>All Applicants</MenuItem>
        <hr style={{ border: 'none', borderBottom: '1px solid #e6e6e6' }} />
        <MenuItem onClick={() => handleMenuClose(setAccountAnchorEl)}>Shortlisted Resume</MenuItem>
        <hr style={{ border: 'none', borderBottom: '1px solid #e6e6e6' }} />
        <MenuItem onClick={() => handleMenuClose(setAccountAnchorEl)}>Packages</MenuItem>
        <hr style={{ border: 'none', borderBottom: '1px solid #e6e6e6' }} />
        <MenuItem onClick={() => handleMenuClose(setAccountAnchorEl)}>Messages</MenuItem>
        <hr style={{ border: 'none', borderBottom: '1px solid #e6e6e6' }} />
        <MenuItem onClick={() => handleMenuClose(setAccountAnchorEl)}>Resume Alerts</MenuItem>
        <hr style={{ border: 'none', borderBottom: '1px solid #e6e6e6' }} />
        <MenuItem onClick={() => handleMenuClose(setAccountAnchorEl)}>Change Password</MenuItem>
        <hr style={{ border: 'none', borderBottom: '1px solid #e6e6e6' }} />
        <MenuItem onClick={() => handleMenuClose(setAccountAnchorEl)}>Logout</MenuItem>
        <hr style={{ border: 'none', borderBottom: '1px solid #e6e6e6' }} />
        <MenuItem onClick={() => handleMenuClose(setAccountAnchorEl)}>Delete Profile</MenuItem>
        
        </Box>
      </Menu>
      </Box>

          <NavLink to = "login">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            sx={{ marginLeft: 'auto' }} // Adjust to place the menu icon on the right
          >
            <PersonOutlineOutlinedIcon sx={{display:{xs:'flex',lg:'none'}, color:"black",}} />
          </IconButton>
          </NavLink>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{ marginLeft: 'auto' }} // Adjust to place the menu icon on the right
          >
            <MenuIcon sx={{display:{xs:'flex',lg:'none'}, color:"black"}} />
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
       
          <img src={Logo} alt="" width={150} height={40} />
        

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <CancelOutlinedIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        {items.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{width:'100%', height:'60px',borderRadius:'10px',display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Button variant='contained' color='primary' sx={{position: 'relative',
    whiteSpace: 'nowrap',
    color: '#ffffff',
    backgroundColor: 'primary',
    fontSize: '15px',
    lineHeight: '20px',
    borderRadius: '8px',
    fontWeight: '400'}}>Job Post</Button>
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
{/****Appbar end********/}


{/*****static sidebar ****/}

      <Drawer
        variant="permanent"
        sx={{
            display:{xs:'none',lg:'flex'},
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
        {items.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
       
       <Dashboard />
      </Box>
    </Box>

    
  
  );
}