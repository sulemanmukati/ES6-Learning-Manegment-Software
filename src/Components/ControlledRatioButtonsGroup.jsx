import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import { c } from 'vite/dist/node/types.d-aGj9QkWt';

export default function ControlledRadioButtonsGroup({Male,Female,sub,}) {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  

  };


  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group" >{sub}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value={Female} control={<Radio />} label={Female} />
        <FormControlLabel value={Male} control={<Radio />} label={Male} />
      </RadioGroup>
    </FormControl>
  );
}