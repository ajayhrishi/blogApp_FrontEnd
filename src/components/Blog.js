import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Blog = () => {
  return (
    <div>
      <Card sx={{
    bgcolor: 'white',
    margin: 'auto',
    width: '40%',
    mt: 2,
    padding: 2,
    boxShadow: '5px 5px 10px #ccc',
    '&:hover': { // Use & to reference the root element (Avatar)
      boxShadow: '10px 10px 20px #ccc',
    }
  }}>
      <CardHeader
        avatar={
          <Avatar 
  aria-label="recipe">
          </Avatar>
        }
        title="This is the Name of the Blog"
        subheader="Date when the blog is added"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Name of the image that should show when the image is down or for the auto read feature that is designed for the blind people"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is the blog description.........
        </Typography>
      </CardContent>

      
    </Card>
    </div>
  )
}

export default Blog
