// BlogDetails page

import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const InputLable = {mb:1, mt:2, fontSize:'24px', fontWeight:'bold'};

const BlogDetails = () => {
  const [blog,setBlog]= useState();
  const [inputs, setInputs]= useState({});
  const id = useParams().id;
  
  const navigate = useNavigate()

  const fetchDetails = async()=>{
    const res = await axios.get(`https://blogapp-backend-694a.onrender.com/api/blogs/${id}`)
    const data = await res.data;
    return data;
  }

  useEffect(()=>{
    fetchDetails()
    .then(data=>{setBlog(data.blog);})
    .then(()=> {setInputs({ title:blog.title, description:blog.description});})
    .catch(err=>{console.log(err)}); 
    },[id]);


 
  const handleChange = (e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    sendRequest();
    navigate('/myBlogs');
  }

  const sendRequest = async()=>{
    const res = await axios.put(`https://blogapp-backend-694a.onrender.com/api/blogs/update/${id}`, {title:inputs.title,description:inputs.description})
                .catch(err=>console.log(err));
    return res;
  }


  return (
    <div>
    <form onSubmit={handleSubmit}>
      <Box border={3} borderColor='Green' borderRadius={10} boxShadow='10px 10px 20px #ccc' padding={3} margin={3} flexDirection={'column'} width='80%'>
        <Typography fontWeight={'bold'} padding={3} color='grey' variant='h2' textAlign={'center'}>Edit the Blog Details</Typography>
        <InputLabel sx={InputLable}>Title</InputLabel>
        <TextField name='title' value={inputs.title} onChange={handleChange} margin='auto' variant='outlined' sx={{ width: '50%' }}/>
        <InputLabel sx={InputLable}>Description</InputLabel>
        <TextField name='description' value={inputs.description} onChange={handleChange}  margin='auto' variant='outlined' sx={{ width: '50%' }}/>
        {/* Wrapping Submit button in a Box for separate line */}
        <Box display="flex" justifyContent="center" mt={2}>
          <Button type='submit' sx={{ borderRadius:'3' }} color='success' variant='contained' >Submit</Button>
        </Box>
      </Box>
    </form>
  </div>
  )
}

export default BlogDetails
