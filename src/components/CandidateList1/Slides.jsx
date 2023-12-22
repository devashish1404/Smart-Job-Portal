import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React from 'react';

function valueLabelFormat(value) {
  return `${value} KM`;
}

function calculateValue(value) {
  return value;
}

export default function NonLinearSlider() {
  const [value, setValue] = React.useState(100);

  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        value={value}
        min={0}
        step={1}
        max={100}
        onChange={handleChange}
        valueLabelDisplay="off"
        aria-labelledby="non-linear-slider"
        disableSwap
      />

      <Button
        id="non-linear-slider"
        variant='contained'
        style={{borderRadius:"10px", width:'auto'}}
        
      >
        {valueLabelFormat(calculateValue(value))}
      </Button>
    </Box>
  );
}
