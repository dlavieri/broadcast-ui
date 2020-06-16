import React, { useState } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './post.css';
import { apiPath } from '../../env';

import Input from '../input/input';
import Reply from '../reply/reply';


const Post = props => {

    const [ replyActive, toggleReply ] = useState(false);
    let castActive = false;

    const replyClass = classnames({
        "fas fa-reply": true,
        "active": replyActive
    })

    const castClass = classnames({
        "fas fa-broadcast-tower": true,
        "active": castActive
    })

    function handleBroadcast() {
        axios.post(`${apiPath}broadcast-post/${props._id}`)
        .then(res => {
            if (res.status !== 200) {
                alert("failure")
            }
            castActive = true;
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="post">
            <div className="post_data">
                <div className="user_data_container">
                    <img className="data_img" src='https://cdn.osxdaily.com/wp-content/uploads/2014/07/users-and-groups-icon-mac.png' alt={props.userUsername}/>
                    <span className="data_username"><Link to={"/user/" + props.user}>@{props.user}</Link></span>
                </div>
                <span className="data_timestamp">{props.timeStamp}</span>
            </div>
            <div className="post_content">
                {props.content}
            </div>
            <div className="post_interact">
                <i className={castClass} onClick={handleBroadcast}>
                    {props.broadcasts > 0 && <span className="count-pill">{props.broadcasts}</span>}
                </i>
                <i className={replyClass} onClick={()=>toggleReply(!replyActive)}>
                {props.replies.length > 0 && <span className="count-pill">{props.replies.length}</span>}
                </i>
            </div>
            {replyActive && props.replies.map(reply => <Reply user={reply.user} content={reply.content} key={reply._id}/>)}
            {replyActive && <Input reply={true} postId={props._id}/>}
        </div>
    )
}

export default Post;