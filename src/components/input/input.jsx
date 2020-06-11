import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import createPost from '../../redux/actions/createPost';
import createReply from '../../redux/actions/createReply';
import './input.css';
import classnames from 'classnames';

const Input = props => {

    const [ post, setPost ] = useState('');

    function typePost(e) {
        let text = e.target.value;
        setPost(text);
    }

    function handleSubmit() {
        let user = props.user.username;
        let postId = props.postId;

        if (props.reply) {
            props.createReply(user, post, postId);
        } else {
            props.createPost(user, post);
        }

        setPost('');
    }

    const inputClass = classnames({
        'input': true,
        'reply': props.reply
    });

    return (
        <div className={inputClass}>
            <textarea id="input" placeholder={props.reply ? "..." : "Broadcast something..."} onChange={typePost} value={post}></textarea>
            <i className="post_btn fas fa-paper-plane" onClick={handleSubmit}></i>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        isLoggedIn: state.isLoggedIn,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    createPost: createPost,
    createReply: createReply,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Input);