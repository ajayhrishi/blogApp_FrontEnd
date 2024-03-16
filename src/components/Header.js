// container of headers

import React from 'react'
import "../App.css"
import {AppBar, Toolbar, Typography, Box, Button} from '@mui/material'
const Header = () => {
  console.log("entered to the HeaderPage");
  return (
    <AppBar sx={{background:"linear-gradient(180deg, rgba(125,118,118,1) 5%, rgba(96,96,96,1) 13%, rgba(88,80,80,1) 18%, rgba(70,69,69,1) 26%, rgba(59,59,59,1) 30%, rgba(0,0,0,1) 50%)"}}>
        <Toolbar>
            <Typography variant='h4'>BlogsApp</Typography>
            <Box display="flex" marginLeft="auto">
                <Button variant='contained' sx={{margin:1, borderRadius:10, background:"linear-gradient(352deg, rgba(125,118,118,1) 5%, rgba(96,96,96,1) 13%, rgba(88,80,80,1) 18%, rgba(70,69,69,1) 26%, rgba(59,59,59,1) 30%, rgba(0,0,0,1) 50%)"}} color="warning">Login</Button>
                <Button variant='contained' sx={{margin:1,borderRadius:10, background:"linear-gradient(352deg, rgba(125,118,118,1) 5%, rgba(96,96,96,1) 13%, rgba(88,80,80,1) 18%, rgba(70,69,69,1) 26%, rgba(59,59,59,1) 30%, rgba(0,0,0,1) 50%)"}} color="warning">SignUp</Button>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header
