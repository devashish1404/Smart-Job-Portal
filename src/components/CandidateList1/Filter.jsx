import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { FormControl, RadioGroup } from '@mui/material';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import Slides from './Slides';




const Switches = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor:'lightgray',
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const Filter = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  
  
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChange1 = (event) => {
    setSelectedGender(event.target.value);
  };
  return (
    <Paper elevation={1} sx={{ flexDirection: 'column', backgroundColor: '#E2EAF8', width: '100%' }}>
      {/* 1st section */}
      <Box p={2}>
        <Typography sx={{marginBottom:'16px'}}><strong>Search by Keywords</strong></Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Job title, keywords, or company"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{backgroundColor:'white'}}
        />
      </Box>

      {/* 2nd section */}
      <Box p={2}>
        <Typography sx={{marginBottom:'16px'}}><strong>Location</strong></Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="City or postcode"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            ),
          }}
          sx={{backgroundColor:'white'}}
        />
        <Typography variant="body2" color="textSecondary">
          Radius around selected destination
        </Typography>
        <Slides />
      </Box>

      {/* 3rd section */}
      <Box p={2}>
        <Typography sx={{marginBottom:'16px'}}><strong>Category</strong></Typography>
    
  <FormControl fullWidth sx={{position:'relative'}} >

  <InputLabel id="select-label" sx={{ display: 'flex', alignItems: 'center' }}>
            <WorkOutlineOutlinedIcon sx={{ marginRight: '8px',position:'static' }} />
            Choose a Category
          </InputLabel>
  <Select
        labelId="select-label"
        id="select"
        variant="outlined"
        value={selectedGender}
        onChange={handleChange1}
        sx={{ backgroundColor: 'white' }}
        label="Choose a Category"
      >
  <MenuItem value="option1">Residential</MenuItem>
  <MenuItem value="option2">Commercial</MenuItem>
  <MenuItem value="option3">Industrial</MenuItem>
  <MenuItem value="option4">Apartment</MenuItem>
</Select>
</FormControl>
      </Box>

      {/* 4th section */}
      <Box p={2}>
        <Typography sx={{marginBottom:'16px'}}><strong>Candidate Gender</strong></Typography>
    
  <FormControl fullWidth sx={{position:'relative'}} >

  <InputLabel id="select-input" sx={{ display: 'flex', alignItems: 'center' }}>
            <WorkOutlineOutlinedIcon sx={{ marginRight: '8px',position:'static' }} />
            Choose Gender
          </InputLabel>
  <Select
        labelId="select-input"
        id="select"
        variant="outlined"
        value={selectedOption}
        onChange={handleChange}
        sx={{ backgroundColor: 'white' }}
        label="Choose a Gender"
      >
  <MenuItem value="male">Male</MenuItem>
  <MenuItem value="female">Female</MenuItem>
  <MenuItem value="other">Others</MenuItem>

</Select>
</FormControl>
      </Box>

      {/* 5th section */}
      <Box p={2}>
        <List sx={{ backgroundColor: '#e2eaf8' }}>
          <Typography sx={{marginBottom:'16px' }}>
            <strong> Date Posted?</strong>
          </Typography>
          <FormControl>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
            <FormControlLabel
              value='a'
              control={<Radio />}
              label="All"
            />
            <FormControlLabel
            value='b'
              control={<Radio />}
              label="Last Hour"
            />
            <FormControlLabel
            value='c'
              control={<Radio />}
              label="Last 24 Hour"
            />
            <FormControlLabel
            value='d'
              control={<Radio />}
              label="Last 7 days"
            />
            <FormControlLabel
            value='e'
              control={<Radio />}
              label="Last 14 days"
            />
              <FormControlLabel
              value='f'
              control={<Radio />}
              label="Last 30 days"
            />
            </RadioGroup>
          </FormControl>
        </List>
      </Box>
      {/* ****6th*** */}
      <Box p={2}>
        <List sx={{ backgroundColor: '#e2eaf8' }}>
        <Typography sx={{marginBottom:'16px' }}>
            <strong>Experience</strong>
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Switches defaultChecked />}
              label="fresher"
            />
            <FormControlLabel
              control={<Switches defaultChecked />}
              label="1 Year"
            />
            <FormControlLabel
              control={<Switches defaultChecked />}
              label="2 Year"
            />
            <FormControlLabel
              control={<Switches defaultChecked />}
              label="3 Year"
            />
            <FormControlLabel
              control={<Switches defaultChecked />}
              label="4 Year"
            />
          </FormGroup>
        </List>
      </Box>
      {/* *****7th*** */}
      <Box p={2}>
        <List sx={{ backgroundColor: '#e2eaf8' }}>
        <Typography sx={{marginBottom:'16px' }}>
            <strong>Qualification</strong>
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Switches defaultChecked />}
              label="Certificate"
            />
            <FormControlLabel
              control={<Switches defaultChecked />}
              label="Associate Degree"
            />
            <FormControlLabel
              control={<Switches defaultChecked />}
              label="Bechelor Degree"
            />
            <FormControlLabel
              control={<Switches defaultChecked />}
              label="Master's Degree"
            />
            <FormControlLabel
              control={<Switches defaultChecked />}
              label="Doctorate Degree"
            />
          </FormGroup>
        </List>
      </Box>
    </Paper>
  );
}

export default Filter;
