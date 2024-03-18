// the login page. 

import { Button, TextField, Typography,Box } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { logIn,logOut } from '../store'


const Login = () => {
  const dispatch = useDispatch();
  const [isSignUp,setIsSignUp] = useState(false);
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
      console.log('going to send the login request');
      return await axios.post(`http://127.0.0.1:5000/api/user/${type}`,{name:inputs.name, email: inputs.email, password: inputs.password}).catch(err=>{console.log('there is an error')});
      // const response = await axios.post("http://127.0.0.1:5000/api/user/signUp",{name:inputs.name, email: inputs.email, password: inputs.password}).catch(err=>{console.log(err)});
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(isSignUp){
      console.log('it is a signUp request');
      sendRequest('signUp').then(()=>{console.log('the then statement is triggered')}).then(data=>console.log(data));
    }
    else{
      console.log('it is a login request');
      sendRequest().then(()=>{console.log('the then statement is triggered'); dispatch(logIn())}).then(data=>console.log(data));
    }
    
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
          <Button sx={{borderRadius:'3', marginTop:'3'}}  onClick={()=>{setIsSignUp(!isSignUp)}}>Change To {(isSignUp && 'Login')||'SignUp'}</Button>

        </Box>
      </form>
    </div>
  )
}

export default Login
