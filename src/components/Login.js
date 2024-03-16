// the login page. 

import { Button, TextField, Typography,Box } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'



const Login = () => {
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

  const sendRequest = async()=>{

    if(!isSignUp){
      console.log('going to send the login request');
     const response = await axios.post("http://127.0.0.1:5000/api/user/login",{email: inputs.email, password: inputs.password}).catch(err=>{console.log(err)});
     console.log(response);
    }
    else{
      const response = await axios.post("http://127.0.0.1:5000/api/user/signUp",{name:inputs.name, email: inputs.email, password: inputs.password}).catch(err=>{console.log(err)});
      console.log(response);
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    sendRequest();
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
