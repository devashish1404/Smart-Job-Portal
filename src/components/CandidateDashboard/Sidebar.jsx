import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { CssBaseline, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
// import Circleprogress from './CircularProgressWithLabel';




const drawerWidth = 300;
const pages =[{text:'Dashboard',icon: <HomeOutlinedIcon sx={{"&:hover":{ color: "#063970", backgroundColor: "white", },}} />},
{text:'Company Profile',icon:<AccountCircleOutlinedIcon />},
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
function Side(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {pages.map((page, index) => (
          <ListItem key={page.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {page.icon}
              </ListItemIcon>
              <ListItemText primary={page.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box>
    <Typography variant='h7' fontWeight={'bold'}>Skills Percentage</Typography>
    <Typography fontSize={'14px'} >`put value for <strong> Cover Image </strong> field to increase your skill up to <strong> 85% </strong>`</Typography>
  </Box>

  {/***circular progress bar */}
  
  {/* <Circleprogress /> */}
    </div>
   
  );

  

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
   
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { md: 'none', lg: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box>
      
    </Box>
  );
}



export default Side;