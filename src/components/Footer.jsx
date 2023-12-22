import TextField from '@mui/material/TextField';
import React, { useState } from "react";

import { Box, Button, IconButton, Link, Typography } from "@mui/material";


import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../assets/images/SJ Blue.png';



const Footer = () => {

  // For email field Validation

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(e.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError) {
      alert('Please enter a valid email address.');
    } else {
      alert('Email submitted: ' + email);
    }
  };




  return (
    <>

      <Box sx={{ backgroundColor: "white" }}>
        <Box
          sx={{
            height: 350,
            width: "100%",

            color: "white",
            display: { xs: "block", md: "flex" },
            // marginInline:,
            
            
            
          }}
        >


         {/* 1st Box */}


          <Box
            sx={{
              height: 300,
              width: { xs: "100%", md: "26%" },

              marginLeft: { xs: 0, md: 7 },
              marginTop:{xs:0,md:8}
              
            }}
          >
          {/* 1st content of Box */}


            <Box sx={{ display: "flex" }}>
              <Box sx={{ fontSize: "2rem", marginTop: 1, display: "flex" }}>
                <Box sx={{ marginRight: 3 }}>
                  <img src={logo} width={150} height={40} />
                </Box>
              </Box>
            </Box>
            
            <Typography sx={{ fontSize: "1.3rem", marginTop: 2, color:'black' }}>
              Call Us
            </Typography>
            <Typography color='primary' sx={{ fontSize: "1.3rem", marginTop: 0, }}>
              123 456 7890
            </Typography>
            <Typography  sx={{ fontSize: "0.9rem", marginTop: 2, color:'gray' }}>
              329 Quasberry Street, North Melbourne VIC
            </Typography>
            <Typography  sx={{ fontSize: "0.9rem",color:'gray' }}>
              3051, Australia,
            </Typography>
            <Typography  sx={{ fontSize: "0.9rem", color:'gray' }}>
              support@superio.com
            </Typography>
          </Box>

 
         {/* Second Content Of Box */}


          <Box
            sx={{
              height: 300,
              width: { xs: "100%", md: "14%" },

              marginLeft: { xs: 0, md: 2  },
              marginTop: { xs: 2, sm: 6 },
              
            }}
          >
            <Typography sx={{ fontSize: "1.3rem",color:'black' }}>
              <strong>For Candidates</strong>
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", marginTop: 3 }}>
              <Link href="#" sx={{ textDecoration: "none", color: "gray" }}>
                Browse Jobs
              </Link>
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", marginTop: 1 }}>
              <Link href="#" sx={{ textDecoration: "none", color: "gray" }}>
                Browse Categories
              </Link>
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", marginTop: 1 }}>
              <Link href="#" sx={{ textDecoration: "none", color: "gray" }}>
                Candidate Dashboard
              </Link>
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", marginTop: 1 }}>
              <Link href="#" sx={{ textDecoration: "none", color: "gray" }}>
                Job Alerts
              </Link>
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", marginTop: 1 }}>
              <Link href="#" sx={{ textDecoration: "none", color: "gray" }}>
                My Bookmarks
              </Link>
            </Typography>
          </Box>


          {/* Third Content Of Box */}
           
          <Box
            sx={{
              height: 300,
              width: { xs: "100%", md: "14%" },

              marginLeft: { xs: 0, md: 2 },
              marginTop: { xs: 2, sm: 6 },
            }}
          >
            <Typography sx={{ fontSize: "1.3rem", color:'black' }}>
              <strong>For Employers</strong>
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", marginTop: 3 }}>
              <Link href="#" sx={{ textDecoration: "none", color: "gray" }}>
                For Employers
              </Link>
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", marginTop: 1 }}>
              <Link href="#" sx={{ textDecoration: "none", color: "gray" }}>
                Browse Candidates
              </Link>
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", marginTop: 1 }}>
              <Link href="#" sx={{ textDecoration: "none", color: "gray" }}>
                Employer Dashboard
              </Link>
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", marginTop: 1 }}>
              <Link href="#" sx={{ textDecoration: "none", color: "gray" }}>
                Add Jobs
              </Link>
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", marginTop: 1 }}>
              <Link href="#" sx={{ textDecoration: "none", color: "gray" }}>
                Job Packages
              </Link>
            </Typography>
          </Box>

          {/* Fourth Content Of Box */}

          <Box
            sx={{
              height: 300,
              width: { xs: "100%", md: "14%" },

              marginLeft: { xs: 0, md: 4 },
              marginTop: { xs: 2, sm: 6 },
              
            }}
          >
            <Typography sx={{ fontSize: "1.3rem", color:'black' }}>
              <strong>About Us</strong>
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", marginTop: 3 }}>
              <Link href="#" sx={{ textDecoration: "none", color: "gray" }}>
                Job Page
              </Link>
            </Typography>
            
            <Typography sx={{ fontSize: "1rem", marginTop: 1 }}>
              <Link href="#" sx={{ textDecoration: "none", color: "gray" }}>
                Job Page Alternative
              </Link>
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginTop: 1 }}>
              <Link href="#" sx={{ textDecoration: "none", color: "gray" }}>
                Resume Page
              </Link>
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginTop: 1 }}>
              <Link href="#" sx={{ textDecoration: "none", color: "gray" }}>
                Blog
              </Link>
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginTop: 1 }}>
              <Link href="#" sx={{ textDecoration: "none", color: "gray" }}>
                Contact
              </Link>
            </Typography>
          </Box>


          {/* fifth Content Of Box */}

          <Box
            sx={{
              height: 300,
              width: { xs: "100%", md: "20%" },

              marginLeft: { xs: 0, md: 2 },
              marginTop: { xs: 1, sm: 6 },
            }}
          >
            <Typography sx={{ fontSize: "1.3rem", color:'black' }}>
              <strong>Join Us Now</strong>
            </Typography>

            <Typography sx={{ fontSize: "1rem", marginTop: 3,color:'gray' }}>
              We dont send spam so don't worry
            </Typography>

            {/* Email Field */}

            <Box sx={{ marginTop: 4 }}>
             

              <form onSubmit={handleSubmit}>
                <TextField
                  placeholder="Email"
                  fullWidth
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  error={emailError}
                  helperText={emailError ? "Invalid email format" : ""}
                  sx={{ backgroundColor: "white", borderRadius: 2 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{marginTop:'5px'}}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
        <Box sx={{marginTop: { xs: 150, sm: 160, md: 0 }}}>
        <hr />
        </Box>
        

        {/* Second Box of Footer */}

        <Box
          sx={{
            marginLeft: { xs: 0, md: 7 },
            marginTop: { xs: 5, md: 5 },
            marginInline:6,
            height:100
            
          }}
        >
          
          <Box sx={{ display: { xs: "block", sm: "flex" }}}>
            <Box flexGrow={1} sx={{ color: "gray" }}>
              <Typography >
                &copy; {new Date().getFullYear()} Superio by ib.themes. All
                Right Reserved
              </Typography>
            </Box>
            <Box justifyContent={"center"}>
              <IconButton>
                <FacebookIcon sx={{ color: "gray" }} />
              </IconButton>
              <IconButton color="inherit">
                <TwitterIcon sx={{ color: "gray" }} />
              </IconButton>
              <IconButton color="inherit">
                <InstagramIcon sx={{ color: "gray" }} />
              </IconButton>
              <IconButton color="inherit">
                <LinkedInIcon sx={{ color: "gray" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;