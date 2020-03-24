import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newPost } from '../../redux/actions/post-actions';
import './input.css';

const Input = props => {

    const [ post, setPost ] = useState('');

    function typePost(e) {
        let text = e.target.value;
        setPost(text);
    }

    function submitPost() {
        let user = props.user || {username: "davidlavieri", img: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/67568428_10162145422450118_7285213189212471296_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=hjnOAxGLhb4AX_q0tBf&_nc_ht=scontent-sjc3-1.xx&oh=2ec69d356756e70fecbf7f37c481dcf5&oe=5E95CDA3"};
        props.newPost(user, post);
        let input = document.getElementById("input");
        input.value = "";
    }

    return (
        <div className="input">
            <textarea id="input" placeholder="Broadcast something..." onChange={typePost}></textarea>
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
    newPost: newPost
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Input);