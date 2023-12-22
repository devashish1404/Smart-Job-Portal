import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import Logo from '../assets/images/Logo.png';
import { NavLink } from 'react-router-dom';

const pages = ["Home", "Find jobs", "Employers", "Candidates", "Blog", "Pages"];

function ResponsiveAppbar() {
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
        <Box>
        <AppBar
            position="absolute"
            sx={{
                backgroundColor: "#063970",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{
                        display: 'flex',
                    }}>
                        <img src={Logo} alt="" style={{marginTop:'5%'}} width={150} height={40}/>
                    </Box>

                    
                        {/* Account Icon */}
                        <Box sx={{ display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-user"
                                aria-haspopup="true"
                                onClick={handleOpenUserMenu}
                            >
                                <PersonOutlineOutlinedIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </Box>
                    {/* Small screen content (Hamburger Menu Icon) */}
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                              
                            >
                                <MenuIcon sx={{
                                    color: 'white'
                                }} />
                            </IconButton>
                        </Box>


                    {/** small screen content ****/}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    display: "block",
                                    border: "transparent",
                                    color: "white",
                                    fontFamily: "monospace",
                                    fontSize: "12px",
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/***Btn component ***/}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                        }}
                    >

                        <NavLink to="signup">
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
                        <NavLink to = "login">
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
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        
        </Box>
    );
}
export default ResponsiveAppbar;