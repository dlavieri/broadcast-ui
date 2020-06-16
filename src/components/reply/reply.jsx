import React from 'react';
import './reply.css';

const Reply = props => {

    return (
        <div className="comment">
            <h6 className="comment-username">{props.user}</h6>
            <p className="comment-content">{props.content}</p>
        </div>
    )
}

export default Reply;