import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

export default function SchoolCard({ school }) {

  

  const srcURL = () => {
    fetch(`https://logo.clearbit.com/ + ${school.domain}`)
      .then(res => {
          if(res.ok){
            console.log("success")
          } else {
            console.log("failed")
          }
      })
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar alt={ school.name } src={ fetchImage } />
        }
        title={ school.name_trimmed }
        subheader={ school.domain }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b>{ school.name }</b> is consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna. <b>See tips below.</b>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="read more" href={"/schools/" + school.id }>
          <ReadMoreIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}