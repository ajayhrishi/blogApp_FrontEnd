// container of headers

import React from 'react'
import {AppBar, Toolbar, Typography, Box, Button} from '@mui/material'
const Header = () => {
  return (
    <AppBar sx={{background:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(70,70,70,1) 18%, rgba(39,39,39,1) 52%, rgba(18,18,18,1) 77%, rgba(0,0,0,1) 87%)"}}>
        <Toolbar>
            <Typography variant='h4'>BlogsApp</Typography>
            <Box>
                <Button color="warning">Login</Button>
                <Button color="warning">SignUp</Button>
                
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header
