// the login page. 

import { Button, TextField, Typography,Box } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, setIsSignUp} from '../store'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSignUp = useSelector(state=>state.isSignUp);
  const [inputs, setInputs]= useState({
    name:'',email:'',password:''
  });

  const handleChange = (e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  const sendRequest = async(type='login')=>{
      // console.log('going to send the login request');
      return await axios.post(`http://127.0.0.1:5000/api/user/${type}`,{name:inputs.name, email: inputs.email, password: inputs.password}).catch(err=>{console.log(err)});
     
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(isSignUp){
      console.log('it is a signUp request');
      sendRequest('signUp').then(data=>{console.log(data); localStorage.setItem('userId',data.data.user._id)});
    }
    else{
      sendRequest().then((data) => {
        console.log('login Success: ',data);
        dispatch(logIn());
        navigate('/blogs');
        localStorage.setItem('userId',data.data.user._id)
      }).catch(err => console.log(err));

    } 
  }

  const flipSignUp = ()=>{
    dispatch(setIsSignUp(!isSignUp));
  }
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" boxShadow="10px 10px 20px #ccc" padding={3} margin="auto" marginTop={30} borderRadius={5} maxWidth={400} >

          <Typography variant='h3' padding={3} textAlign='center'>{(isSignUp && 'SignUp')||'Login'}</Typography>
         
          {isSignUp && <TextField name="name" placeholder="Name" margin='normal' value={inputs.name} onChange={handleChange}/>}
          <TextField name="email"             placeholder="email" margin='normal' value={inputs.email} onChange={handleChange}/>
          <TextField name="password"          placeholder="Password" margin='normal' value={inputs.password} onChange={handleChange}/>

          <Button type='submit' sx={{borderRadius:'3', marginTop:'3'}} color='success' variant='contained'>Submit</Button>
          <Button sx={{borderRadius:'3', marginTop:'3'}}  onClick={()=>{flipSignUp()}}>Change To {(isSignUp && 'Login')||'SignUp'}</Button>

        </Box>
      </form>
    </div>
  )
}
export default Login
