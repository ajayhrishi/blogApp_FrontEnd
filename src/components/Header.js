// container of headers
import { useState } from 'react'
import React from 'react'
import "../App.css"
// eslint is not recoganising the LinkComponent while combining with the meterial UI use the below line to prevent warnings from ES Lint
// eslint-disable-next-line  
import {AppBar, Toolbar, Typography, Box, Button, Tabs, Tab, LinkComponent} from '@mui/material' 
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const [value, setValue]= useState(0);
  const isLoggedIn = useSelector(state=>state.isLoggedasdf);
  console.log(useSelector(state=>state.isLoggedasdf));
  console.log('value in is loggedIn is ', isLoggedIn);
  return (
    <AppBar sx={{background:"linear-gradient(180deg, rgba(125,118,118,1) 5%, rgba(96,96,96,1) 13%, rgba(88,80,80,1) 18%, rgba(70,69,69,1) 26%, rgba(59,59,59,1) 30%, rgba(0,0,0,1) 50%)"}}>
        <Toolbar>

            <Typography variant='h4'>BlogsApp</Typography>
            
         {isLoggedIn &&   <Box marginRight="auto" marginLeft="auto">
            <Tabs textColor='inherit' value={value} onChange={(e,val)=>{setValue(val)}}> 
              <Tab LinkComponent={Link} to="/blogs" label="All Blogs" ></Tab>
              <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"></Tab>
            </Tabs>
            </Box> }
            
            <Box display="flex" marginLeft="auto">
              {!isLoggedIn &&  <Button LinkComponent={Link} to="/login" variant='contained' sx={{margin:1,borderRadius:10, background:"linear-gradient(352deg, rgba(125,118,118,1) 5%, rgba(96,96,96,1) 13%, rgba(88,80,80,1) 18%, rgba(70,69,69,1) 26%, rgba(59,59,59,1) 30%, rgba(0,0,0,1) 50%)"}} color="warning">Login</Button>}
              {!isLoggedIn &&  <Button LinkComponent={Link} to="/login" variant='contained' sx={{margin:1,borderRadius:10, background:"linear-gradient(352deg, rgba(125,118,118,1) 5%, rgba(96,96,96,1) 13%, rgba(88,80,80,1) 18%, rgba(70,69,69,1) 26%, rgba(59,59,59,1) 30%, rgba(0,0,0,1) 50%)"}} color="warning">SignUp</Button>}
              {isLoggedIn &&  <Button LinkComponent={Link} to="/login" variant='contained' sx={{margin:1,borderRadius:10, background:"linear-gradient(352deg, rgba(125,118,118,1) 5%, rgba(96,96,96,1) 13%, rgba(88,80,80,1) 18%, rgba(70,69,69,1) 26%, rgba(59,59,59,1) 30%, rgba(0,0,0,1) 50%)"}} color="warning">Logout</Button> }
            </Box>

        </Toolbar>
    </AppBar>
  )
}

export default Header
