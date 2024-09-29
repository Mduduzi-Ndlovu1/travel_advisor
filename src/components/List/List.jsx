import React, { useState } from 'react'
import { CircularProgress, Grid, Typography, MenuItem, FormControl, Select, InputLabel } from '@material-ui/core';
import useStyles from './styles';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
const List = () => {
  const classes = useStyles();

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const places = [
    {name: 'Cool Place'},
    {name: 'Best Beer'},
    {name: 'Best burger'},
    {name: 'Cool Place'},
    {name: 'Best Beer'},
    {name: 'Best burger'},
    {name: 'Cool Place'},
    {name: 'Best Beer'},
    {name: 'Best burger'},

  ]
  return (
    <div className={classes.container}>
      <Typography variant='h4' className={classes.title}>Places to visit</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restraurants">Restraurants</MenuItem>
          <MenuItem value="hotals">Hotals</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <div className={classes.paper}>
              <PlaceDetails place ={place}/>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List