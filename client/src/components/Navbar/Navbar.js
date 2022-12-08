import React, { useState, useEffect } from 'react';
import memories from '../../images/EventRocket.png'
import useStyles from './Styles.js'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {Paper, AppBar , Avatar, Button, Toolbar, Typography,  Box, StylesProvider } from '@material-ui/core';
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import * as actionType from '../../constants/actionTypes';

const Navbar= ({setCurrentId}) => {
    const classes= useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        navigate('/auth');
    
        setUser(null);
    };

    const handleUpload= (e) =>{
      setCurrentId(0);
      navigate('/upload');
    }

    useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    
    return (
      <StylesProvider injectFirst> 
        <AppBar className={classes.appbar} position="static" color="inherit">
          <Link to="/" className={classes.brandContainer}>
            <img component={Link} to="/" src={memories} alt="icon" height="45px" />
            {/* <img className={classes.image} src={memoriesLogo} alt="icon" height="40px" /> */}
          </Link>
          <Box className={classes.UploadAndSign}>
          <Button onClick={handleUpload}>Upload Event &nbsp; |</Button>
          
          <Toolbar className={classes.toolbar}>
            {user?.result ? (
              <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
              </div>
            ) : (
              <Button  component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
          </Toolbar>
          </Box>
        </AppBar>
        </StylesProvider>
      );
};


export default Navbar;
