import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './profile.css';
import fetchUser from '../../redux/actions/fetchUser';

import Container from '../../components/container/container';
import Input from '../../components/input/input';
import Feed from '../../components/feed/feed';
import Header from '../../components/profile-header/header';

class ProfilePage extends Component {

    componentDidMount() {
        let username = this.props.match.params.username;
        this.props.fetchUser(username);
    }

    render() {

        return (
            <Container>
                <Header user={this.props.user} />
                <Input />
                <Feed />
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
      isLoggedIn: state.isLoggedIn,
      user: state.user,
      token: state.token
  
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUser: fetchUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);