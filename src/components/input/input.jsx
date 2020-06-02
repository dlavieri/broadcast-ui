import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import createPost from '../../redux/actions/createPost';
import './input.css';

const Input = props => {

    const [ post, setPost ] = useState('');

    function typePost(e) {
        let text = e.target.value;
        setPost(text);
    }

    function submitPost() {
        let user = props.user.username;
        props.createPost(user, post);
        setPost('');
    }

    return (
        <div className="input">
            <textarea id="input" placeholder="Broadcast something..." onChange={typePost} value={post}></textarea>
            <i className="post_btn fas fa-paper-plane" onClick={submitPost}></i>
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
    createPost: createPost
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Input);