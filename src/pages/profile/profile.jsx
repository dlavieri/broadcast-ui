import React, { Component} from 'react';
import { connect } from 'react-redux';
import './profile.css';

import Container from '../../components/container/container';
import Input from '../../components/input/input';
import Feed from '../../components/feed/feed';
import Header from '../../components/profile-header/header';

class ProfilePage extends Component {

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

export default connect(mapStateToProps)(ProfilePage);