import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'

const PlaceDetails = ({place}) => {
  const classes = useStyles();
  return (
    <Card elevation={5}>
      <CardMedia 
        style={{height: 350}}
        image={place.photo ? place.photo.images.large.url : 'https://www.google.com/url?sa=i&url=https%3A%2F%2F900degreespizza.com%2Fplaceholder-image-6%2F&psig=AOvVaw3VTL4jA2G53FViT3yN438e&ust=1728133726365000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDNiPrl9IgDFQAAAAAdAAAAABAO'}
        title={place.name}

      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
              {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}

        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}

        {place?.address && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>  
            <LocationOnIcon /> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>  
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        
        {place?.rating && (
          <Box display="flex" justifyContent="space-between">
            <Rating name="read-only" value={place?.rating} readOnly />
          </Box>
        )}

        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
            Trip Advisor
          </Button>
          <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
            Website
          </Button>
        </CardActions>
        
        
      </CardContent>
        
    </Card>
  )
}

export default PlaceDetails