import React ,{ useState,useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
// import { useSelector } from 'react-redux';
// import post from '../../../reducers/posts.js';
import useStyles from './styles.js'
import Post from "./Post/Post"
const axios = require('axios');



const Posts = () => {
    const [items, setItems] = useState([""]);
    // const [isBusy, setBusy] = useState(true);
    // const posts = useSelector( ( state )=> state.posts );
    const classes= useStyles();
    // var data = await axios.get('http://localhost:5000/posts');
    // useEffect( async () => {
    //       await fetch().then(res => {
    //       if(res.ok){
    //         return res.json()
    //       }
    //     }).then(jsonResponse => setItems(jsonResponse))
    //   }, []);
    
    // const getUsers = async () => {
        
    // }
    
    useEffect(() => {
    axios.get('http://localhost:5000/posts')
        .then((res) => {
            setItems(res.data);
            console.log(res.data);   
        })
        
        // setBusy(false);
        
       
        // console.log(res.data))
        // console.log(items.length)
    },[]);

    // const fetchMyAPI = useCallback(async () => {
    //     let response = await fetch('http://localhost:5000/posts')
    //     response = await response.json()
    //     setItems(response)
    // }, [])
    

    // useEffect(() => {
    // fetchMyAPI()
    // }, [fetchMyAPI])

    // console.log(items);
    // console.log(items.data);
    return(
        // (!{items}.length) ? <CircularProgress/> : (
           <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {items.map((item) => (
                  <Grid key={item._id} item xs={12} sm={6}>
                       <Post post={item} />
                       {/* <h5>{item.creator}</h5> */}
  
                   </Grid>
                  ))}
           </Grid> 
        //    <h5>happy to be here{items[0].likeCount}</h5>
    //    )
    )
    
}

export default Posts;