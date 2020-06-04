import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './post.css';
import { apiPath } from '../../env';

const Post = props => {

    function handleBroadcast() {
        console.log("broadcasting")
        axios.post(`${apiPath}broadcast-post/${props._id}`)
        .then(res => {
            if (res.status !== 200) {
                alert("failure")
            }
        })
        .catch(err => console.log(err))
    }

    function handleReply() {
        console.log("replying")
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
                <i className="fas fa-broadcast-tower" onClick={handleBroadcast}></i>
                <i className="fas fa-reply"></i>
            </div>
        </div>
    )
}

export default Post;