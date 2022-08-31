import React from 'react';

const Comments = (props) => {
    const {id,name,email} = props.comment;
    return (
        <div>
          
            <h3>{name}</h3>
            <small>{email}</small>
        </div>
    );
};

export default Comments;