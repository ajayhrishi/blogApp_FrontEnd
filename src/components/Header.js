// container of headers
import { useState } from 'react'
import React from 'react'
import "../App.css"
// eslint is not recoganising the LinkComponent while combining with the meterial UI use the below line to prevent warnings from ES Lint
// eslint-disable-next-line  
import {AppBar, Toolbar, Typography, Box, Button, Tabs, Tab} from '@mui/material' 
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logOut, setIsSignUp } from '../store'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [value, setValue]= useState(0);
  const isLoggedIn = useSelector(state =>{return state.isLoggedIn});
  // console.log('now value that the useSelctor is emitting',useSelector(state =>{return state.isLoggedIn}));
  // const isLoggedIn = false;
  // console.log(useSelector(state => state.AuthSlice.isLoggedIn));
  // console.log(typeof(isLoggedIn));
  const logout= ()=>{
    dispatch(logOut());
    navigate('/login');

  }


  return (
    <AppBar sx={{background:"linear-gradient(180deg, rgba(125,118,118,1) 5%, rgba(96,96,96,1) 13%, rgba(88,80,80,1) 18%, rgba(70,69,69,1) 26%, rgba(59,59,59,1) 30%, rgba(0,0,0,1) 50%)"}}>
        <Toolbar>

            <Typography variant='h4'>BlogsApp</Typography>
            
         {isLoggedIn &&   <Box marginRight="auto" marginLeft="auto">
            <Tabs textColor='inherit' value={value} onChange={(e,val)=>{setValue(val)}}> 
              <Tab component={Link} to="/blogs" label="All Blogs" ></Tab>
              <Tab component={Link} to="/myBlogs" label="My Blogs"></Tab>
            </Tabs>
            </Box> }
            
            <Box display="flex" marginLeft="auto">
              {!isLoggedIn &&  <Button component={Link} to="/login" onClick={()=>{dispatch(setIsSignUp(false))}} variant='contained' sx={{margin:1,borderRadius:10, background:"linear-gradient(352deg, rgba(125,118,118,1) 5%, rgba(96,96,96,1) 13%, rgba(88,80,80,1) 18%, rgba(70,69,69,1) 26%, rgba(59,59,59,1) 30%, rgba(0,0,0,1) 50%)"}} color="warning">Login</Button>}
              {!isLoggedIn &&  <Button component={Link} to="/login" onClick={()=>{dispatch(setIsSignUp(true))}} variant='contained'  sx={{margin:1,borderRadius:10, background:"linear-gradient(352deg, rgba(125,118,118,1) 5%, rgba(96,96,96,1) 13%, rgba(88,80,80,1) 18%, rgba(70,69,69,1) 26%, rgba(59,59,59,1) 30%, rgba(0,0,0,1) 50%)"}} color="warning">SignUp</Button>}
              {isLoggedIn &&  <Button component={Link} to="/login" onClick={logout} variant='contained' sx={{margin:1,borderRadius:10, background:"linear-gradient(352deg, rgba(125,118,118,1) 5%, rgba(96,96,96,1) 13%, rgba(88,80,80,1) 18%, rgba(70,69,69,1) 26%, rgba(59,59,59,1) 30%, rgba(0,0,0,1) 50%)"}} color="warning">Logout</Button> }
            </Box>

        </Toolbar>
    </AppBar>
  )
}

export default Header
