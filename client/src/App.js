import React, {useEffect} from 'react';

import {Container ,AppBar , Typography , Grid , Grow} from '@material-ui/core';

import { getPosts } from './actions/posts.js'
import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'
import { useDispatch } from 'react-redux';

import memories from './images/memories.png';

import useStyles from './styles.js'

const App= () =>{
    const classes= useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getPosts);
    }, [dispatch]);
    
    return (
       <Container maxwidth="lg" >
         <AppBar className={classes.appBar} position="static" color="inherit">
           <Typography className={classes.heading} class="ProjectTitle" variant="h3" align="center">GILLEHRi</Typography>
        
           <img className ={classes.image} src={memories} alt="memories" height="60" />
       
         </AppBar>
         <Grow in>
           <Container>
             <Grid container justify="space-between" alignItems="stretch" spacing ={3}>
               <Grid item xs={12} sm={7}>
                 <Posts/>

               </Grid>
               <Grid item xs={12} sm={4}>
                 <Form/>
                 
               </Grid>

             </Grid>
           </Container>
         </Grow>
       </Container> 
    );
}

export default App;