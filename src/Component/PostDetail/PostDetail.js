import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const {id} = useParams()

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
   

    useEffect(() => {
        const url =`http://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])
    return (
        <div>
            <h3>this is post detail: {post.title}</h3>
            <p>{post.body}</p>
            <h3>Comments length:{comments.length}</h3>
            {
                comments.map(comment => <Comments comment={comment}></Comments>)
            }
        </div>
    );
};

export default PostDetail;