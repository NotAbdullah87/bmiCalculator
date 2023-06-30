import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import MenuIcon from '@material-ui/icons/Menu';

import './Header.css'; 

const header = () => {
  return (
    <Box sx={{ 
        flexGrow: 1 , 
        backgroundColor : '#0a0d22'
        }}>
    <AppBar position="static" sx={{backgroundColor : '#0a0d22'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{
             flexGrow: 1 , 
             fontFamily : 'poppins' 
             }}>
          
          BMI CALCULATOR
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default header