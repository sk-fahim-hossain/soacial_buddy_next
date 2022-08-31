import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const {title, body, id} = props.post;

    const history = useHistory()

    const ShowComment = id =>{
        const url = `post/${id}`;
        history.push(url)
    }
    return (
        <div style={{border:'1px solid black',borderRadius:'5px', margin:'10px', padding:'10px'}}>
            <h3>{title}</h3>
            <p>body{body}</p>
            <button onClick={()=> ShowComment(id)}>show more and comment</button>
        </div>
    );
};

export default Post;