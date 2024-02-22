import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './SelectChat.css'

export default function SelectChat() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>

      <FormControl sx={{  minWidth: 100 , borderRadius:"500px" ,color:"blue"}}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className='SelectorChat'
        >
         
          <MenuItem value="">Chat Gpt-3-5</MenuItem>
          <MenuItem value={20}> Chat Gpt-4</MenuItem>
          <MenuItem value={30}>Goagle Palm</MenuItem>
        </Select>
    
      </FormControl>
    </div>
  );
}
