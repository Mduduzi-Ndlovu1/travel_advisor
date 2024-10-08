import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './styles';


const Header = ({ setCoordinates }) => {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState(null);
  

   const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        console.log(lat, lng);
        setCoordinates({ lat, lng });
      } else {
        console.log("No geometry found for the selected place.");
      }
    } else {
      console.log("Autocomplete is not loaded yet.");
    }
  };
  
  const onLoad = (autoC) => {
    setAutocomplete(autoC);
    console.log("Autocomplete loaded");
  };
  
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant='h5' className={classes.title}>
          Journey Expert
        </Typography>
        <Box display="flex">
          <Typography variant='h6' className={classes.title}>
            Restaurants, Hotels & Attractions Around you!!!
          </Typography>
           <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} className={classes.autocomplete}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
                <InputBase placeholder="Search..." classes={ {
                  root: classes.inputRoot,
                  input: classes.inputInput
                } } />
            </div>
           </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header