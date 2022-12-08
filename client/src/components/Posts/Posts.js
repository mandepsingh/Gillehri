import React ,{ useState,useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
// import post from '../../../reducers/posts.js';
import useStyles from './styles.js'
import Post from "./Post/Post"
const axios = require('axios');



const Posts = ({setCurrentId}) => {
    const [items, setItems] = useState([""]);
    const { posts, isLoading } = useSelector((state) => state.posts);
    console.log(posts);
    const classes= useStyles();
    if (!posts.length && !isLoading) return 'No posts';
    // const [isBusy, setBusy] = useState(true);
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
    
    // useEffect(() => {
    // axios.get('https://gillehri-project.herokuapp.com/posts')
    //     .then((res) => {
    //         setItems(res.data);
    //         // console.log(res.data);   
    //     })
        
    //     // setBusy(false);
        
       
    //     // console.log(res.data))
    //     // console.log(items.length)
    // },[]);

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
    return (
        isLoading ? <CircularProgress /> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts?.map((post) => (
              <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>
        )
      );
    };
    
    export default Posts;