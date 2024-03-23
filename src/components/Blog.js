import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography, Box, IconButton } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Blog = ({title,image,description,user,name, isUser,blogId }) => {
  const navigate = useNavigate();
  const nameParts = name.split(" "); // will help to get the first letter in both first name and last name. 
  
  const handleEdit = (e)=>{
    navigate(`/myBlogs/${blogId}`);
  }

  const deleteRequest = async()=>{
    const res = await axios.delete(`https://blogapp-backend-694a.onrender.com/api/blogs/deleteBlog/${blogId}`);
    return res;
  }

  const handleDelete = (e) =>{
    deleteRequest().then(data=>console.log(data)).catch(err=>console.log(err));
    navigate('/myBlogs');
  }

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
      {isUser &&
      (<Box display='flex'> 
      <IconButton sx={{marginLeft:'auto'}} onClick={handleEdit}> <EditIcon/></IconButton>
      <IconButton onClick={handleDelete}> <DeleteIcon/> </IconButton>
      </Box>)}

      <CardHeader
        avatar={
          <Avatar 
  aria-label="recipe">
          {nameParts[0].charAt(0)}{nameParts[1].charAt(0)}
          </Avatar>
        }
        title={title}
        // subheader="Date when the blog is added"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Name of the image that should show when the image is down or for the auto read feature that is designed for the blind people"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         <b>{name}</b>{' : '} {description}
        </Typography>
      </CardContent>

      
    </Card>
    </div>
  )
}

export default Blog
