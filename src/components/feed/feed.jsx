import React from 'react';
import { connect } from 'react-redux';
import './feed.css';
import Post from '../post/post';

const Feed = props => {

    return (
        <div className="feed">
            {props.posts ? props.posts.map(post => {
                return (
                    <Post
                        user={post.userUsername}
                        timeStamp={post.createdAt}
                        content={post.content}
                        broadcasts={post.broadcasts}
                        replies={post.replies || []}
                        _id={post._id}
                        key={post._id}
                        />
                )
            }) : <div className="no-posts">Hm... no posts... broadcast something!</div>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
    }
}

export default connect(mapStateToProps)(Feed);