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
                        user={post.user}
                        timeStamp={post.timeStamp}
                        content={post.content}
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