import React, {useState} from 'react';

import { TextField , Typography , Paper , Button } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import useStyles from './styles.js'
import { createPost } from '../../actions/posts.js';
import { checkPrime } from 'crypto';
    

const Form = () => {
    const classes= useStyles();
    // const dispatch = useDispatch();
    const [postData , setPostData] = useState({
       creator: '', title: '', message: '', tags: '', selectedFile: '',
    });

    const handleSubmit = (e) => {

        // dispatch(createPost(postData));
        axios.post("http://localhost:5000/posts",postData)
        .then(res => {
            // alert(res.data);
        })
    }
    // const clear = () => {
    // }
    function checkSize(image){
        var img = new Image();
        img.src = image;
        
        img.onload = function(){
          var imgSize = {
             w: img.width,
             h: img.height
          };
          if(imgSize.w > 600 && imgSize.h > 600){
              alert("please insert image upto 150kb, submit on your own Risk.");
            
              return;
          }
          else{
            alert( imgSize.w +' '+ imgSize.h );
            
          }
        };
    }


    return(
        <Paper className= {classes.paper}>
            <form className= {`${classes.r}  ${classes.form}`} autoComplete ='off' noValidate onSubmit= {handleSubmit}>
            <Typography variant="h6">
              Creating a Memmory
            </Typography>
            <TextField name="creator" varirant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=> setPostData({ ...postData, creator: e.target.value })} />
            <TextField name="title" varirant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=> setPostData({ ...postData, title: e.target.value })} />
            <TextField required='trure' name="message" varirant="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=> setPostData({ ...postData, message: e.target.value })} />
            {/* <TextField name="tags" varirant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=> setPostData({ ...postData,tags: e.target.value })} /> */}
             
            
            <div className= { classes.fileInput  }>
                <FileBase type="file" multiple= {false} value={postData.selectedFile} onChange={checkSize(postData.selectedFile)} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
                
            />
            <Button variant= "contained" color="secondary" size="small" onClick={(e)=> setPostData({ ...postData, selectedFile: '' })}>Clear</Button>
            </div> 

            <Button className={ classes.buttonSubmit } variant= "contained" color="primary"  disabled={postData.creator.length<=0 || postData.message.length<=0 || postData.selectedFile.length<=0 } size="large" type="submit"  fullWidth>Submit</Button>
            {/* <Button variant= "contained" color="secondary" size="small"  */}
             {/* /*onClick={clear}*/}
             {/* fullWidth>Clear</Button> */}
            
            </form>
        </Paper>
    )
}

export default Form;