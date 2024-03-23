import { InputLabel, Typography, Box, TextField, Button } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const InputLable = {mb:1, mt:2, fontSize:'24px', fontWeight:'bold'};

const AddBlog = () => {
  const [inputs, setInputs]= useState({
    title:'',
    image:'',
    description:'',
    user:''
  });
  const handleChange = (e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    sendRequest();
    console.log(inputs);
  }

  const sendRequest = async()=>{
    const res = await axios.post("https://blogapp-backend-694a.onrender.com/api/blogs/addBlog", {title:inputs.title, image:inputs.image, description:inputs.description, user: localStorage.getItem('userId')})
                .catch(err=>console.log(err));
    return res;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box border={3} borderColor='Green' borderRadius={10} boxShadow='10px 10px 20px #ccc' padding={3} margin={3} flexDirection={'column'} width='80%'>
          <Typography fontWeight={'bold'} padding={3} color='grey' variant='h2' textAlign={'center'}>Enter the Blog Details</Typography>
          <InputLabel sx={InputLable}>Title</InputLabel>
          <TextField name='title' value={inputs.title} onChange={handleChange} margin='auto' variant='outlined' sx={{ width: '50%' }}/>
          <InputLabel sx={InputLable}>Description</InputLabel>
          <TextField name='description' value={inputs.description} onChange={handleChange}  margin='auto' variant='outlined' sx={{ width: '50%' }}/>
          <InputLabel sx={InputLable}>ImageURL</InputLabel>
          <TextField  name='image' value={inputs.image} onChange={handleChange}  margin='auto' variant='outlined' sx={{ width: '50%' }}/>
          {/* Wrapping Submit button in a Box for separate line */}
          <Box display="flex" justifyContent="center" mt={2}>
            <Button type='submit' sx={{ borderRadius:'3' }} color='success' variant='contained' >Submit</Button>
          </Box>
        </Box>
      </form>
    </div>
  )
}

export default AddBlog