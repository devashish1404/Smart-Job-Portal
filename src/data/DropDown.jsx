import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import * as React from "react";
import { NavLink } from 'react-router-dom';





function ResponsiveAppBar() {
    const [homeAnchorEl, setHomeAnchorEl] = React.useState(null);
    const [jobsAnchorEl, setJobsAnchorEl] = React.useState(null);
    const [employersAnchorEl, setEmployersAnchorEl] = React.useState(null);
    const [candidatesAnchorEl, setCandidatesAnchorEl] = React.useState(null);
    const [blogAnchorEl, setBlogAnchorEl] = React.useState(null);
    const [pagesAnchorEl, setPagesAnchorEl] = React.useState(null);
    const [employerlistAnchorEl, setEmployerlistAnchorEl] = React.useState(null);
    const [employersingleAnchorEl, setEmployersingleAnchorEl] = React.useState(null);

    
  
    const handleMenuClick = (event, anchorEl, setAnchorEl) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = (setAnchorEl) => {
      setAnchorEl(null);
    };

    return (
         <Box sx={{
                            flexGrow: 2,
                            display: { xs: "none", lg: "flex" },
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >


        {/********Home *************/}
        <NavLink to ='/'>
      <Button aria-controls="multilevel-menu"
      aria-haspopup="true"
      onClick={(e) => handleMenuClick(e, homeAnchorEl, setHomeAnchorEl)}
      endIcon={<KeyboardArrowDownIcon />} >Home</Button></NavLink>
        <Menu
         id="multilevel-menu"
         anchorEl={homeAnchorEl}
         open={Boolean(homeAnchorEl)}
         onClose={() => handleMenuClose(setHomeAnchorEl)}
         MenuListProps={{
           'aria-labelledby': 'basic-button',
         }}
      >

<Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',borderTop:'2px solid blue' }}>

<Box sx={{marginRight:'30px',marginTop:'20px',marginBottom:'20px',marginLeft:'30px'}}>
<MenuItem onClick={() => handleMenuClose(setHomeAnchorEl)}>Homepage01</MenuItem>
<MenuItem onClick={() => handleMenuClose(setHomeAnchorEl)}>Homepage02</MenuItem>
<MenuItem onClick={() => handleMenuClose(setHomeAnchorEl)}>Homepage03</MenuItem>
<MenuItem onClick={() => handleMenuClose(setHomeAnchorEl)}>Homepage04</MenuItem>
<MenuItem onClick={() => handleMenuClose(setHomeAnchorEl)}>Homepage05</MenuItem>
</Box>
 <Box sx={{marginRight:'30px',marginTop:'20px',marginBottom:'20px'}}>
<MenuItem onClick={() => handleMenuClose(setHomeAnchorEl)}>Homepage06</MenuItem>
<MenuItem onClick={() => handleMenuClose(setHomeAnchorEl)}>Homepage07</MenuItem>
<MenuItem onClick={() => handleMenuClose(setHomeAnchorEl)}>Homepage08</MenuItem>
<MenuItem onClick={() => handleMenuClose(setHomeAnchorEl)}>Homepage09</MenuItem>
<MenuItem onClick={() => handleMenuClose(setHomeAnchorEl)}>Homepage10</MenuItem>
</Box>
<Box sx={{marginRight:'30px',marginTop:'20px',marginBottom:'20px'}}>
<MenuItem onClick={() => handleMenuClose(setHomeAnchorEl)}>Homepage11</MenuItem>
<MenuItem onClick={() => handleMenuClose(setHomeAnchorEl)}>Homepage12</MenuItem>
<MenuItem onClick={() => handleMenuClose(setHomeAnchorEl)}>Homepage13</MenuItem>
<MenuItem onClick={() => handleMenuClose(setHomeAnchorEl)}>Homepage14</MenuItem>
<MenuItem onClick={() => handleMenuClose(setHomeAnchorEl)}>Homepage15</MenuItem>
</Box>
<Box sx={{marginRight:'30px',marginTop:'20px',marginBottom:'20px'}}>
<MenuItem onClick={() => handleMenuClose(setHomeAnchorEl)}>Homepage16</MenuItem>
<MenuItem onClick={() => handleMenuClose(setHomeAnchorEl)}>Homepage17</MenuItem>
</Box>

</Box>
      </Menu>
      
      {/************findjobs *************/}
      <NavLink to={'/job-listing'}>
      <Button aria-controls="findjobs-menu"
      aria-haspopup="true"
      onClick={(e) => handleMenuClick(e, jobsAnchorEl, setJobsAnchorEl)}
      endIcon={<KeyboardArrowDownIcon />} >Find Jobs</Button></NavLink>
       <Menu
         id="multilevel-menu"
         anchorEl={jobsAnchorEl}
         open={Boolean(jobsAnchorEl)}
         onClose={() => handleMenuClose(setJobsAnchorEl)}
         MenuListProps={{
           'aria-labelledby': 'basic-button',
         }}
      >
  
  <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',borderTop:'2px solid blue'}}>
        
        <Box sx={{marginRight:'30px',marginTop:'30px',marginBottom:'20px',marginLeft:'30px'}}>
        <Typography sx={{color:'black',fontWeight:'bold',marginLeft:'20px'}}>Jobs Listing</Typography>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs List V1</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs List V2</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs List V3</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs List V4</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs List V5</MenuItem>
        </Box>

        <Box sx={{marginRight:'30px',marginTop:'30px',marginBottom:'20px',marginLeft:'30px'}}>
        <Typography sx={{color:'black',fontWeight:'bold', marginLeft:'20px'}}>Jobs Listing</Typography>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs List V1</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs List V2</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs List V3</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs List V4</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs List V5</MenuItem>
        </Box>

        <Box sx={{marginRight:'30px',marginTop:'30px',marginBottom:'20px',marginLeft:'30px'}}>
        <Typography sx={{color:'black',fontWeight:'bold',marginLeft:'20px'}}>Jobs Listing</Typography>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs List V1</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs List V2</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs List V3</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs List V4</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs List V5</MenuItem>
        </Box>

        <Box sx={{marginRight:'30px',marginTop:'30px',marginBottom:'20px',marginLeft:'30px'}}>
        <NavLink to={'/job-single'}><Typography sx={{color:'black',fontWeight:'bold',marginLeft:'20px'}}>Jobs Single</Typography></NavLink>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs Single V1</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs Single V2</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs Single V3</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs Single V4</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs Single V5</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setJobsAnchorEl)}>Jobs Single V6</MenuItem>
        </Box>
        </Box>
       
      </Menu>


        {/**************Employers **********/}
      <NavLink to={'/employer-list'}>
      <Button aria-controls="employers-menu"
      aria-haspopup="true"
      onClick={(e) => handleMenuClick(e, employersAnchorEl, setEmployersAnchorEl)}
      endIcon={<KeyboardArrowDownIcon />}>
        Employers
        </Button>
        </NavLink>
       
        <Menu
        id="multilevel-menu"
        anchorEl={employersAnchorEl}
        open={Boolean(employersAnchorEl)}
        onClose={() => handleMenuClose(setEmployersAnchorEl)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Box sx={{borderTop:'2px solid blue'}}>
        <NavLink to={'/employer-list'}><MenuItem onClick={(e) =>
      handleMenuClick(e, employersAnchorEl, setEmployersAnchorEl, employerlistAnchorEl, setEmployerlistAnchorEl)}>Employers List 
        <KeyboardArrowRightIcon />
   
          <Menu
            id="dropdown-menu"
            anchorEl={employerlistAnchorEl}
            open={Boolean(employerlistAnchorEl)}
            onClose={() => handleMenuClose(setEmployersAnchorEl, setEmployerlistAnchorEl)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            getContentAnchorEl={null}
          >
             <Box sx={{borderTop:'2px solid blue'}}>
            <MenuItem onClick={() => handleMenuClose(setEmployerlistAnchorEl)}>Dropdown Item 1</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setEmployerlistAnchorEl)}>Dropdown Item 2</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setEmployerlistAnchorEl)}>Dropdown Item 3</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setEmployerlistAnchorEl)}>Dropdown Item 4</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setEmployerlistAnchorEl)}>Dropdown Item 5</MenuItem>
            </Box>
          </Menu>
          </MenuItem>
          </NavLink>

          <NavLink to={'/employer-single'}><MenuItem onClick={() => handleMenuClose(setEmployersAnchorEl)}>
          Employers Single
        <KeyboardArrowRightIcon />
          <Menu
            id="dropdown-menu"
            anchorEl={employersingleAnchorEl}
            open={Boolean(employersingleAnchorEl)}
            onClose={() => handleMenuClose(setEmployersingleAnchorEl)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            getContentAnchorEl={null}
          >
            <Box sx={{borderTop:'2px solid blue'}}>
            <MenuItem onClick={() => handleMenuClose(setEmployersingleAnchorEl)}>Dropdown Item 1</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setEmployersingleAnchorEl)}>Dropdown Item 2</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setEmployersingleAnchorEl)}>Dropdown Item 3</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setEmployersingleAnchorEl)}>Dropdown Item 4</MenuItem>
            </Box>
          </Menu>
          </MenuItem>
          </NavLink>
        <NavLink to ='/employer-dashboard'><MenuItem onClick={() => handleMenuClose(setEmployersAnchorEl)}>Employers Dashboard</MenuItem></NavLink>
            </Box>
      </Menu>

      {/**************candidates ***************/}
      <NavLink to={'/candidate-list1'}>
      <Button aria-controls="candidates-menu"
      aria-haspopup="true"
      onClick={(e) => handleMenuClick(e, candidatesAnchorEl, setCandidatesAnchorEl)}
      endIcon={<KeyboardArrowDownIcon />}>
        Candidates
      </Button>
      </NavLink>
      <Menu
        id="multilevel-menu"
        anchorEl={candidatesAnchorEl}
        open={Boolean(candidatesAnchorEl)}
        onClose={() => handleMenuClose(setCandidatesAnchorEl)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      ><Box sx={{borderTop:'2px solid blue'}}>
        <MenuItem onClick={() => handleMenuClose(setCandidatesAnchorEl)}>Candidates List <KeyboardArrowRightIcon />
      
          {/* <Menu
            id="dropdown-menu"
            anchorEl={candidatesAnchorEl}
            open={Boolean(candidatesAnchorEl)}
            onClose={() => handleMenuClose(setCandidatesAnchorEl)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            getContentAnchorEl={null}
          >
              <Box sx={{borderTop:'2px solid blue'}}>
            <MenuItem onClick={() => handleMenuClose(setCandidatesAnchorEl)}>Dropdown Item 1</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setCandidatesAnchorEl)}>Dropdown Item 2</MenuItem>
            </Box>
          </Menu> */}
  
          </MenuItem>
        <MenuItem onClick={() => handleMenuClose(setCandidatesAnchorEl)}>Candidates Single <KeyboardArrowRightIcon />
          {/* <Menu
            id="dropdown-menu"
            anchorEl={candidatesAnchorEl}
            open={Boolean(candidatesAnchorEl)}
            onClose={() => handleMenuClose(setCandidatesAnchorEl)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            getContentAnchorEl={null}
          >
            <Box sx={{borderTop:'2px solid blue'}}>
            <MenuItem onClick={() => handleMenuClose(setCandidatesAnchorEl)}>Dropdown Item 1</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setCandidatesAnchorEl)}>Dropdown Item 2</MenuItem>
            </Box>
          </Menu> */}
          </MenuItem>
        
        <NavLink to ='/candidate-dashboard'><MenuItem onClick={() => handleMenuClose(setCandidatesAnchorEl)}>Candidates Dashboard</MenuItem></NavLink>
        </Box>
      </Menu>
    
      {/**************blog***************/}
      <NavLink to={'/blog-page'}>
    <Button aria-controls="blog-menu"
      aria-haspopup="true"
      onClick={(e) => handleMenuClick(e, blogAnchorEl, setBlogAnchorEl)}
      endIcon={<KeyboardArrowDownIcon />}>
        Blog
        </Button>
        </NavLink>
        <Menu
        id="multilevel-menu"
        anchorEl={blogAnchorEl}
        open={Boolean(blogAnchorEl)}
        onClose={() => handleMenuClose(setBlogAnchorEl)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Box sx={{borderTop:'2px solid blue'}}></Box>
        <MenuItem  onClick={() => handleMenuClose(setBlogAnchorEl)}>Blog List V1</MenuItem>
        <MenuItem  onClick={() => handleMenuClose(setBlogAnchorEl)}>Blog List V2</MenuItem>
        <MenuItem  onClick={() => handleMenuClose(setBlogAnchorEl)}>Blog List V3</MenuItem>
        <MenuItem  onClick={() => handleMenuClose(setBlogAnchorEl)}>Blog Details</MenuItem>

      </Menu>

        {/************Pages **********/}
      <NavLink to={'/about'}>
      <Button aria-controls="pages-menu"
      aria-haspopup="true"
      onClick={(e) => handleMenuClick(e, pagesAnchorEl, setPagesAnchorEl)}
      endIcon={<KeyboardArrowDownIcon />}>
        Pages
        </Button>
        </NavLink>
        <Menu
        id="multilevel-menu"
        anchorEl={pagesAnchorEl}
        open={Boolean(pagesAnchorEl)}
        onClose={() => handleMenuClose(setPagesAnchorEl)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Box sx={{borderTop:'2px solid blue'}}>
        <MenuItem onClick={() => handleMenuClose(setPagesAnchorEl)}>Shop</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setPagesAnchorEl)}>About</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setPagesAnchorEl)}>Pricing</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setPagesAnchorEl)}>FAQ'S</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setPagesAnchorEl)}>Terms</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setPagesAnchorEl)}>Invoice</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setPagesAnchorEl)}>Contact</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setPagesAnchorEl)}>404</MenuItem>
        </Box>
      </Menu>
                    
    </Box>


                  
                    

     
    );
}
export default ResponsiveAppBar;