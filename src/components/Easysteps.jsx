import { Box,Typography } from '@mui/material'
import React from 'react'

const EasySteps = () => {
  return (
    <>
      <Box sx={{marginInline:{xs:2,md:15},display:{xs:'block',md:'flex'},marginTop:3, marginBottom:'5%'}} >
        <Box sx={{height:{xs:300,md:608},width:{xs:'100%',md:'45%'},backgroundColor:'gray',display:'flex',justifyContent:'center',alignItems:'center'}}>
           <Typography sx={{fontSize:{xs:'30px',md:'60px'}}}>
            608×600
           </Typography>
        </Box>
        <Box sx={{backgroundColor:'white',marginLeft:{xs:0,md:17},justifyContent:'center',alignItems:'center',marginBlock:11}}>
         <Typography sx={{fontSize:'1.4rem'}}>
            <strong>Find Jobs with 3 easy Steps</strong>
         </Typography>
         <Typography sx={{fontSize:'0.9rem',color:'gray',marginTop:3}}>
         img elements must have an alt prop, either with meaningful text,
          or an empty string for decorative imagesimg images are just..
         </Typography>
         
        <Box sx={{display:'flex',gap:3,marginTop:6}}>
         <Box sx={{position:'relative',width:'40px',height:'40px',borderRadius:'40px', backgroundColor:'blue'}}>
            <Typography sx={{position:'absolute',top:'9px', color:'white',marginLeft:2,fontSize:16}}>
              1
            </Typography>
            
         </Box>
         <Typography sx={{marginTop:1,fontSize:{xs:'14px',sm:'16px'}}}>
                <strong>Register an account to start</strong>
            </Typography>
         </Box>

         <Box sx={{display:'flex',gap:3,marginTop:6}}>
         <Box sx={{position:'relative',width:{xs:'40px',sm:'40px'},height:'40px',borderRadius:'40px', backgroundColor:'blue'}}>
            <Typography sx={{position:'absolute',top:'9px', color:'white',marginLeft:2}}>
              2
            </Typography>
            
         </Box>
         <Typography sx={{marginTop:1,fontSize:{xs:'14px',sm:'16px'}}}>
           <strong>Explore over thousands of resumes</strong>
            </Typography>
         </Box>

         <Box sx={{display:'flex',gap:3,marginTop:6}}>
         <Box sx={{position:'relative',width:'40px',height:'40px',borderRadius:'40px', backgroundColor:'blue'}}>
            <Typography sx={{position:'absolute',top:'9px', color:'white',marginLeft:2}}>
              3
            </Typography>
            
         </Box>
         <Typography sx={{marginTop:1,fontSize:{xs:'14px',sm:'16px'}}}>
         <strong>Find the most suitable candidate</strong>
            </Typography>
         </Box>


        </Box>
      </Box>
    </>
  )
}

export default EasySteps