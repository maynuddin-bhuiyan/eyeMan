import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../../../Group 1.png';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Container } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';




const Navigation = () => {
    const {user, logOutUser} = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ background: "#002F6B" }} position="static">
        <Container maxWidth="xl">
        <Toolbar disableGutters>
          
            <IconButton className='Logo' sx={{cursor: "pointer"}}>
            <Link className='text-alin' to="/home"><img src={logo} alt="" /></Link>
            </IconButton>

            

            <Typography sx={{ mr: 4 , ml: "400px", cursor: "pointer", textDecoration: 'none'}} variant="h6">
             <Link className='text-alin' to="home">Home</Link>
             
            </Typography>
            <Typography sx={{ mr: 4, cursor: "pointer" }} variant="h6">
            <HashLink className='text-alin' 
            smooth to="/home#Features">Features</HashLink>
            </Typography>
            <Typography sx={{ mr: "200px", cursor: "pointer" }} variant="h6">
              <Link className='text-alin' to="/singlepage">Security-Cameras</Link> 
            </Typography>

           

            <Button color="inherit">

              {
                user?.email ? 

                
                <Button onClick={logOutUser} color='inherit'> LogOut </Button>

                :

                <Link className='text-alin' to="/login">Log in</Link>

              }
              
              
              
              
              </Button>
          </Toolbar>
          </Container>
        </AppBar>
      </Box>
    );
};

export default Navigation;