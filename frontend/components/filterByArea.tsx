import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FilterByArea(props: any) {
  return (
    <div>
      <FormControl variant="outlined">
        <InputLabel>Filter By Area</InputLabel>
        <Select
          onChange={(event) => {
            props.filterArea(event.target.value);
          }}
        >
          <MenuItem value={''}>
            <em>All</em>
          </MenuItem>
          <MenuItem value={'Africa'}>Africa</MenuItem>
          <MenuItem value={'Americas'}>Americas</MenuItem>
          <MenuItem value={'Asia'}>Asia</MenuItem>
          <MenuItem value={'Europe'}>Europe</MenuItem>
          <MenuItem value={'Oceania'}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
