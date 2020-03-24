import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';

const Post = props => {

    function sendBroadcast() {
        console.log("broadcasting")
    }

    function sendReply() {
        console.log("replying")
    }

    return (
        <div className="post">
            <div className="post_data">
                <div className="user_data_container">
                    <img className="data_img" src={props.user.img} alt={props.user.username}/>
                    <span className="data_username"><Link to={"/user/" + props.user.username}>@{props.user.username}</Link></span>
                </div>
                <span className="data_timestamp">{props.timeStamp}</span>
            </div>
            <div className="post_content">
                {props.content}
            </div>
            <div className="post_interact">
                <i className="fas fa-broadcast-tower"></i>
                <i className="fas fa-reply"></i>
            </div>
        </div>
    )
}

export default Post;