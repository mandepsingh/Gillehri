import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcons from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';


import useStyles from './styles.js'


const Post = ({post}) => {
    const classes= useStyles();
    // console.log(post._id);

    function handleClick(e,userId){
        e.preventDefault();
        // const id = this.userId;
        console.log(userId);
        const requestOptions = {
          method: 'DELETE'
        };
        console.log("i am here")
        // Note: I'm using arrow functions inside the `.fetch()` method.
        // This makes it so you don't have to bind component functions like `setState`
        // to the component.
        fetch("http://localhost:5000/posts/" + userId, requestOptions).then((response) => {
           
          return response.json();
        }).then((result) => {
          // do what you want with the response here
          alert("memory deleted successfully.")
        //   this.forceUpdate();
        //   window.location.reload();
        window.location.reload(false);
        });
        // .catch({
        // alert("nothing")
        // });
      }

    return(
        // <h5>post</h5>
           <Card className={classes.card}>
               <CardMedia className={classes.media}  image={post.selectedFile} title={post.title}/>
              
                   <div className={classes.overlay}>
                       <Typography variant="h6">{post.creator}</Typography>
                       <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                   </div>
                   {/* <div className={classes.overlay2}>
                       <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                           <MoreHorizIcon fontSize="default"/>
                       </Button>
                   </div> */}
                   <div className={classes.details}>
                        <Typography variant="body2" color="textSecondary">{post.tags}</Typography>
                   </div>
                   <CardContent>
                       <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>
                   </CardContent>
                   <CardActions className={classes.cardActions} >
                   {/* <Button size="small" color="primary" onClick={()=>{}}>
                        <ThumbUpAltIcons fontSize="small"/>
                        Like
                        {post.likeCount}
                    </Button> */}
                    <Button size="small" color="primary" onClick={(e)=> handleClick(e,post._id) }>
                        <DeleteIcon fontSize="small"/>
                        Delete
                    </Button>

                   </CardActions>

        

           </Card>
    )
}

export default Post;