import React from 'react'
import { Box, Button, Link, Typography } from '@mui/material';
import photo from '../assets/images/createaccbackimg.jpeg'


const BoxWithImage = () => {
    return (
        <Box
            sx={{
                
                backgroundImage: `url(${photo})`,
                backgroundRepeat: "no-repeat",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "60vh",
            }}
        >
            <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ color: "white", fontSize: "1.9rem", marginTop:'5%' }}>
                    Make a Difference with Your Online Resume!
                </Typography>
                <Typography sx={{ marginTop: 5, color: 'white' }}>
                    Your Resume in minutes with jobHunt resume assistant is ready!
                </Typography>
                <Button sx={{
                    backgroundColor: 'white', padding: '14px', borderRadius: 3, '&:hover': {
                        backgroundColor: 'blue',
                        color: 'white'
                    }, marginTop: 5
                }}>
                    <Link sx={{ textDecoration: 'none', color: 'blue', fontSize: 12, fontWeight: 20, '&:hover': { color: 'white' } }}>Create an account</Link>
                </Button>
            </Box>

        </Box>
    )
}

export default BoxWithImage