import React from 'react';
import './header.css';

const Header = props => {
    return (
        <div className="userpage_header">
            <img className="userpage_img" src={props.user.img} />
            <div className="userpage_data">
                <h2 className="username">{props.user.username}</h2>
                <div className="aboutuser">{props.user.about}</div>
            </div>
        </div>
    )
};

export default Header;